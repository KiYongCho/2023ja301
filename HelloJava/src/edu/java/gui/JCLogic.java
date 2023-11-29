package edu.java.gui;

public class JCLogic {
	
	static String content = "";
	static String operator = "";
	
	float calc(String content) {
		String prev = content.substring(0, content.indexOf(operator));
		String next = content.substring(content.indexOf(operator)+1);
		if ("+".equals(operator)) {
			return Float.parseFloat(prev) + Float.parseFloat(next);
		} else if ("-".equals(operator)) {
			return Float.parseFloat(prev) - Float.parseFloat(next);
		} else if ("*".equals(operator)) {
			return Float.parseFloat(prev) * Float.parseFloat(next);
		} else if ("/".equals(operator)) {
			return Float.parseFloat(prev) / Float.parseFloat(next);
		} else {
			return 0;
		}
	}

}
