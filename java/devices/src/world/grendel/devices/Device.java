package world.grendel.devices;

/**
 * Device
 */
public class Device {
    private int battery = 100;

	public Device() {}

    public int getBattery() {
		return battery;
	}

    protected boolean drainBattery(int amount) {
        if (this.battery < amount) {
            return false;
        }

        this.battery -= amount;

        return true;
    }

    protected boolean chargeBattery(int amount) {
        this.battery += amount;

        if (this.battery > 100) {
            this.battery = 100;
        }

        return this.battery == 100;
    }

    public void displayBattery() {
        System.out.printf("Battery remaining: %d\n", this.battery);
    }
}
