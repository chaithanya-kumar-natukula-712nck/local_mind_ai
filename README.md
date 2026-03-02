🚀 Local Mind AI

Offline AI Chatbot powered by FastAPI + Ollama + TinyLlama

Local Mind AI is a lightweight AI chatbot that runs completely on your local machine using Ollama. No external APIs. No cloud dependency. Fully private.

📌 Features

🧠 Local LLM using TinyLlama

⚡ FastAPI backend

💬 Clean chat UI

🗂 Multiple chat sessions

✏ Rename & delete chats

🧾 Local storage persistence

🔒 Fully offline & private

🏗 Tech Stack

Backend: FastAPI

Frontend: HTML, CSS, JavaScript

LLM Engine: Ollama

Model: tinyllama

Server: Uvicorn

📂 Project Structure local_mind_ai/ │ ├── app/ │ ├── main.py │ ├── models/ │ │ └── schemas.py │ └── services/ │ └── service.py │ ├── static/ │ ├── style.css │ └── script.js │ ├── templates/ │ └── index.html │ ├── requirements.txt └── README.md ⚙️ Installation Guide 1️⃣ Clone the Repository git clone cd local_mind_ai 2️⃣ Create Virtual Environment (Recommended) python -m venv venv

Activate it:

Linux / Mac:

source venv/bin/activate

Windows:

venv\Scripts\activate 3️⃣ Install Dependencies pip install -r requirements.txt

Your requirements.txt should contain:

fastapi uvicorn requests 🤖 Install Ollama

Download Ollama from:

👉 https://ollama.com

After installation, pull the model:

ollama pull tinyllama

Start Ollama server:

ollama serve

Ollama will run at:

http://localhost:11434 ▶️ Run the Application

Inside project folder:

uvicorn app.main:app --reload

Open browser:

http://127.0.0.1:8000 💬 How It Works

User sends message from frontend.

FastAPI receives chat messages.

Backend formats prompt.

Request is sent to Ollama API.

Model generates response.

Response returned to frontend.

🔒 Privacy

Runs fully offline

No cloud APIs

No data leaves your machine

🛠 Future Improvements

Streaming responses

Chat export feature

Dark/light theme toggle

Model selector

Docker deployment

📜 License

This project is for learning and educational purposes.

⭐ Author

Built with ❤️ using FastAPI & Ollama.