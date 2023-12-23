package edu.java.thread;

public class ThreadExer1 {
	
	public static void main(String[] args) {
		
		/* Runnable 구현했을 경우 Thread객체를 생성해서 start()
		Thread oddPrinter1 = new Thread(new OddPrinter1());
		oddPrinter1.start();
		*/
		
		/* Thread를 상속받았을 경우 */
		// new OddPrinter2().start();
		
		/* Thread를 구현한 클래스의 익명객체 */
		Thread thread = new Thread() {
			@Override
			public void run() {
				for (int i=1; i<100; i=i+2) {
					System.out.println("Runnable 구현체 thread : " + i);
					try {
						Thread.sleep(500);
					} catch (InterruptedException ie) {
						ie.printStackTrace();
					}
				}	
			}
		};
		thread.start();
		
		thread.setName("홀수출력쓰레드");
		System.out.println(thread.getName());
		
		for (int i=2; i<102; i=i+2) {
			System.out.println("main thread : " + i);
			try {
				Thread.sleep(500);
			} catch (InterruptedException ie) {
				ie.printStackTrace();
			}
		}
	
	} // main

} // class








