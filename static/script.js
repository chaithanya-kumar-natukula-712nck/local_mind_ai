let chats = JSON.parse(localStorage.getItem("chats")) || {};
let currentChatId = null;

function saveChats() {
    localStorage.setItem("chats", JSON.stringify(chats));
}
function createNewChat() {
    const id = crypto.randomUUID();

    // Count existing chats
    const chatCount = Object.keys(chats).length + 1;

    chats[id] = {
        title: "New Chat " + chatCount,
        messages: [],
        createdAt: Date.now(),
    };

    currentChatId = id;

    saveChats();
    renderChatList();
    renderMessages();
}

function renderChatList() {
    const chatList = document.getElementById("chat-list");
    chatList.innerHTML = "";

    const sortedChatIds = Object.keys(chats).sort((a, b) => {
        const timeA = chats[a].createdAt || 0;
        const timeB = chats[b].createdAt || 0;
        return timeB - timeA;
    });

    sortedChatIds.forEach(id => {
        const div = document.createElement("div");
        div.className = "chat-item";

        if (id === currentChatId) {
            div.classList.add("active-chat");
        }

        /* 🔹 Make entire chat clickable */
        div.onclick = () => {
            currentChatId = id;
            renderChatList();
            renderMessages();
        };

        /* 🔹 Chat Title */
        const title = document.createElement("span");
        title.innerText = chats[id].title;

        
      
        const actions = document.createElement("div");
        actions.style.position = "relative";

        /* Three dot button */
        const menuBtn = document.createElement("button");
        menuBtn.innerText = "⋮";
        menuBtn.className = "menu-btn";

        menuBtn.onclick = (e) => {
            e.stopPropagation();
            toggleMenu(id);
        };

        actions.appendChild(menuBtn);
        div.appendChild(title);
        div.appendChild(actions);

        chatList.appendChild(div);
    });
}    
function deleteChat(id) {
    delete chats[id];

    // If deleted chat was active
    if (currentChatId === id) {
        const sortedChatIds = Object.keys(chats)
    .sort((a, b) => {
    const timeA = chats[a].createdAt || 0;
    const timeB = chats[b].createdAt || 0;
    return timeB - timeA;
});

currentChatId = sortedChatIds.length ? sortedChatIds[0] : null;
    }

    saveChats();
    renderChatList();
    renderMessages();
}

function renderMessages() {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = "";

    if (!currentChatId) return;

    chats[currentChatId].messages.forEach(msg => {
        const div = document.createElement("div");
        div.className = "message " + msg.role;
        div.innerText = msg.content;
        chatBox.appendChild(div);
    });

    chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
    const inputField = document.getElementById("user-input");
    const message = inputField.value.trim();
    if (!message || !currentChatId) return;

    const chatBox = document.getElementById("chat-box");

    // Add user message
    chats[currentChatId].messages.push({
        role: "user",
        content: message
    });

    // If first message, update title
    if (chats[currentChatId].messages.length === 1) {
        chats[currentChatId].title =
            message.length > 25
                ? message.substring(0, 25) + "..."
                : message;

        saveChats();
        renderChatList();   // update sidebar title
    }

    renderMessages();
    inputField.value = "";

    // Typing indicator
    const typingDiv = document.createElement("div");
    typingDiv.className = "message bot";
    typingDiv.id = "typing-indicator";
    typingDiv.innerText = "Typing...";
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                messages: chats[currentChatId].messages
            })
        });

        const data = await response.json();

        typingDiv.remove();
        let cleanReply = data.reply.replace(/^Assistant: \s*/i, "");

        chats[currentChatId].messages.push({
            role: "assistant",
            content: cleanReply
        });


        saveChats();
        renderMessages();

    } catch (error) {
        typingDiv.innerText = "Error generating response.";
    }
}

const textarea = document.getElementById("user-input");

textarea.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();   // Stop new line
        sendMessage();        // Call your existing function
    }
});

function renameChat(id) {
    const newName = prompt("Enter new chat name:");

    if (newName && newName.trim() !== "") {
        chats[id].title = newName.trim();
        saveChats();
        renderChatList();
    }
}

function toggleMenu(id) {
    const existingMenu = document.getElementById("menu-" + id);

    if (existingMenu) {
        existingMenu.remove();
        return;
    }

    const menu = document.createElement("div");
    menu.className = "chat-menu";
    menu.id = "menu-" + id;

    const renameOption = document.createElement("div");
    renameOption.innerText = "🖊 Rename";
    renameOption.onclick = () => {
        renameChat(id);
        menu.remove();
    };

    const deleteOption = document.createElement("div");
    deleteOption.innerText = "🗑 Delete";
    deleteOption.onclick = () => {
        deleteChat(id);
        menu.remove();
    };

    menu.appendChild(renameOption);
    menu.appendChild(deleteOption);

    event.target.parentElement.appendChild(menu);
}
if (Object.keys(chats).length === 0) {
    createNewChat();
} else {
    const sortedChatIds = Object.keys(chats)
    .sort((a, b) => {
    const timeA = chats[a].createdAt || 0;
    const timeB = chats[b].createdAt || 0;
    return timeB - timeA;
});

    currentChatId = sortedChatIds[0];
}

renderChatList();
renderMessages();

