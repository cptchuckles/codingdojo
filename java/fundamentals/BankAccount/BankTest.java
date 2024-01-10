public class BankTest {
    public static void main(String[] args) {
        // Create 3 bank accounts
        BankAccount bank1 = new BankAccount();
        BankAccount bank2 = new BankAccount();
        BankAccount bank3 = new BankAccount();

        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and
        // display the balance each time
        // - each deposit should increase the amount of totalMoney
        bank1.deposit(37.25);
        System.out.printf("Bank1 balance: $%.2f\n", bank1.getBalance());
        System.out.printf("Total money: $%.2f\n", BankAccount.getTotalMoney());
        bank2.deposit(250.73, true);
        System.out.printf("Bank2 balance: $%.2f\n", bank2.getBalance());
        System.out.printf("Total money: $%.2f\n", BankAccount.getTotalMoney());
        bank3.deposit(3785.37, true);
        System.out.printf("Bank3 balance: $%.2f\n", bank3.getBalance());
        System.out.printf("Total money: $%.2f\n", BankAccount.getTotalMoney());

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account
        // and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        if (bank1.withdraw(25.00, true)) {
            System.out.printf("Withdrew 25.00 from bank1 savings, leaving $%.2f\n", bank1.getSavingsBalance());
        }
        if (bank1.withdraw(25.00, false)) {
            System.out.printf("Withdrew 25.00 from bank1 checking, leaving $%.2f\n", bank1.getCheckingBalance());
        }
        System.out.printf("Total money: $%.2f\n", BankAccount.getTotalMoney());

        bank2.withdraw(100.25, true);
        System.out.printf("Total money: $%.2f\n", BankAccount.getTotalMoney());
        bank3.withdraw(3500.31, true);
        System.out.printf("Total money: $%.2f\n", BankAccount.getTotalMoney());

        // Static Test (print the number of bank accounts and the totalMoney)
        System.out.printf("Total bank accounts: %d\n", BankAccount.getAccounts());
    }
}
