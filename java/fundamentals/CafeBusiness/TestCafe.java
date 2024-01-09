import java.util.ArrayList;

public class TestCafe {
    public static void main(String[] args) {
        CafeUtil cafe = new CafeUtil();
        System.out.println(cafe);
        System.out.println(cafe.getStreakGoal(10));

        var menuItems = new ArrayList<String>();
        menuItems.add("drip coffee");
        menuItems.add("latte");
        menuItems.add("cappuccino");
        menuItems.add("mocha");
        cafe.displayMenu(menuItems);

        var customers = new ArrayList<String>();
        customers.add("jimbo");
        customers.add("fred");
        cafe.addCustomer(customers);
    }
}
