package edu.java;

public class TypeCastingMain {
	
	public static void main(String[] args) {
		
		// Parent타입의 parent1, 가지고 있는 참조는 Parent참조
		Parent parent1 = new Parent();
		// Child타입의 child1, 가지고 있는 참조는 Child참조
		Child child1 = new Child();
		
		System.out.println(parent1.getName());
		System.out.println(child1.getName());
		
		// upcasting(상위형변환, 묵시적형변환, 하위타입>상위타입)
		// parent2는 Parent타입, 가지고 있는 참조는 Child참조
		Parent parent2 = new Child();
		System.out.println(parent2.getName());		
		
		// downcasting(하위형변환, 명시적형변환, 상위타입>하위타입)
		// child2는 Child타입, 가지고 있는 참조는 Child참조
		// 하위형변환을 위해서는 하위타입참조값을 가지고 있어야 한다.
		// Child child2 = (Child)new Parent(); // TypeCastingException
		Child child2 = (Child)parent2;
		System.out.println(child2.getName());
		
		Parent parent3 = child2;
		
	}

}







