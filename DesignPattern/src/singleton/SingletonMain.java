package singleton;

public class SingletonMain {
	
	public static void main(String[] args) {
		
		Singleton singleton1 =  Singleton.getInstance();
		Singleton singleton2 =  Singleton.getInstance();
		
		System.out.println(singleton1);
		System.out.println(singleton2);
		System.out.println
			(singleton1==singleton2 ? "같은 객체" : "다른 객체");
		
	}

}
