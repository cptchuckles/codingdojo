public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
	private double savingsBalance;

	private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    // Be sure to increment the number of accounts
    public BankAccount() {
        accounts++;
    }

    // GETTERS
    // for checking, savings, accounts, and totalMoney
	public double getCheckingBalance() {
		return checkingBalance;
	}

	public double getSavingsBalance() {
		return savingsBalance;
	}

	public static int getAccounts() {
		return accounts;
	}

	public static double getTotalMoney() {
		return totalMoney;
	}

    private void setCheckingBalance(double checkingBalance) {
        totalMoney -= this.checkingBalance;
        this.checkingBalance = checkingBalance;
        totalMoney += this.checkingBalance;
	}

    private void setSavingsBalance(double savingsBalance) {
        totalMoney -= this.savingsBalance;
		this.savingsBalance = savingsBalance;
        totalMoney += this.savingsBalance;
	}

    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings
    // account
    public void deposit(double amount) {
        this.deposit(amount, false);
    }
    public void deposit(double amount, boolean intoSavings) {
        if (intoSavings) {
            this.setSavingsBalance(this.savingsBalance + amount);
        }
        else {
            this.setCheckingBalance(this.checkingBalance + amount);
        }
    }
    // withdraw
    // - users should be able to withdraw money from their checking or savings
    // account
    // - do not allow them to withdraw money if there are insufficient funds
    public boolean withdraw(double amount) {
        return this.withdraw(amount, false);
    }
    public boolean withdraw(double amount, boolean fromSavings) {
        if (fromSavings) {
            if (this.savingsBalance < amount) {
                System.out.printf("Insufficient savings to withdraw $%.2f\n", amount);
                return false;
            }

            this.setSavingsBalance(this.savingsBalance - amount);
        }
        else {
            if (this.checkingBalance < amount) {
                System.out.printf("Insufficient checking to withdraw $%.2f\n", amount);
                return false;
            }

            this.setCheckingBalance(this.checkingBalance - amount);
        }

        return true;
    }
    // - all deposits and withdrawals should affect totalMoney
    // getBalance
    // - display total balance for checking and savings of a particular bank account
    public double getBalance() {
        return this.savingsBalance + this.checkingBalance;
    }
}
