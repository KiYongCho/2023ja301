package edu.java.io;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class ObjectStreamTest {
	
	public static void main(String[] args) {
		
		Person person1
			= new Person("111111-11111111", "홍길동", 30);
		
		ObjectOutputStream oos = null;
		ObjectInputStream ois = null;
		try {
			oos = new ObjectOutputStream(
						new FileOutputStream("C:/data/person1.obj")
					  );
			oos.writeObject(person1);
			oos.flush();			
			
			// IO실습3) 
			// person1.obj파일을 읽어서 Person객체로 만든 후 person1_copy.obj로
			// 직렬화 하세요~
			
			ois = new ObjectInputStream(
						new FileInputStream("C:/data/person1.obj")
					 );
			Person person2 = (Person)ois.readObject();
			System.out.println(person2);
			
		} catch (FileNotFoundException fnfe) {
			fnfe.printStackTrace();
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} catch (ClassNotFoundException cnfe) {
			cnfe.printStackTrace();
		} finally {		
			try {
				ois.close();
				oos.close();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}
		
	} // main

} // class




