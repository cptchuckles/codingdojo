from user import User


johnny5 = User("johnny", "five", "johnny@five.com", 69)
johnny5.enroll().spend_points(50).display_info()

user1 = User("user", "one", "user@one.com", 42)
user1.enroll().spend_points(80).display_info()
user1.enroll()

user2 = User("other", "user", "other@user.com", 1337)
user2.display_info()
user2.spend_points(40)

johnny5.display_balance(0)
johnny5.add_account(5000000, 0.5).transfer_funds(5000, user2, from_account=1)

user2.display_balance(0)
