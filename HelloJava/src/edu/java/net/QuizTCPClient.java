package edu.java.net;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;

public class QuizTCPClient {

	public static void main(String[] args) {

		Socket cSocket = null;
		BufferedReader cbr = null;
		BufferedWriter cbw = null;

		try {
			cSocket = new Socket("172.30.1.30", 9797);
			cbr = new BufferedReader(
					new InputStreamReader(cSocket.getInputStream())
			);
			cbw = new BufferedWriter(
					new OutputStreamWriter(cSocket.getOutputStream())
			);
			
			while (true) {
				System.out.println(cbr.readLine());
			}

		} catch (IOException ioe) {
			ioe.printStackTrace();
		} finally {
			try {
				cbr.close();
				cbw.close();
				cSocket.close();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}

	}

} // class
