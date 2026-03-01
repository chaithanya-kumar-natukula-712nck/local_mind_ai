from fastapi import FastAPI
from app.models.schemas import ChatRequest, ChatResponse
from app.services.service import generate_response

app = FastAPI(title="Local LLM Chatbot")

@app.get("/")
def home():
    return {"message": "Local LLM Chatbot is Running 🚀"}

@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    reply = generate_response(request.message)
    return ChatResponse(reply=reply)    