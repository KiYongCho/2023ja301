package edu.java.thread;

// 1~30의 정수 중 홀수만 출력하는 쓰레드
public class OddThread extends Thread {

	// 공유객체를 쓰레드가 가지도록 (has a)
	private SharedObject sharedObject;

	public SharedObject getSharedObject() {
		return sharedObject;
	}

	public void setSharedObject(SharedObject sharedObject) {
		this.sharedObject = sharedObject;
	}

	@Override
	public void run() {
		while (true) {
			// 홀수일때만 작업
			if (!sharedObject.isEvened()) {
				try {
					synchronized (sharedObject) {
						System.out.println("OddThread : " 
								+ sharedObject.getSharedNum());
						sharedObject.setSharedNum
							(sharedObject.getSharedNum()+1);
						sharedObject.setEvened(true);
						if (sharedObject.getSharedNum()==30) break;						
					}
					Thread.sleep(500);
				} catch (InterruptedException ie) {
					ie.printStackTrace();
				}
			}
		}
	}

}
