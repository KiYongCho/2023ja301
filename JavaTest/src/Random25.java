import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Random25 {
	
	public static void main(String[] args) {
		
		String[] strArray = {
				"박진형", "이현승", "황승현" , "이새잎", "유경미",
				"노민경", "박시아", "이지현" , "정다진", "홍민서",
				"김지훈", "유현석", "이한수" , "김평화", "조민우",
				"이종영", "정경준", "김동욱" , "채승기", "권도엽",
				"안재준", "엄재만", "주태언" , "박종민", "임용상"
		};
		
		List<String> strList = Arrays.asList(strArray);
		
		Collections.shuffle(strList);
		
		for (String str : strList) {
			System.out.println(str);
		}
		
	}
	

} // class
