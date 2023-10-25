class Pet:
    def __init__(self, name, kind, tricks, health=100, energy=100):
        self.name = name
        self.kind = kind
        self.tricks = tricks
        self.health = health
        self.energy = energy

    def sleep(self):
        print(f"{self.name} is sleeping")

    def eat(self):
        print(f"{self.name} is eating")

    def play(self):
        print(f"{self.name} is playing")

    def noise(self):
        print(f"{self.name} is making a noise")


class Cat(Pet):
    def __init__(self, name, tricks):
        super().__init__(name, "cat", tricks)
