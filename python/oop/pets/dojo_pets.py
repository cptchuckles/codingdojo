from ninja import Ninja
from pet import Cat


if __name__ == "__main__":
    bruno = Cat("Giordano", ["backflip", "flight"])
    bruce = Ninja("Bruce", "Lee", bruno, 50, "salmon")

    bruce.feed()
    bruce.walk()
    bruce.bathe()
