package state.state;

//짝수 상태 (Singleton)
public class EvenState implements State {
	
	private static EvenState evenState = new EvenState();
	
	private EvenState() {
	}
	
	public static State getInstance() {
		return evenState;
	}

}
