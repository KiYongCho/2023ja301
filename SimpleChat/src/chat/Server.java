package chat;

import java.io.IOException;
import java.net.ServerSocket;

public class Server {

	private ServerSocket serverSocket;

	public Server(ServerSocket serverSocket) {
		this.serverSocket = serverSocket;
	}

	public void serverStart() {

		try {
			while (!serverSocket.isClosed()) {
				new Thread(new ClientHandler(serverSocket.accept())).start();
			}
		} catch (IOException ioe) {
			ioe.printStackTrace();
		}
	}

	public void closerServer() {
		try {
			if (serverSocket != null) {
				serverSocket.close();
			}
		} catch (IOException ioe) {
			ioe.printStackTrace();
		}
	}

	public static void main(String[] args) throws Exception {
		new Server(new ServerSocket(1234)).serverStart();
	}
}
