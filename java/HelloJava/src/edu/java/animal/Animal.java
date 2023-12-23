package edu.java.animal;

public abstract class Animal 
	implements Walkable, Runnable,
		Flyable, Soundable {
	
	String sort;
	String name;
	
	@Override
	public void walk() {
		System.out.println("걷다");
	}	
	
	@Override
	public void run() {
		System.out.println("뛰다");
	}	
	
	@Override
	public void fly() {
		System.out.println("난다");
	}
	
	@Override
	public void sound() {
		System.out.println("소리낸다");
	}
	
	
}
