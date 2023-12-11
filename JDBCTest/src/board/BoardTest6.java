package board;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;

import jdbctest.OracleConnection;

public class BoardTest6 {
	
	private Connection conn;
	private Statement stmt;
	private ResultSet rs;
	private ResultSetMetaData rsmd;
	
	BoardTest6() {
		try {
			
			conn = OracleConnection.getConnection();
			String sql = " select * from board ";
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
			rsmd = rs.getMetaData();
			
			System.out.println(rsmd.getColumnCount());
			System.out.println(rsmd.getColumnLabel(2));
			System.out.println(rsmd.getColumnType(2));
			System.out.println(rsmd.getColumnTypeName(2));
			System.out.println(rsmd.getPrecision(2));
			System.out.println(rsmd.getSchemaName(2));
			System.out.println(rsmd.getTableName(1));
			System.out.println(rsmd.isNullable(2));
			
		} catch (SQLException sqle) {
			sqle.printStackTrace();
		}	finally {
			OracleConnection.closeConnection(conn, stmt, rs);
		}
	}
	
	public static void main(String[] args) {
		new BoardTest6();
	} // main

} // class




















