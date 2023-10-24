from bank_account import BankAccount


class User:
    def __init__(self,
                 first_name,
                 last_name,
                 email,
                 age,
                 is_rewards_member=False,
                 gold_card_points=0):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = is_rewards_member
        self.gold_card_points = gold_card_points
        self.account = BankAccount(0.02)

    def display_info(self):
        print("first_name:", self.first_name)
        print("last_name:", self.last_name)
        print("email:", self.email)
        print("age:", self.age)
        print("is_rewards_member:", self.is_rewards_member)
        print("gold_card_points:", self.gold_card_points)
        print("bank account:", self.account)

    def enroll(self):
        if self.is_rewards_member:
            print(f"{self.last_name}, {self.first_name} is already a rewards memeber")
            return
        self.is_rewards_member = True
        self.gold_card_points = 200

        return self

    def spend_points(self, amount):
        if self.gold_card_points < amount:
            print(f"{self.last_name}, {self.first_name} does not have enough points to spend {amount}")
            return
        self.gold_card_points -= amount

        return self


johnny5 = User("johnny", "five", "johnny@five.com", 69)
johnny5.enroll().spend_points(50).display_info()

user1 = User("user", "one", "user@one.com", 42)
user1.enroll().spend_points(80).display_info()
user1.enroll()

user2 = User("other", "user", "other@user.com", 1337)
user2.display_info()
user2.spend_points(40)
