package edu.java.message;

import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;

public class AdderThread extends Thread {
	Socket socket;
	DataOutputStream dos = null;
	AdderThread() {}
	AdderThread(Socket socket) {	this.socket = socket;	}
	@Override
	public void run() {
		try {
			dos = new DataOutputStream(socket.getOutputStream());
			while (true) {
				int writeNum = (int) (Math.random() * 9) + 1;
				System.out.println("서버에서 보낸 수 : " + writeNum);
				dos.write(writeNum);
				dos.flush();
				Thread.sleep(5000);
			}
		} catch (InterruptedException ie) {
			ie.printStackTrace();
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} finally {
			try {
				dos.close();
				socket.close();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}
	}

}
