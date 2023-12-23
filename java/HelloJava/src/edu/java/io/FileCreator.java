package edu.java.io;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

public class FileCreator {
	public static void main(String[] args) {
		OutputStream os = null;
		try {
			os = new FileOutputStream("C:/data/bigfile.dat");
			byte[] buffer = new byte[4096];
			for (int i=0; i<buffer.length; i++) {
				buffer[i] = (byte)1;
			}
			for (int i=0; i<1500000; i++) {
				os.write(buffer);
			}
		} catch (FileNotFoundException fnef) {
			fnef.printStackTrace();
		} catch (IOException ioe) {
			ioe.printStackTrace();
		}
		finally {
			try {
				os.close();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}
		
	} // main

} // class
