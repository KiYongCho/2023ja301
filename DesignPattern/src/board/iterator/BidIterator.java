package board.iterator;

import board.aggregate.Aggregate;
import board.aggregate.BidAggregate;

public class BidIterator implements Iterator {
	
	Aggregate bidAggregate;
	int currBid;
	
	public BidIterator() {
		bidAggregate = new BidAggregate();
	}

	@Override
	public boolean hasNext() {
		if (currBid==10000) {
			return false;
		} else {
			return true;
		}
	}

	@Override
	public Object next() {
		int[] bidArray = ((BidAggregate)bidAggregate).getBidArray();
		return bidArray[currBid++];
	}

}





