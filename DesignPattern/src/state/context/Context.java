package state.context;

import java.util.List;

import state.state.State;

// 컨텍스트 인터페이스
public interface Context {
	
	// 번호 발생시키는 메소드
	public abstract void setNum();
	
	// 발생된 번호에 따라서 상태를 변경시키는 메소드
	// 3의 경우 홀수이면서 3의 배수 이므로 중복상태를 처리하기 위해 List를 사용
	public abstract List<State> changeState(int num);
	
	// 상태에 따른 메세지를 출력
	public abstract void print(State state);

}
