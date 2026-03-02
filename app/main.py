from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from app.models.schemas import ChatRequest, ChatResponse
from app.services.service import generate_response

app = FastAPI(title="Local Mind")

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def home():
    return FileResponse("templates/index.html")

@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    reply = generate_response([msg.dict() for msg in request.messages])
    return ChatResponse(reply=reply)