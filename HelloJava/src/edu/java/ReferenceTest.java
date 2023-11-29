package edu.java;

public class ReferenceTest {
	
	static Person person1;
	static Person person2;
	
	public static void main(String[] args) {
		
		person1 = new Person();
		person2 = new Person();
		
		System.out.println(person1);
		System.out.println(person2);
		
		person1.si = 2;
		System.out.println(person2.si);
		
		person1.setName("홍길동");
		person2.setName("홍길동");
		
		System.out.println(person1.getName());
		System.out.println(person2.getName());
		
		System.out.println(person1.name.hashCode());
		System.out.println(person2.name.hashCode());
		System.out.println("홍길동".hashCode());
		System.out.println(new String("홍길동").hashCode());
		
		System.out.println(
			person1.name==person2.name	
		);
		
		System.out.println(
				person1.name.equals(person2.name)	
		);
		
		
	} // main
	

} // class




