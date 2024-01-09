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
}
