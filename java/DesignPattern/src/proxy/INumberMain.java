package proxy;

import java.util.Scanner;

public class INumberMain {
	
	public static void main(String[] args) {
		
		INum inum = new INumberProxy();
		
		Scanner scanner = new Scanner(System.in);
		int i = scanner.nextInt();
		
		inum.print(i);
		
	}

}
