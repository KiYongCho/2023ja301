package edu.java.anonymous;

public class SoundableMain {

	public static void main(String[] args) {
		printSound(new Dog("강아지", "멍멍"));
		printSound(new Cat("고양이", "야옹"));
	} // main
	
	public static void printSound(Soundable soundable) {
		System.out.println(
				soundable.name() + "는 " 
						+ soundable.sound() + " 소리를 냅니다!"
		);
	} // printSound

}
