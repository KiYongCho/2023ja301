package edu.java.net;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

// TCP 서버
public class TCPServer {
	
	// 서버의 포트번호 (0~1023 제외, ~65534까지 중에서 하나)
	final static int SERVER_PORT = 8888;
	// 서버에서 클라이언트에게 보낼 메세지
	final static String MESSAGE_FROM_SERVER = "Hello Client!";
	
	public static void main(String[] args) {
		
		// 서버는 ServerSocket이 필요함
		// ServerSocket은 클라이언트에게 할당할 Socket을 관리하는 역할
		ServerSocket serverSocket = null;
		
		try {
			// 설정한 포트를 사용하는 서버소켓 생성
			serverSocket = new ServerSocket(SERVER_PORT);
		} catch (IOException ioe) {
			ioe.printStackTrace();
		}
		
		// 클라이언트 > 서버 바이트스트림
		InputStream is = null;
		// 서버 > 클라이언트 바이트스트림
		OutputStream os = null;
		
		try {
			// 무한반복
			while (true) {
				
				// 서버소켓의 accept메소드는 Blocking메소드라 부르며
				// accept메소드가 호출되면 클라이언트의 연결을 대기
				
				// 클라이언트 통신할 서버 소켓
				Socket socket = serverSocket.accept();
				
				// 클라이언트와 연결되면 클라이언트에 할당한 소켓의 입출력스트림을 얻을 수 있다.
				is = socket.getInputStream();		// 클라이언트 > 서버 바이트스트림
				os = socket.getOutputStream();	// 서버 > 클라이언트 바이트스트림
				
				// 16바이트 버퍼
				byte[] data = new byte[16];
				// 읽어들인 바이트 수 반환
				int n = is.read(data);
				// 클라이언트에게 받은 바이트스트림을 문자열로 변환
				final String messageFromClient = new String(data, 0, n);
				
				// 서버에서 클라이언트에게 바이트배열을 보냄
				os.write(MESSAGE_FROM_SERVER.getBytes());
				// OutputStream은 flush를 해 주어야 클라이언트에게 전송됨
				os.flush();
			}
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} finally {
			try {
				is.close();
				os.close();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}
		
	} // main

} // class









