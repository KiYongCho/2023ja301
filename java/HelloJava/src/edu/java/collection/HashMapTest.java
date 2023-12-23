package edu.java.collection;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Set;

public class HashMapTest {
	
	public static void main(String[] args) {
		
		Map<String, Integer> map =
				new HashMap<String, Integer>();
		
		map.put("사과", 100);
		map.put("딸기", 50);
		map.put("복숭아", 30);
		
		Set keySet = map.keySet();
		Iterator it = keySet.iterator();
		
		try {
			while(it.hasNext()) {
				String nextItem =(String)it.next();
				System.out.println(nextItem);
			}
		} catch (NoSuchElementException nsee) {
			System.out.println("엘리먼트 없음!!!");
		}
		
	}

}







