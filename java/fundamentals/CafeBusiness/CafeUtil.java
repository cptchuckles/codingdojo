import java.util.ArrayList;
import java.util.Properties;

public class CafeUtil {
    public CafeUtil() {}

    public int getStreakGoal(int numWeeks) {
        int sum = 0;
        for (int i = 0; i < numWeeks; sum += ++i);
        return sum;
    }

    public double getOrderTotal(double[] prices) {
        double sum = 0;
        for (double price : prices) {
            sum += price;
        }
        return sum;
    }

    public void displayMenu(ArrayList<String> menuItems) {
        for (int i = 0; i < menuItems.size(); i++) {
            System.out.printf("%d %s\n", i, menuItems.get(i));
        }
    }

    public void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name:");
        String username = System.console().readLine();
        System.out.printf("Hello, %s!\n", username);
        System.out.printf("There are %d customers ahead of you\n", customers.size());
        customers.add(username);
        customers.forEach(customer -> System.out.println(customer));
    }

    public void printPriceChart(String product, double price, int maxQuantity) {
        System.out.println(product);
        for (int i = 1; i <= maxQuantity; i++) {
            double runningPrice = price * i;
            runningPrice -= 0.5 * (i-1);
            System.out.printf("%d - $%.2f\n", i, runningPrice);
        }
    }

    public boolean displayMenu(ArrayList<String> menuItems, ArrayList<Double> prices) {
        if (menuItems.size() != prices.size()) {
            return false;
        }

        for (int i = 0; i < menuItems.size(); i++) {
            System.out.printf("%d %s -- $%.2f\n", i, menuItems.get(i), prices.get(i));
        }

        return true;
    }

    public void addCustomers() {
        var customers = new ArrayList<String>();

        while (true) {
            System.out.print("Enter a new customer name ('q' when done): ");
            String input = System.console().readLine();
            if (input.equals("q")) {
                break;
            }

            customers.add(input);
        }

        System.out.println("----- New customers added -----");
        for (String customer : customers) {
            System.out.println(customer);
        }
    }
}
