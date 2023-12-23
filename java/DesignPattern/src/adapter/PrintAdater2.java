package adapter;

public class PrintAdater2 implements Print {

	StringPrinter stringPrinter;
	
	@Override
	public void print() {
		stringPrinter = new StringPrinter();
		stringPrinter.printInfo();
	}

}
