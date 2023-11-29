package chat;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Timer {
	
	public static void main(String[] args) {
		Runnable r = new Runnable() {
			@Override
			public void run() {
				while (true) {
					SimpleDateFormat sdf 
						= new SimpleDateFormat
							("yyyy/MM/dd h시 mm분 s초");
					System.out.println(sdf.format(new Date()));
					try {
						Thread.sleep(1000);
					} catch (InterruptedException ie) {
						ie.printStackTrace();
					}
				}
			}
		};
		new Thread(r).start();
		
	}

}
