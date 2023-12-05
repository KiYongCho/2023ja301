package state;

import state.context.Context;
import state.context.NumberPrint;

public class StateMain {
	
	public static void main(String[] args) {
		
		Context context = new NumberPrint(null);
		
		context.setNum();
		
	}

}
