package edu.java.message;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class AdderServer {
	public static void main(String[] args) {
		ServerSocket ss = null;
		Socket socket = null;
		try {
			ss = new ServerSocket(5678);
			if (ss != null)
				System.out.println("AdderServer 준비 완료 !!!");
			
			while (true) {
				socket = ss.accept();
				System.out.println(socket.getInetAddress() + "님 접속 !!!");
				new AdderThread(socket).start();				
			}
			
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} finally {
			try {
				socket.close();
				ss.close();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}
	} // main
} // class
