def calculate_letter(name_one: str, name_two: str):
    flames = ["S", "F", "L", "A", "M", "E"]
    letters_left = len(set(name_one + name_two))
    count = 0

    for i in range(len(flames) - 1):
        count = (count + letters_left) % len(flames)
        del flames[count]
        count = count - 1

    return flames[0]


def convert_result(letter: str):
    flames_dict = {
        "F": "Friendship",
        "L": "Love",
        "A": "Affection",
        "M": "Marriage",
        "E": "Enemy",
        "S": "Sibling",
    }
    return flames_dict[letter]
