package iterator;

public class NumbersIterator implements Iterator {
	
	int[] numbers;
	int currIndex;
	
	NumbersIterator(int[] numbers) {
		this.numbers = numbers;
	}
	
	@Override
	public boolean hasNext() {
		if (currIndex>4) {
			return false;
		} else {
			return true;
		}
	}
	
	@Override
	public Object next() {
		return numbers[currIndex++];
	}

}




