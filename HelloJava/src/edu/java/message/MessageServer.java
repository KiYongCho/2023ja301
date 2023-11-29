package edu.java.message;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.text.SimpleDateFormat;
import java.util.List;

public class MessageServer {
	
	public static void main(String[] args) {
		
		ObjectInputStream ois = null;
		ServerSocket ss = null;
		Socket socket = null;
		FileWriter fw = null;
		try {
			ss = new ServerSocket(9898);
			socket = ss.accept();
			ois = new ObjectInputStream(socket.getInputStream());
			
			List<Message> messageList 
				= (List<Message>)ois.readObject();
			
			File dir = new File("C:/java_logs");
			if (!dir.exists()) dir.mkdir();
			
			File file = new File("C:/java_logs/log_20231121.txt");
			if (!file.exists()) file.createNewFile();
			
			fw = new FileWriter(file);
			
			for (Message message : messageList) {
				System.out.println("제목 : " + message.getSubject());
				System.out.println("내용 : " + message.getContent());
				SimpleDateFormat sdf 
					= new SimpleDateFormat("yyyy년 MM월 dd일 hh:mm");
				String writeDate = sdf.format(message.getWriteDate());
				System.out.println("작성일시 : " + writeDate);
				
				fw.write(writeDate + ":" + message.getSubject()
					+ ":" + message.getContent() + "\n");
				fw.flush();
			}
			
		} catch (ClassNotFoundException cnfe) {
			cnfe.printStackTrace();
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} finally {
			try {
				fw.close();
				ois.close();
				socket.close();
				ss.close();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}
		
		
	} // main

} // class








