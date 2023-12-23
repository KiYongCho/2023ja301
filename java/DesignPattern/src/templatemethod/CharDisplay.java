package templatemethod;

public class CharDisplay extends AbstractDisplay {
	
	char ch;
	
	CharDisplay(char ch) { 
		this.ch = ch;
	}

	public void open() {
		System.out.println("<<");
	}
	
	public void print() {
		System.out.println(ch);
	}
	
	public void close() {
		System.out.println(">>");
	}
	
}
