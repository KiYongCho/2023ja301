package edu.java.message;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

public class AddClient {
	
	public static void main(String[] args) {
		
		Socket socket = null;
		BufferedReader br = null;
		
		try {
			socket = new Socket("172.30.1.34", 5678);
			br = new BufferedReader(
					new InputStreamReader(socket.getInputStream())
			);
			int sum = 0;
			while (true) {
				int readData = br.read();
				sum += readData;
				System.out.println(readData + ":" + sum);
			}
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} finally {
			try {
				br.close();
				socket.close();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}
		
	} // main

} // class
