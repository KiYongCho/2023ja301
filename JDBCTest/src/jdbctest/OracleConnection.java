package jdbctest;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class OracleConnection {
	
	// 데이터베이스 연결 인터페이스
	private static Connection conn;
	
	// Oracle JDBC URL : 연결할 오라클데이터베이스의 경로
	
	// 형식 > jdbc:oracle:thin:@오라클서버아이피:오라클포트번호:SID
	private static final String JDBC_URL
		= "jdbc:oracle:thin:@localhost:1521:xe";
	
	// 오라클 데이터베이스 드라이버 클래스명
	private static final String JDBC_DRIVER
		= "oracle.jdbc.driver.OracleDriver";
	
	// 계정명
	private static final String JDBC_USER
		= "realchoky";
	
	// 계정 비밀번호
	private static final String JDBC_PWD
	= "1234";
	
	public static Connection getConnection() {
		try {
			// 데이터베이스 드라이버클래스를 메모리에 로딩
			Class.forName(JDBC_DRIVER);
			// 데이터베이스 커넥션 획득 (conn이 null이 아니면 접속된 것!)
			conn = DriverManager.getConnection
					(JDBC_URL, JDBC_USER, JDBC_PWD);
			return conn;
		} catch (ClassNotFoundException cnfe) {
			cnfe.printStackTrace();
			return null;
		} catch (SQLException sqle) {
			sqle.printStackTrace();
			return null;
		} 
	} // getConnection
	
	public static void closeConnection(
			Connection conn, Statement stmt, ResultSet rs) {
		if (rs!=null) {
			try {
				rs.close();
			} catch (SQLException sqle) {
				sqle.printStackTrace();
			}
		}
		if (stmt!=null) {
			try {
				stmt.close();
			} catch (SQLException sqle) {
				sqle.printStackTrace();
			}
		}
		if (conn!=null) {
			try {
				conn.close();
			} catch (SQLException sqle) {
				sqle.printStackTrace();
			}
		}
	}

} // class





















