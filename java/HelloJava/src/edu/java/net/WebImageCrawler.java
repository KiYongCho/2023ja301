package edu.java.net;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

public class WebImageCrawler {
	
	public static void main(String[] args) {
		
		URL url = null;
		URLConnection urlConn = null;
		
		BufferedInputStream bis = null;
		BufferedOutputStream bos = null;
		
		try {
			url = new URL("http://res.heraldm.com/content/image/2023/11/13/20231113000713_0.jpg");
			urlConn = url.openConnection();
			
			bis = new BufferedInputStream(urlConn.getInputStream());
			
			bos = new BufferedOutputStream(
					new FileOutputStream("C:/data/lg_back.jpg")
			);
			
			byte[] buffer = new byte[1024];
			int readedBytes = 0;
						
			while((readedBytes = bis.read(buffer))!=-1) {
				bos.write(buffer, 0, readedBytes);
			}
			
		} catch (MalformedURLException mue) {
			mue.printStackTrace();
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} finally {
			try {
				bis.close();
				bos.close();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}
	} // main
} // class
	
	
	
	
	
	
	
	
	
	
	
	
	
	
