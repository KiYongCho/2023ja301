package command;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Iterator;
import java.util.Properties;
import java.util.Scanner;
import java.util.Set;
import java.util.StringTokenizer;


public class CommandMain {
	
	public static void main(String[] args) {
		
		Command command = null;
		
		Scanner scanner = new Scanner(System.in);
		String inputStr = scanner.nextLine();
		
		StringTokenizer st = new StringTokenizer(inputStr);
		String op1="", op2="", opr="";
		if (st.hasMoreElements()) op1 = st.nextToken();
		if (st.hasMoreElements()) op2 = st.nextToken();
		if (st.hasMoreElements()) opr = st.nextToken();
		
		// 키,값이 모두 String인 맵
		Properties prop = new Properties();
		try {
			// .properties파일을 prop객체에 로딩
			prop.load(new FileReader("C:/git/2023ja301/DesignPattern/src/command/command.properties"));
			// (String)prop.getProperty(opr) : 명령에 해당하는 클래스명
			// 클래스 생성 
			Class cl = Class.forName((String)prop.getProperty(opr));
			// 클래스의 객체를 생성 = 명령처리클래스의 객체
			Command obj = (Command)cl.newInstance();
			// 명령처리클래스가 오버라이딩한 calc메소드를 호출해서 연산결과를 저장
			float result 
				= obj.calc(Integer.parseInt(op1), Integer.parseInt(op2));
			System.out.println("결과 : " + result);
			
		} catch (IllegalAccessException iae) {
			iae.printStackTrace();
		} catch (InstantiationException ie) {
			ie.printStackTrace();
		} catch (ClassNotFoundException cnfe) {
			cnfe.printStackTrace();
		} catch (FileNotFoundException fnfe) {
			fnfe.printStackTrace();
		} catch (IOException ioe) {
			ioe.printStackTrace();
		}
		
	}

}









