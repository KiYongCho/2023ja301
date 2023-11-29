package edu.java.thread;

public class ThreadExer3 {
	
	public static void main(String[] args) {
		
		// 공유 객체
		SharedObject so = new SharedObject(0, true);
		
		// oddThread에 공유 객체 설정
		OddThread oddThread = new OddThread();
		oddThread.setSharedObject(so);
		
		// evenThread에 공유 객체 설정
		EvenThread evenThread = new EvenThread();
		evenThread.setSharedObject(so);
		
		evenThread.start();
		oddThread.start();
		
		// 실습2) 공유객체를 사용해서 0부터 30까지 순차적으로 출력되도록
		
	}

}












