package edu.java.io;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class IOExer2 {
	
	public static void main(String[] args) {
		
		BufferedWriter bw = null;
		BufferedReader br = null;
		
		try {
			String filePath = "C:/data/poem.txt";
			bw = new BufferedWriter(
						new FileWriter(filePath)
					 );
			bw.write("죽는 날까지 하늘을 우러러");
			bw.newLine();
			bw.write("한 점 부끄럼이 없기를");
			bw.newLine();
			bw.write("그 다음 몰라...");
			bw.flush();
			
			br = new BufferedReader(
						new FileReader(filePath)
					);
			String lineData = null;
			while ((lineData=br.readLine())!=null) {
				System.out.println(lineData);
			}
			
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} finally {
			try {
				br.close();
				bw.close();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}
		
	} // main
	
} // class
