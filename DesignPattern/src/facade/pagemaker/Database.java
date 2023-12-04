package facade.pagemaker;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Database {
    private Database() {    // new�ŃC���X�^���X���������Ȃ����߂�private�錾
    }
    public static Properties getProperties(String dbname) { // �f�[�^�x�[�X������Properties�𓾂�
        String filename 
        	= "C:/git/2023ja301/DesignPattern/src/facade/maildata.txt";
        Properties prop = new Properties();
        try {
            prop.load(new FileInputStream(filename));
        } catch (IOException e) {
            System.out.println("Warning: " + filename + " is not found.");
        }
        return prop;
    }
}
