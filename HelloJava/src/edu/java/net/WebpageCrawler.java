package edu.java.net;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

public class WebpageCrawler {
	
	public static void main(String[] args) {
		
		URL url = null;
		URLConnection urlConn = null;
		BufferedReader br = null;
		
		try {
			url = new URL("http://www.google.com");
			urlConn = url.openConnection();
			br = new BufferedReader(
					new InputStreamReader(
							urlConn.getInputStream()
					)
			);
			
			String readedLine = null;
			while((readedLine = br.readLine())!=null) {
				System.out.println(readedLine);
			}
		} catch (MalformedURLException mue) {
			mue.printStackTrace();
		} catch (IOException ioe) {
			ioe.printStackTrace();
		}
		
	} // main

} // class











