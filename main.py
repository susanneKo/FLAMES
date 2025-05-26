from fastapi import FastAPI
from flames_calculator import *

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/flames-game")
def get_compatibility(name_one: str, name_two: str):
    return convert_result(calculate_letter(name_one, name_two))
