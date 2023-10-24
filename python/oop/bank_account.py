class BankAccount:
    accounts = []

    @classmethod
    def print_all_accounts(cls):
        for account in cls.accounts:
            print(account)

    def __init__(self, interest_rate, balance=0):
        self.interest_rate = interest_rate
        self.balance = balance
        BankAccount.accounts.append(self)

    def __repr__(self):
        """
        In lieu of display_account_info()
        """
        return f"Balance: {self.balance}\nInterest rate: {self.interest_rate}"

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance < amount:
            print(f"Insufficient funds to withdraw {amount}")
            return self
        self.balance -= amount
        return self

    def yield_interest(self):
        if self.balance < 0:
            return self
        self.balance += self.balance * self.interest_rate
        return self


account1 = BankAccount(0.05, 7000)
account2 = BankAccount(0.01, 300)

print(account1.deposit(629).deposit(629).deposit(629).withdraw(7945).yield_interest())

print(account2.deposit(70).deposit(30).withdraw(79).withdraw(247).withdraw(3).withdraw(9000).yield_interest())

BankAccount.print_all_accounts()
