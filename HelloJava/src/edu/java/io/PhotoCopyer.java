package edu.java.io;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public class PhotoCopyer {
	
	public static void main(String[] args) {
		
		InputStream is = null;
		OutputStream os = null;
		
		try {
			 is = new FileInputStream("C:/data/bigfile.jpg");
			 os = new FileOutputStream("C:/data/bigfile_copy.jpg");
			 
			 byte[] buffer = new byte[1024];
			 
			 long startTime = System.currentTimeMillis(); 
			 while (true) {
				 int readByteNum = is.read(buffer);
				 if (readByteNum==-1) break;
				 os.write(buffer);
			 }
			 long endTime = System.currentTimeMillis();
			 
			 System.out.println(endTime - startTime);
			 
			 
		} catch (FileNotFoundException fnfe) {
			fnfe.printStackTrace();
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





