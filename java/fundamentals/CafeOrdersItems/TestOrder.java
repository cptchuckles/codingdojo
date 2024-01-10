public class TestOrder {
    public static void main(String[] args) {
        // Menu Items

        // Order variables - order1, order2, etc
        Order order1 = new Order();

        // Application Simulations
        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order1.getName());
        System.out.printf("Total: $%.2f\n", order1.getTotal());
        System.out.printf("Ready: %s\n", order1.isReady());
    }
}
