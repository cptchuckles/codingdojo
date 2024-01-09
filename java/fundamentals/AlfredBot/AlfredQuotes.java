import java.util.Date;

public class AlfredQuotes {

    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }

    public String guestGreeting(String name) {
        return String.format("Hello %s", name);
    }

    public String dateAnnouncement() {
        return String.format("It is %s", new Date());
    }

    public String respondBeforeAlexis(String conversation) {
        if (conversation.indexOf("Alfred") > -1) {
            return "At your service";
        }
        else if (conversation.indexOf("Alexis") > -1) {
            return "Literally who";
        }
        else {
            return "Sure glad that's not my problem";
        }
    }

    // NINJA BONUS
    // See the specs to overload the guestGreeting method
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have
    // learned!
}
