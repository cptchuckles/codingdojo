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
        return "{Balance:%d, Interest:%.3f}" % (self.balance, self.interest_rate)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance < amount:
            # TODO: raise exception
            print(f"Insufficient funds to withdraw {amount}")
            return self
        self.balance -= amount
        return self

    def yield_interest(self):
        if self.balance < 0:
            return self
        self.balance += self.balance * self.interest_rate
        return self
