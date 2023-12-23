package board;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import jdbctest.OracleConnection;

public class BoardTest5 {
	
	private static Connection conn;
	private static PreparedStatement pstmt;
	private static ResultSet rs;
	private static Properties prop;
	
	BoardTest5() {
		conn = OracleConnection.getConnection();
		prop = new Properties();
		try {
			prop.load(new FileReader(new File(
					"C:/git/2023ja301/JDBCTest/src/prop/sql.properties"
			)));
		} catch (FileNotFoundException fnfe) {
			fnfe.printStackTrace();
		} catch (IOException ioe) {
			ioe.printStackTrace();
		}
	}
	
	public Connection getConnection() {
		return conn;
	}

	public static void main(String[] args) {
		try {
			
			BoardTest5 boardTest5 = new BoardTest5();
			
			List<Board> boardList = boardTest5.listBoard(); // list
			System.out.println(boardList);
			
			Board board = boardTest5.selectBoard(11); // select
			System.out.println(board);
			
			int result1 = boardTest5.insertBoard(
					new Board(0, "작성자ggg", "제목ggg", "내용ggg")
			); // insert
			
			int result2 = boardTest5.updateBoard(
					new Board(16, "gggg", "gggg", "gggg")
			); // update
					
			int result3 = boardTest5.deleteBoard(16); // delete

		} catch (SQLException sqle) {
			sqle.printStackTrace();
		} finally {
			OracleConnection.closeConnection(conn, pstmt, rs);
		}

	} // main

	// 1. list
	List<Board> listBoard() throws SQLException {
		pstmt = conn.prepareStatement(prop.getProperty("LIST_SQL"));
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
	Board selectBoard(int bid) throws SQLException {
		pstmt = conn.prepareStatement(prop.getProperty("SELECT_SQL"));
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
	int insertBoard(Board board) throws SQLException {
		pstmt = conn.prepareStatement(prop.getProperty("INSERT_SQL"));
		pstmt.setString(1, board.getBwriter());
		pstmt.setString(2, board.getBtitle());
		pstmt.setString(3, board.getBcontent());
		return pstmt.executeUpdate();
	}

	// 4. update
	int updateBoard(Board board) throws SQLException {
		pstmt = conn.prepareStatement(prop.getProperty("UPDATE_SQL"));
		pstmt.setString(1, board.getBwriter());
		pstmt.setString(2, board.getBtitle());
		pstmt.setString(3, board.getBcontent());
		pstmt.setInt(4, board.getBid());
		return pstmt.executeUpdate();
	}

	// 5. delete
	int deleteBoard(int bid) throws SQLException {
		pstmt = conn.prepareStatement(prop.getProperty("DELETE_SQL"));
		pstmt.setInt(1, bid);
		return pstmt.executeUpdate();
	}

} // class




