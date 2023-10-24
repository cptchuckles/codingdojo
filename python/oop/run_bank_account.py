from bank_account import BankAccount


account1 = BankAccount(0.05, 7000)
account2 = BankAccount(0.01, 300)

print(account1.deposit(629).deposit(629).deposit(629).withdraw(7945).yield_interest())

print(account2.deposit(70).deposit(30).withdraw(79).withdraw(247).withdraw(3).withdraw(9000).yield_interest())

BankAccount.print_all_accounts()
