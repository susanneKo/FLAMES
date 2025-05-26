from fastapi import FastAPI
from flames_calculator import compatibility

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/flames-game")
def get_compatibility(name_one: str, name_two: str):
    return compatibility(name_one, name_two)
