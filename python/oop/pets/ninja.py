from pet import Pet


class Ninja:
    def __init__(self, first_name, last_name, pet: Pet, treats, pet_food):
        self.first_name = first_name
        self.last_name = last_name
        self.pet = pet
        self.treats = treats
        self.pet_food = pet_food

    def walk(self):
        print(f"Walking {self.first_name}'s {self.pet.kind} {self.pet.name}")
        self.pet.play()

    def feed(self):
        print(f"Feeding {self.first_name}'s {self.pet.kind} {self.pet.name}")
        self.pet.eat()

    def bathe(self):
        print(f"Bathing {self.first_name}'s {self.pet.kind} {self.pet.name}")
        self.pet.noise()
