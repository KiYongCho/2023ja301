package adapter;

public class PrintMain {
	
	public static void main(String[] args) {
		
		Print print = new PrintAdapter();
		print.print();
		
	}

}
