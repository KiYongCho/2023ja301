package edu.java.exception;

public class ExceptionTest2 {
	
	public static void main(String[] args) {
		// 실습1 OutOfMemory에러를 내보세요.
		/*
		int count = 0;
		while (true) {
			new ExceptionTest2();
			System.out.println(++count + "개 생성됨!");
		}
		*/
		// 실습2 StackOverflow에러를 내보세요.
		// a();
	}
	
	public static void a() {
		b();
	}
	
	public static void b() {
		a();
	}

}




