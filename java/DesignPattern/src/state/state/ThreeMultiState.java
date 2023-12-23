package state.state;

// 3의 배수 상태
public class ThreeMultiState implements State {
	
	private static ThreeMultiState threeMultiState = new ThreeMultiState();
	
	private ThreeMultiState() {
	}
	
	public static State getInstance() {
		return threeMultiState;
	}

}
