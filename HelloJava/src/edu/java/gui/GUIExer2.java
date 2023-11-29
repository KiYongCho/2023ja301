package edu.java.gui;

import java.awt.GridLayout;
import java.awt.Rectangle;

import javax.swing.JFrame;
import javax.swing.JOptionPane;

public class GUIExer2 extends JFrame {
	
	GUIExer2() {
		init();
	}
	
	private void init() {
		this.setLayout(new GridLayout(3, 2));
		this.setBounds(new Rectangle(400, 400));
		this.setTitle("스윙 JFRAME");
		this.setDefaultCloseOperation(DISPOSE_ON_CLOSE);
		this.setVisible(true);
		
		JOptionPane.showConfirmDialog(this, "확인해 주세요!");
		
	}
	
	public static void main(String[] args) {
		new GUIExer2();
	}

}




