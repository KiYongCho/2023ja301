package state.state;

public class EvenState implements State {
	
	private static EvenState evenState = new EvenState();
	
	private EvenState() {
	}
	
	public static State getInstance() {
		return evenState;
	}

}
