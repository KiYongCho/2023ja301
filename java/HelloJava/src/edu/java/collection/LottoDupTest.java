package edu.java.collection;

import java.util.HashSet;
import java.util.Set;

public class LottoDupTest {
	
	public static void main(String[] args) {
		System.out.println(noDup());
	}
	
	// 1~45 중에서 중복되지 않는 7개의 숫자를 리턴
	static Object noDup() {
		Set<Integer> set = new HashSet<Integer>();
		while (true) {
			set.add((int)(Math.random()*45) + 1);
			if (set.size()==7) break;
		}
		return set;
	}
	
}
