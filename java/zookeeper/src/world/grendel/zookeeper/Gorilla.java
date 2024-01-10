package world.grendel.zookeeper;

/**
 * Gorilla
 */
public class Gorilla extends Mammal {
    public Gorilla() {
        super();
    }

    public void throwSomething() {
        if (this.drainEnergy(5)) {
            System.out.println("The gorilla throws something");
        }
        else {
            System.out.println("The gorilla is too tired to throw anything");
        }
    }

    public void eatBananas(int quantity) {
        this.gainEnergy(5 * quantity);
        System.out.println("The gorilla is satisfied with the bananas");
    }

    public void climb() {
        if (this.drainEnergy(10)) {
            System.out.println("The gorilla climbs a tree");
        }
        else {
            System.out.println("The gorilla is too tired to climb anywhere");
        }
    }
}
