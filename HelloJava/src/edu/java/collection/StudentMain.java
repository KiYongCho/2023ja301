package edu.java.collection;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class StudentMain {
	public static void main(String[] args) {
		Student hong 
			= new Student("std001", "홍길동", 100, 90, 80);
		Student kang 
		= new Student("std002", "강감찬", 50, 30, 20);
		
		// 1. 두 학생의 데이터를 Collection으로 만들어서
		//     국어점수평균, 영어점수평균, 수학점수평균을 출력
		Map<String, Student> map
			= new HashMap<String, Student>();
		map.put(hong.getSno(), hong);
		map.put(kang.getSno(), kang);
		
		// 과목별 총점을 담을 리스트
		List<Integer> al = new ArrayList<Integer>();
		al.add(0);	al.add(0);	al.add(0);
		
		Iterator it = map.entrySet().iterator();
		while (it.hasNext()) {
			Map.Entry<String, Student> entry 
				= (Map.Entry<String, Student>)it.next();
			Student student = (Student)entry.getValue();
			al.set(0, al.get(0)+student.getKor()); 
			al.set(1, al.get(1)+student.getEng()); 
			al.set(2, al.get(2)+student.getMath()); 
		}
		for (Integer in : al) {
			System.out.println(in/map.size());	
		}
		
	} // main
} // class




