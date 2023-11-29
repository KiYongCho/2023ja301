package edu.java.io;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;

public class BufferedTest {
	
	public static void main(String[] args) {
		
		BufferedReader br = null;
		BufferedWriter bw = null;
		
		try {
			
			br = new BufferedReader(
						new InputStreamReader(
								new FileInputStream("C:/data/lg.jpg")
						)
					);
			
			bw = new BufferedWriter(
						new OutputStreamWriter(
								new FileOutputStream("C:/data/lg.jpg")
						)
					 );
			
			
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		
		
	} // main

} // class



