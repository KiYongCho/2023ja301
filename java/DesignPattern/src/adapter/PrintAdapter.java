package adapter;

public class PrintAdapter extends StringPrinter implements Print {
	
	@Override
	public void print() {
		System.out.println("[홍길동의 정보]");
		printInfo();
	}

}
