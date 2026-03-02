from fastapi import FastAPI
from app.models.schemas import ChatRequest, ChatResponse
from app.services.service import generate_response
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi import Request

app = FastAPI(title="Local Mind")

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get("/")
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})



@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    reply = generate_response([msg.dict() for msg in request.messages])
    return ChatResponse(reply=reply)