package world.grendel.zookeeper;

/**
 * Mammal
 */
public class Mammal {
    private int energy = 100;

    public Mammal() {}

    public Mammal(int energy) {
        this.energy = energy;
    }
    
    public int displayEnergy() {
        System.out.printf("Energy level: %d%%\n", this.energy);
        return this.energy;
    }

    protected boolean drainEnergy(int amount) {
        if (this.energy < amount) {
            return false;
        }

        this.energy -= amount;

        return true;
    }

    protected void gainEnergy(int amount) {
        this.energy += amount;
    }
}
