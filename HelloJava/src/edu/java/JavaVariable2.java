package edu.java;

public class JavaVariable2 {
	
	// non-static member variable
	int realnsi = 1;
	
	// static member variable
	static int realsi;
	
	{
		// local variable
		int nsi = 1;
		realnsi = 1;
		realsi = 1;
		A a = new A();
	}
	
	static {
		// local variable
		int si = 2;
		//realnsi = 2;
		realsi = 2;
		A a = new A();
	}
	
	public static void main(String[] args) {
		//System.out.println(nsi);
		//System.out.println(si);
	}

}
