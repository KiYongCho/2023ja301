package board;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import jdbctest.OracleConnection;

public class BoardTest2 {
	
	public static void main(String[] args) {
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		
		try {
		
			conn = OracleConnection.getConnection();
			int result = 0;
			
			// 1. insert
			Board board = new Board(0, "강감찬", "제목100", "내용100");
			String sql = " insert into board values (seq_board.nextval, ";
			sql += "'" + board.getBwriter() + "', ";
			sql += "'" + board.getBtitle() + "', ";
			sql += "'" + board.getBcontent() + "') ";
			stmt = conn.createStatement();
			result = stmt.executeUpdate(sql);
			if (result>0) System.out.println("입력 성공!");
			
			// 2. select
			List<Board> boardList = new ArrayList<Board>();
			sql = " select bid,bwriter,btitle,bcontent from board ";
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
			while (rs.next()) {
				Board bd = new Board();
				bd.setBid(rs.getInt("bid"));
				bd.setBwriter(rs.getString("bwriter"));
				bd.setBtitle(rs.getString("btitle"));
				bd.setBcontent(rs.getString("bcontent"));
				boardList.add(bd);
			}
			
			if (boardList!=null) {
				for (Board brd : boardList) {
					System.out.println(
							brd.getBid() + ", " +
							brd.getBwriter() + ", " +
							brd.getBtitle() + ", " +
							brd.getBcontent()
					);
				}
			}
			
			
		} catch (SQLException sqle) {
			sqle.printStackTrace();
		} finally {
			OracleConnection.closeConnection(conn, stmt, rs);
		}
		
		
		
	} // main

} // class













