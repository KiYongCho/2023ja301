package edu.java.animal;

public class AnimalMain {
	
	public static void main(String[] args) {
		Able lion = new Lion();
		Able eagle = new Eagle();
		printName(lion);
		printName(eagle);
	}
	
	public static void printName(Able able) {
		System.out.println(((Animal)able).name);
	}

}






