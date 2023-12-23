package edu.java.net;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;

public class QuizThread extends Thread {

	private Socket sSocket = null;

	public QuizThread() {
	}

	public QuizThread(Socket sSocket) {
		this.sSocket = sSocket;
	}

	@Override
	public void run() {
		BufferedReader sbr = null;
		BufferedWriter sbw = null;
		try {
			sbr = new BufferedReader(
					new InputStreamReader(sSocket.getInputStream())
			);
			sbw = new BufferedWriter(
					new OutputStreamWriter(sSocket.getOutputStream())
			);
			for (int i = 1; i < 11; i++) {
				sbw.write(i);
				sbw.flush();
				Thread.sleep(10000);
			}
		} catch (InterruptedException ie) {
			ie.printStackTrace();
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} finally {
			try {
				sbr.close();
				sbw.close();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}
	} // run

} // class
