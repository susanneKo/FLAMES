from fastapi import FastAPI
from flames_calculator import compatibility
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:5173",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/flames-game")
def get_compatibility(name_one: str, name_two: str):
    return compatibility(name_one, name_two)
