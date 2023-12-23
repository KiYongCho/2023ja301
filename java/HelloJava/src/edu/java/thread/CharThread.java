package edu.java.thread;

// A~Z까지 출력하는 쓰레드
public class CharThread extends Thread {
	
	@Override
	public void run() {
		
		for (int i=65; i<91; i++) {
			System.out.println("CharThread : " + (char)i);

			try {
				Thread.sleep(500);
			} catch (InterruptedException ie) {
				ie.printStackTrace();
			}
		}
		
	}

}
