package board.service;

import java.util.List;

import board.bean.Board;

public abstract class AbstractBoard implements BoardService {
	
	@Override
	public List<Board> getBoardList() {
		return null;
	}
	
	@Override
	public void registBoard(Board board) {
	}
	
	@Override
	public void deleteBoard(int bid) {
	}
	
	@Override
	public void updateBoard(Board board) {
	}

}








