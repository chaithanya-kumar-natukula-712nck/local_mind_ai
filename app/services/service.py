import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "tinyllama"

def generate_response(messages: list) -> str:
    formatted_prompt = ""

    # Only include user messages
    for msg in messages:
        if msg["role"] == "user":
            formatted_prompt += msg["content"] + "\n"

    response = requests.post(
        OLLAMA_URL,
        json={
            "model": MODEL_NAME,
            "prompt": formatted_prompt,
            "stream": False
        },
        timeout=120
    )

    reply = response.json()["response"]

    return reply.strip()