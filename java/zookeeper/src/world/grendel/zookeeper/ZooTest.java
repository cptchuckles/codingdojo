package world.grendel.zookeeper;

/**
 * ZooTest
 */
public class ZooTest {
    public static void main(String[] args) {
        Gorilla gorilla = new Gorilla();
        gorilla.throwSomething();
        gorilla.throwSomething();
        gorilla.throwSomething();
        gorilla.eatBananas(2);
        gorilla.climb();
        gorilla.displayEnergy();

        Bat bat = new Bat();
        bat.attackTown();
        bat.attackTown();
        bat.attackTown();
        bat.eatHumans(2);
        bat.fly();
        bat.fly();
        bat.displayEnergy();
    }
}
