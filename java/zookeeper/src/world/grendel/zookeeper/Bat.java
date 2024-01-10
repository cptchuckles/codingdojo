package world.grendel.zookeeper;

/**
 * Bat
 */
public class Bat extends Mammal {
    public Bat() {
        super(300);
    }

    public void fly() {
        if (this.drainEnergy(50)) {
            System.out.println("The bat is airborne");
        }
        else {
            System.out.println("The bat is too tired to fly");
        }
    }

    public void eatHumans(int quantity) {
        this.gainEnergy(25 * quantity);
        System.out.println("The bat eats some humans");
    }

    public void attackTown() {
        if (this.drainEnergy(100)) {
            System.out.println("The bat attacks a town by transfigurating into an A-10C Warthog for a couple of minutes");
        }
        else {
            System.out.println("The bat is too tired to attack any towns");
        }
    }
}
