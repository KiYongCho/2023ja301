package board;

import board.dao.BoardDao;
import board.service.BoardService;

public class BoardMain {
	
	static BoardService boardService 
		= BoardDao.getInstance();
	
	public static void main(String[] args) {
		
		printList();
		
		/*
		boardService.deleteBoard(2);
		
		printList();
		
		Board board4 = new Board(4, "제목4", "내용4");
		boardService.registBoard(board4);
		
		printList();
		
		board4.setTitle("새제목4");
		board4.setContent("새내용4");
		boardService.updateBoard(board4);
		
		printList();
		*/
		
	}
	
	public static void printList() {
		boardService.getBoardList().forEach(bl -> {
			System.out.println("제목 : " + bl.getTitle());
			System.out.println("내용 : " + bl.getContent());
		});
		System.out.println("-----------------------------------");
	}

}






