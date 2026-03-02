# 🧠 Local Mind AI

**Local Mind AI** is an offline AI chatbot powered by **FastAPI**, **Ollama**, and **TinyLlama** — no external APIs, no cloud services, fully private and runs locally on your machine.

---

## 🚀 Features

- 🤖 Conversational chatbot UI  
- 💻 Backend using FastAPI  
- 📡 Talks to a local LLM via Ollama  
- 💾 Stores chat history in localStorage  
- 🗂 New, rename, delete chats  
- 🔒 Fully offline

---

## 🛠 Tech Stack

- **Backend:** FastAPI  
- **Frontend:** HTML, CSS, JavaScript  
- **LLM Engine:** Ollama  
- **Model:** tinyllama  
- **Server:** Uvicorn

---

## 📁 Project Structure
local_mind_ai/
│
├── app/
│ ├── main.py
│ ├── models/
│ │ └── schemas.py
│ └── services/
│ └── service.py
│
├── static/
│ ├── script.js
│ └── style.css
│
├── templates/
│ └── index.html
│
├── requirements.txt
└── README.md

---

## 💡 Requirements

**Backend dependencies** (put in `requirements.txt`)

You do NOT need:
- ollama
- tinyllama
- jinja2 (if not using templates)

---

## 📦 Setup Guide

### 1. Clone the repository

```bash
git clone https://github.com/chaithanya-kumar-natukula-712nck/local_mind_ai.git
cd local_mind_ai

2. Create a Python virtual environment (recommended)

python -m venv venv

Activate it:

Linux / macOS

source venv/bin/activate

Windows

venv\Scripts\activate
3. Install dependencies
pip install -r requirements.txt

