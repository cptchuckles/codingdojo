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

    def display_info(self):
        print("first_name:", self.first_name)
        print("last_name:", self.last_name)
        print("email:", self.email)
        print("age:", self.age)
        print("is_rewards_member:", self.is_rewards_member)
        print("gold_card_points:", self.gold_card_points)

    def enroll(self):
        self.is_rewards_member = True
        self.gold_card_points = 200

    def spend_points(self, amount):
        self.gold_card_points -= amount
