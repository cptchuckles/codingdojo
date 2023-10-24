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
        self.accounts = [BankAccount(0.02)]

    def add_account(self, starting_balance=0, interest_rate=0.02):
        self.accounts.append(BankAccount(interest_rate, starting_balance))
        return self

    def deposit(self, account, amount):
        self.accounts[account].deposit(amount)
        return self

    def withdraw(self, account, amount):
        self.accounts[account].withdraw(amount)
        return self

    def display_balance(self, account):
        print(f"{self.last_name}, {self.first_name}'s account balance #{account}: {self.accounts[account].balance}")

    def display_info(self):
        print("first_name:", self.first_name)
        print("last_name:", self.last_name)
        print("email:", self.email)
        print("age:", self.age)
        print("is_rewards_member:", self.is_rewards_member)
        print("gold_card_points:", self.gold_card_points)
        print("bank accounts:", self.accounts)

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

    def transfer_funds(self, amount, other_user, from_account=0, other_account=0):
        self.accounts[from_account].withdraw(amount)
        other_user.accounts[other_account].deposit(amount)
