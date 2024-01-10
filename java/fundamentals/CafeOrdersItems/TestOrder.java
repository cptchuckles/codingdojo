public class TestOrder {
    public static void main(String[] args) {
        // Menu Items
        Item item1 = new Item("mocha", 4.00);
        Item item2 = new Item("latte", 3.50);
        Item item3 = new Item("drip coffee", 2.50);
        Item item4 = new Item("cappuccino", 5.25);

        // Order variables - order1, order2, etc
        Order order1 = new Order("Cindhuri");
        Order order2 = new Order("Jimmy");
        Order order3 = new Order("Noah");
        Order order4 = new Order("Sam");

        System.out.println(order1);
        // the below will error: accessing private field
        // System.out.println(order1.total);

        order2.addItem(item2);
        order3.addItem(item4);
        order4.addItem(item2);
        order1.setReady(true);

        order4.addItem(item2);
        order4.addItem(item2);

        order2.setReady(true);

        // Application Simulations
        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order1.getName());
        System.out.printf("Total: $%.2f\n", order1.getTotal());
        System.out.printf("Ready: %s\n", order1.isReady());
    }
}
