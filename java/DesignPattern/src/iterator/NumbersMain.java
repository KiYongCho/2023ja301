package iterator;

public class NumbersMain {
	
	public static void main(String[] args) {
		
		Aggregate aggregate = new Numbers();
		Iterator iterator = (Iterator)aggregate.iterator();
		
		while (iterator.hasNext()) {
			System.out.println(iterator.next());
		}
		
	}

}
