package edu.java.exception;

public class AgeUnder19Exception extends Exception {
	
	@Override
	public String toString() {
		return "19세 미만 관람불가!!!";
	}

}
