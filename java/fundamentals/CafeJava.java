public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app.
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";

        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffeePrice = 90.55;
        double lattePrice = 137.49;
        double cappuccinoPrice = 57.62;

        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";

        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = false;

        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
        // ** Your customer interaction print statements will go here ** //
        System.out.println(generalGreeting + customer2); // Displays "Welcome to Cafe Java, Cindhuri"
        System.out.println(generalGreeting + customer3); // Displays "Welcome to Cafe Java, Cindhuri"
        System.out.println(generalGreeting + customer4); // Displays "Welcome to Cafe Java, Cindhuri"

        System.out.println(customer1 + (isReadyOrder1 ? readyMessage : pendingMessage));

        System.out.println(customer4 + (isReadyOrder4 ? readyMessage : pendingMessage));
        if (isReadyOrder4) {
            System.out.printf("%s%.2f\n", displayTotalMessage, cappuccinoPrice);
        }

        System.out.printf("%s, %s%.2f\n", customer2, displayTotalMessage, lattePrice * 2);
        if (isReadyOrder2) {
            System.out.println(customer2 + readyMessage);
        }
        isReadyOrder2 = !isReadyOrder2;
        if (isReadyOrder2) {
            System.out.println(customer2 + readyMessage);
        }

        System.out.printf("%s, %s%.2f", customer3, displayTotalMessage, lattePrice - dripCoffeePrice);
    }
}
