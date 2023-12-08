package board;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import jdbctest.OracleConnection;

public class BoardTest5 {
	
	private static Connection conn;
	private static PreparedStatement pstmt;
	private static ResultSet rs;
	private String sql;
	
	private BoardTest5() {
		conn = OracleConnection.getConnection();
	}

	public static void main(String[] args) {
		try {
			BoardTest5 boardTest5 = new BoardTest5();
			List<Board> boardList = boardTest5.listBoard(); // list
			Board board = boardTest5.selectBoard(11); // select
			int result1 = boardTest5.insertBoard(
					new Board(0, "작성자", "제목", "내용")
			); // insert
			int result2 = boardTest5.updateBoard(
					new Board(11, "수정작성자", "수정제목", "수정내용")
			); // update
			int result3 = boardTest5.deleteBoard(11); // delete
		} catch (SQLException sqle) {
			sqle.printStackTrace();
		} finally {
			OracleConnection.closeConnection(conn, pstmt, rs);
		}

	} // main

	// 1. list
	private List<Board> listBoard() throws SQLException {
		sql = " select bid, bwriter, btitle, bcontent from board ";
		pstmt = conn.prepareStatement(sql);
		rs = pstmt.executeQuery();
		List<Board> boardList = new ArrayList<Board>();
		while (rs.next()) {
			Board board = new Board();
			board.setBid(rs.getInt("bid"));
			board.setBwriter(rs.getString("bwriter"));
			board.setBtitle(rs.getString("btitle"));
			board.setBcontent(rs.getString("bcontent"));
			boardList.add(board);
		}
		return boardList;
	}

	// 2. select
	private Board selectBoard(int bid) throws SQLException {
		sql = " select bid, bwriter, btitle, bcontent from board ";
		sql += " where bid=? ";
		pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, bid);
		rs = pstmt.executeQuery();
		Board board = new Board();
		if (rs.next()) {
			board.setBid(rs.getInt("bid"));
			board.setBwriter(rs.getString("bwriter"));
			board.setBtitle(rs.getString("btitle"));
			board.setBcontent(rs.getString("bcontent"));
		}
		return board;
	}

	// 3. insert
	private int insertBoard(Board board) throws SQLException {
		sql = " insert into board values (seq_board.nextval, ?, ?, ?) ";
		pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, board.getBwriter());
		pstmt.setString(2, board.getBtitle());
		pstmt.setString(3, board.getBcontent());
		return pstmt.executeUpdate();
	}

	// 4. update
	private int updateBoard(Board board) throws SQLException {
		sql = " update board set bwriter=?, btitle=?, bcontent=? ";
		sql += " where bid=? ";
		pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, board.getBwriter());
		pstmt.setString(2, board.getBtitle());
		pstmt.setString(3, board.getBcontent());
		pstmt.setInt(4, board.getBid());
		return pstmt.executeUpdate();
	}

	// 5. delete
	private int deleteBoard(int bid) throws SQLException {
		sql = " delete board where bid=? ";
		pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, bid);
		return pstmt.executeUpdate(sql);
	}

} // class




