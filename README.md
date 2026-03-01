# LocalMind AI

LocalMind AI is a privacy-focused local chatbot built using FastAPI and Ollama (TinyLlama).

## Features
- Runs completely offline
- No external API calls
- Lightweight LLM (TinyLlama)
- Built with FastAPI

## Tech Stack
- Python
- FastAPI
- Ollama
- TinyLlama

## Run Instructions

1. Install dependencies:
   pip install -r requirements.txt

2. Start Ollama:
   ollama serve

3. Pull model:
   ollama pull tinyllama

4. Run FastAPI:
   uvicorn main:app --reload