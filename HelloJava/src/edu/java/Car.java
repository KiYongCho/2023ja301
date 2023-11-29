package edu.java;

public class Car {
	
	String name;
	int tireCount;
	
	Car() {
	}
	
	Car(String name, int tireCount) {
		this.name = name;
		this.tireCount = tireCount;
	}
	
	@Override
	public String toString() {
		return this.name + " 차량이며 바퀴가 " + 
				this.tireCount + "개 입니다!";
	}

}
