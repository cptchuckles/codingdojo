package world.grendel.devices;

/**
 * DeviceTest
 */
public class DeviceTest {
    public static void main(String[] args) {
        Phone phone = new Phone();
        phone.displayBattery();

        // Make three phone calls
        phone.makeCall();
        phone.makeCall();
        phone.makeCall();
        // Play a game twice
        phone.playGame();
        phone.playGame();
        // Charge the phone
        phone.charge();
    }
}
