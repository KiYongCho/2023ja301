package edu.java;

public class JavaVariable {
	
	// static member variable
	static int si = 1;
	
	// non-static member variable
	// auto initialization
	int nsi = 2;
	
	// static member method
	static int add(int i, int j) {
		// int i, int j : add메소드의 local variable
		return i + j;
	}
	
	// non-static member method
	int mul(int i, int j) {
		return i * j;
	}

}





