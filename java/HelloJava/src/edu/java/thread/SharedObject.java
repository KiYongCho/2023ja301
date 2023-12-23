package edu.java.thread;

// 쓰레드들이 공유하는 공유 객체
public class SharedObject {

	// 1~30까지의 수
	private int sharedNum;
	// 짝수가 출력되었는지 여부
	private boolean isEvened;

	public SharedObject() {
	}

	public SharedObject(int sharedNum, boolean isEvened) {
		super();
		this.sharedNum = sharedNum;
		this.isEvened = isEvened;
	}

	public int getSharedNum() {
		return sharedNum;
	}

	public void setSharedNum(int sharedNum) {
		this.sharedNum = sharedNum;
	}

	public boolean isEvened() {
		return isEvened;
	}

	public void setEvened(boolean isEvened) {
		this.isEvened = isEvened;
	}

}
