package templatemethod;

public class DisplayMain {
	
	public static void main(String[] args) {
		
		Display charDisplay = new CharDisplay('A');
		Display stringDisplay = new StringDisplay("Hello");
		
		charDisplay.display();
		stringDisplay.display();
		
	}

}
