package edu.java;

public class PenMain {
	
	public static void main(String[] args) {
		
		Pen markerPen 
			= new Pen("모XX", "마커", "검정", 2000);
		
		Pen ballPen 
		= new Pen("지XX", "볼펜", "파랑", 3000);
		
		System.out.println(markerPen.getPenData());
		System.out.println(ballPen.getPenData());
		
	}

}
