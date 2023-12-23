package state.state;

// 홀수 상태 (Singleton)
public class OddState implements State {
	
	private static OddState oddState = new OddState();
	
	private OddState() {
	}
	
	public static State getInstance() {
		return oddState;
	}

}
