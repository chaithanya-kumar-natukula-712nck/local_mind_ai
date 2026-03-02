# 🧠 Local Mind AI

**Local Mind AI** is an offline AI chatbot that runs fully locally using **FastAPI**, **Ollama**, and the **tinyllama** model — no cloud APIs, no external LLM services, and fully private.

---

## ✨ Features

- 🤖 Conversation with an LLM entirely locally  
- 📡 FastAPI backend with a clean frontend UI  
- 💾 Local storage for chat history  
- ✏️ Rename & delete chat threads  
- 🔒 Fully offline — no external dependency  

---

## 🛠 Tech Stack

- **Backend:** FastAPI  
- **Frontend:** HTML, CSS, JavaScript  
- **LLM Engine:** Ollama  
- **Model:** tinyllama  
- **Server:** Uvicorn  

---

## 📁 Project Structure

```
local_mind_ai/
│
├── app/
│   ├── main.py
│   ├── models/
│   │   └── schemas.py
│   └── services/
│       └── service.py
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── index.html
│
├── requirements.txt
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/chaithanya-kumar-natukula-712nck/local_mind_ai.git
cd local_mind_ai
```

---

### 2️⃣ Create a Python virtual environment (recommended)

```bash
python -m venv venv
```

Activate it:

**Linux / macOS**
```bash
source venv/bin/activate
```

**Windows**
```bash
venv\Scripts\activate
```

---

### 3️⃣ Install Python dependencies

```bash
pip install -r requirements.txt
```


## 🤖 Install Ollama & Model

You must install **Ollama** separately:

👉 https://ollama.com

After installing, pull the tinyllama model:

```bash
ollama pull tinyllama
```

Start the Ollama server:

```bash
ollama serve
```

It will run at:

```
http://localhost:11434
```

---

## ▶️ Run the Application

Start the backend:

```bash
uvicorn app.main:app --reload
```

Open your browser:

```
http://127.0.0.1:8000
```

---

## 🔄 How It Works

1. User sends message from frontend  
2. FastAPI receives it at `/chat`  
3. Backend formats prompt and calls the Ollama server  
4. TinyLlama produces a response  
5. Response is shown in UI  

---

## 🧠 Privacy & Offline Usage

This app is designed to run entirely on your machine:

✔ No API keys  
✔ No data sent over the internet  
✔ Full privacy by design

---

## 📈 Roadmap / Future Improvements

- Streaming responses  
- Model selection dropdown  
- Dark / Light mode  
- Export chats  
- Docker deployment

---

## 👨‍💻 Author

Chaithanya Kumar  
📍 Andhra Pradesh, India

---

## 📜 License

This project is open-source and free to use.