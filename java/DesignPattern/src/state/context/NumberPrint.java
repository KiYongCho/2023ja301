package state.context;

import java.util.ArrayList;
import java.util.List;

import state.state.EvenState;
import state.state.OddState;
import state.state.State;
import state.state.ThreeMultiState;

// 구체적인 Context
public class NumberPrint implements Context {
	
	// 상태
	private State state;
	// 발생한 숫자
	private int num;
	
	// Context가 생성될때 State가 있다.
	public NumberPrint(State state) {
		this.state = state;
	}

	// 숫자를 발생시키는 메소드
	@Override
	public void setNum() {
		while (true) {
			num = (int)(Math.random()*10) + 1;
			System.out.println(num);
			
			List<State> stateList = changeState(num);
			for (State state : stateList) {
				print(state);
			}
			try {
				Thread.sleep(2000);
			} catch (InterruptedException ie) {
				ie.printStackTrace();
			}
		}
	}

	// 숫자에 따라 상태객체를 리스트에 저장
	@Override
	public List<State> changeState(int num) {
		List<State> stateList = new ArrayList<State>();
		if (num%2==1) stateList.add(OddState.getInstance());
		if (num%2==0) stateList.add(EvenState.getInstance());
		if (num%3==0) stateList.add(ThreeMultiState.getInstance());
		return stateList;
	}

	@Override
	public void print(State state) {
		if (state instanceof OddState) print("홀수");
		if (state instanceof EvenState) print("짝수");
		if (state instanceof ThreeMultiState) print("3의 배수");
	}
	
	private void print(String str) {
		System.out.println(str + " 입니다!");		
	}

}
