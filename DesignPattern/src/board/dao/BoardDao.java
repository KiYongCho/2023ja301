package board.dao;

import java.util.ArrayList;
import java.util.List;

import board.aggregate.BidAggregate;
import board.bean.Board;
import board.iterator.Iterator;
import board.service.AbstractBoard;

public class BoardDao extends AbstractBoard {
	
	private List<Board> boardList;
	
	// singleton
	
	private static BoardDao boardDao = new BoardDao();
	
	private BoardDao() {
		boardList = new ArrayList<Board>();
		
		/*
		registBoard(new Board(1, "제목1", "내용1"));
		registBoard(new Board(2, "제목2", "내용2"));
		registBoard(new Board(3, "제목3", "내용3"));
		*/
		
		Iterator it = (Iterator)new BidAggregate().iterator();
		
		while (it.hasNext()) {
			int itNext = (Integer)it.next();
			registBoard(new Board(itNext, "제목"+itNext, "내용"+itNext));
		}

	}
	
	public static BoardDao getInstance() {
		return boardDao;
	}
	
	@Override
	public List<Board> getBoardList() {
		return boardList;
	}
	
	@Override
	public void registBoard(Board board) {
		boardList.add(board);
	}
	
	@Override
	public void deleteBoard(int bid) {
		for (Board board : boardList) {
			if (board.getBid()==bid) {
				boardList.remove(board);
			}
		}
	}
	
	@Override
	public void updateBoard(Board board) {
		for (Board brd : boardList) {
			if (brd.getBid()==board.getBid()) {
				brd.setTitle(board.getTitle());
				brd.setContent(board.getContent());
			}
		}
	}

}





