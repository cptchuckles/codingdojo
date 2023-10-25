local_val = "magical unicorns"


def square(x):
    return x * x


class User:
    def __init__(self, name):
        self.name = name

    def say_hello(self):
        return f"Здравствуйте, меня зовут {self.name}"


if __name__ == "__main__":
    print("This file is being executed directly")
    print(square(5))
    user = User("Анна")
    print(user.name)
    print(user.say_hello())
else:
    print("This file is being imported as a module")
