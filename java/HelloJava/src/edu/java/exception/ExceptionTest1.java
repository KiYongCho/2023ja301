package edu.java.exception;

public class ExceptionTest1 {
	
	public static void main(String[] args) {
		
		String str1 = "천";
		int i1 = 0;
		
		Object obj = null;
		
		try {
			System.out.println(obj.hashCode());
			i1 = Integer.parseInt(str1);
		} catch (NumberFormatException nfe) {
			System.out.println(nfe);
		} catch (NullPointerException npe) {
		} catch (Exception ex) {
			System.out.println(ex);
		}
		
		System.out.println(i1*2);
		
	} // main

} // class




