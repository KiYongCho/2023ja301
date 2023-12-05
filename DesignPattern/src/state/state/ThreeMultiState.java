package state.state;

public class ThreeMultiState implements State {
	
	private static ThreeMultiState threeMultiState = new ThreeMultiState();
	
	private ThreeMultiState() {
	}
	
	public static State getInstance() {
		return threeMultiState;
	}

}
