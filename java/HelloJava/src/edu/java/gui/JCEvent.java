package edu.java.gui;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JTextField;

public class JCEvent implements ActionListener {
	
	JTextField textField;
	JCLogic jclogic;
	
	String operator;	
	
	public JCEvent() {
	}
	
	public JCEvent(JTextField textField, JCLogic jclogic) {
		this.textField = textField;
		this.jclogic = jclogic;
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		String sc = e.getActionCommand();
		if ("+".equals(sc)) JCLogic.operator = "+";
		if ("-".equals(sc)) JCLogic.operator = "-";
		if ("*".equals(sc)) JCLogic.operator = "*";
		if ("/".equals(sc)) JCLogic.operator = "/";
		if ("ENTER".equals(sc)) {
			textField.setText(
					String.valueOf(jclogic.calc(JCLogic.content))
			);
		} else {
			JCLogic.content += sc;
			textField.setText(JCLogic.content);
		}
	}

}























