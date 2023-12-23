import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class FileTest {
	public static void main(String[] args) {
		File f = new File("C:/memopad/test.txt");
		if (!f.exists()) {
			try {
				f.createNewFile();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}
		FileWriter fw = null;
		try {
			fw = new FileWriter(f);
			fw.write("안녕하세요!");
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} finally {
			try {
				fw.close();
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}
		
	}
}
