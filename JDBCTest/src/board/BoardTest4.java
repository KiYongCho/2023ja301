package board;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import jdbctest.OracleConnection;

public class BoardTest4 {

	public static void main(String[] args) {
		
		Connection conn = OracleConnection.getConnection();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = null;
		int result = 0;		

		// 1. insert
		try {
			Board board = new Board(0, "이순신", "제목이순신", "내용이순신");
			sql = " insert into board values (seq_board.nextval, ?, ?, ?) ";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, board.getBwriter());
			pstmt.setString(2, board.getBtitle());
			pstmt.setString(3, board.getBcontent());
			result = pstmt.executeUpdate();
			if (result > 0)
				System.out.println("입력 성공");

			// 2. update
			Board board2 = new Board(11, "업유관순", "업제목", "업내용");
			sql = " update board set bwriter=?, btitle=?, bcontent=? ";
			sql += " where bid=? ";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, board2.getBwriter());
			pstmt.setString(2, board2.getBtitle());
			pstmt.setString(3, board2.getBcontent());
			pstmt.setInt(4, board2.getBid());
			result = pstmt.executeUpdate();
			if (result > 0)
				System.out.println("수정 성공");
			
			// 3. list
			sql = " select bid, bwriter, btitle, bcontent from board ";
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				System.out.println(
						rs.getInt("bid") + ", " +
						rs.getString("bwriter") + ", " +
						rs.getString("btitle") + ", " +
						rs.getString("bcontent")
				);
			}
			
			// 4. select (한건만 조회)
			sql = " select bid, bwriter, btitle, bcontent from board ";
			sql += " where bid=? ";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, 11);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				System.out.println(
						rs.getInt("bid") + ", " +
						rs.getString("bwriter") + ", " +
						rs.getString("btitle") + ", " +
						rs.getString("bcontent")
				);
			}
			
			
		} catch (SQLException sqle) {
			sqle.printStackTrace();
		} finally {
			OracleConnection.closeConnection(conn, pstmt, rs);
		}

	} // main

} // class















