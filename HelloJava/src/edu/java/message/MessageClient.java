package edu.java.message;

import java.io.IOException;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MessageClient {
	
	public static void main(String[] args) {
		
		Socket socket = null;
		ObjectOutputStream oos = null;
		
		try {
			socket = new Socket("172.30.1.34", 9898);
			oos = new ObjectOutputStream(socket.getOutputStream());
			
			List<Message> messageList = new ArrayList<Message>();
			messageList.add(new Message("제목1", "내용1", new Date()));
			messageList.add(new Message("제목2", "내용2", new Date()));
			messageList.add(new Message("제목3", "내용3", new Date()));
			oos.writeObject(messageList);
			
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} finally {
			try {
				oos.close();
				socket.close();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}
		
	} // main

} // class
