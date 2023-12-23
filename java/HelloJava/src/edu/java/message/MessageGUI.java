package edu.java.message;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.ScrollPaneConstants;

public class MessageGUI extends JFrame {

	MessageGUI() {
		init();
	}
	
	void init() {
		this.setTitle("MessageGUI");
		this.setLayout(new BorderLayout());
		this.setBounds(0, 0, 400, 400);
		
		JScrollPane jsp = new JScrollPane();
		jsp.setHorizontalScrollBarPolicy
			(ScrollPaneConstants.HORIZONTAL_SCROLLBAR_NEVER);
		jsp.setVerticalScrollBarPolicy
			(ScrollPaneConstants.VERTICAL_SCROLLBAR_ALWAYS);
		JTextArea jta = new JTextArea(20, 30);
		// jta.setBorder(new LineBorder(Color.BLUE, 1));
		jsp.setViewportView(jta);
		
		JButton jbtn = new JButton("데이터가져오기");
		
		jbtn.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				BufferedReader br = null;
				try {
					br = new BufferedReader(
							new FileReader("C:/java_logs/log_20231121.txt")
					);
					String printStr = "";
					String readedLine = "";
					while ((readedLine=br.readLine()) != null) {
						printStr += readedLine + "\n";
					}
					jta.setText(printStr);
					
				} catch (FileNotFoundException fnfe) {
					fnfe.printStackTrace();
				} catch (IOException ioe) {
					ioe.printStackTrace();
				}
			}
		});
		
		this.add(jsp, BorderLayout.CENTER);
		this.add(jbtn, BorderLayout.SOUTH);
		
		this.setDefaultCloseOperation(DISPOSE_ON_CLOSE);
		this.setVisible(true);
	}
	
	public static void main(String[] args) {
		new MessageGUI();
	}
	
}
