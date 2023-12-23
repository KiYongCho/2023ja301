package edu.java.exception;

public class AgeUnder19Main {
	
	public static void main(String[] args) {
		
		int age = 51;
		if (age<19) {
			try {
				throw new AgeUnder19Exception();
			} catch(AgeUnder19Exception ae) {
				System.out.println(ae.toString());
			}
		} else if (age>50) {
			try {
				throw new AgeOver50Exception();
			} catch (AgeOver50Exception ae) {
				System.out.println(ae.toString());
			}
		}
		
		
	}

}
