package edu.java.net;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class QuizTCPServer {

	public static void main(String[] args) {

		ServerSocket serverSocket = null;
		Socket sSocket = null;

		try {
			serverSocket = new ServerSocket(9797);
			sSocket = serverSocket.accept();
			new QuizThread(sSocket).start();
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} finally {
			/*
			try {
				sSocket.close();
				serverSocket.close();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
			*/
		}

	} // main

} // class
