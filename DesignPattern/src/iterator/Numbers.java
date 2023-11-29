package iterator;

public class Numbers implements Aggregate {
	
	int[] numbers = new int[] {1,2,3,4,5};
	
	@Override
	public Object iterator() {
		return new NumbersIterator(numbers);
	}

}
