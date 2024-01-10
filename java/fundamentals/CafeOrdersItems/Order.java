import java.util.ArrayList;

public class Order {
    private String name = "Anonymous";
    private double total = 0.0;
    private boolean ready = false;
    private ArrayList<Item> items = new ArrayList<>();

	public Order() {}

    public Order(String name) {
        this.name = name;
    }

    public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
        // Cannot set the order total, it is calculated from the items
		return;
	}

	public boolean isReady() {
		return ready;
	}

	public void setReady(boolean ready) {
		this.ready = ready;
	}

	public ArrayList<Item> getItems() {
		return items;
	}

	public void setItems(ArrayList<Item> items) {
		this.items = items;
        this.updateTotal();
    }

    public void addItem(Item item) {
        this.items.add(item);
        this.updateTotal();
    }

    private void updateTotal() {
        double total = 0;
        for (Item item : items) {
            total += item.getPrice();
        }
        this.total = total;
	}
}
