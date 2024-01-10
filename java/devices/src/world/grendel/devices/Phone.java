package world.grendel.devices;

/**
 * Phone
 */
public class Phone extends Device {
    private int criticalCharge = 10;

    public Phone() {
        super();
    }

    public Phone(int criticalCharge) {
        super();
        this.criticalCharge = criticalCharge;
    }

    public void makeCall() {
        if (this.drainBattery(5)) {
            System.out.println("You make a call");
            this.displayBattery();
        }
        else {
            System.out.println("Not enough battery to make a call");
        }
    }

    @Override
    protected boolean drainBattery(int amount) {
        boolean result = super.drainBattery(amount);

        if (this.getBattery() < this.criticalCharge) {
            System.out.printf("Battery life is critical: %d%%\n", this.getBattery());
        }

        return result;
    }

    public void playGame() {
        if (this.getBattery() >= 25 && this.drainBattery(20)) {
            System.out.println("You play a game");
            this.displayBattery();
        }
        else {
            System.out.println("Not enough charge to play a game");
        }
    }

    public void charge() {
        System.out.println("Charging the battery");
        if (this.chargeBattery(50)) {
            System.out.println("Battery is now full");
        }
        this.displayBattery();
    }
}
