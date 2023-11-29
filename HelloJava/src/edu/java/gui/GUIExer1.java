package edu.java.gui;

import java.awt.BorderLayout;
import java.awt.Button;
import java.awt.Color;
import java.awt.Frame;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.Panel;
import java.awt.TextField;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

public class GUIExer1 extends Frame {
	
	Image image;
	
	GUIExer1() {
		this.setTitle("처음 만들어 보는 프레임");
		this.setBackground(Color.ORANGE);
		this.setSize(400, 400);
		this.setLayout(new BorderLayout());

		
		this.addWindowListener(new WindowAdapter() {    
            public void windowClosing (WindowEvent e) {
            	System.out.println(e.getClass().getName());
                dispose();    
            }    
        });
		
		// 한글깨짐 해결 : Run > Run Configration > Arguments
		//                   > VM arguments > -Dfile.encoding=MS949 추가
		Button button = new Button("버튼");
		button.setBackground(Color.BLUE);
		button.setSize(200, 200);
		
		button.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent e){
					System.out.println("버튼이 눌렸어요!");
				}
		});
		
		this.add(button, BorderLayout.NORTH);
		
		TextField tf = new TextField("여기에입력", 10);
		Button button2 = new Button("확인");
		
		Panel panel = new Panel(new BorderLayout());
		panel.add(tf, BorderLayout.WEST);
		panel.add(button2, BorderLayout.EAST);
		
		this.add(panel, BorderLayout.SOUTH);
		
		button2.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e){
				System.out.println(tf.getText() + "가 입력되었어요!");
			}
		});		
		
		String imgPath = "C:/data/lg.jpg";
		image = Toolkit.getDefaultToolkit().getImage(imgPath);

		//this.pack();
		this.setVisible(true);		
		
	}
	
	public static void main(String[] args) {
		new GUIExer1();
	}
	
	@Override
	public void paint(Graphics g) {
		g.drawImage(image, 0, 0, this);
	}
	
}




