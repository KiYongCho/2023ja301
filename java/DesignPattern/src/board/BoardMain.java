package board;

import board.dao.BoardDao;
import board.service.BoardService;

public class BoardMain extends BoardTemplate {
	
	static BoardService boardService 
		= BoardDao.getInstance();
	
	public static void main(String[] args) {
		
		BoardTemplate bt = new BoardMain();
		bt.printList();
		
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
	
	@Override
	public void printTop() {
		System.out.println("### 리스트 출력 시작");
	}
	
	@Override
	public void printMiddle() {
		boardService.getBoardList().forEach(bl -> {
			System.out.println("제목 : " + bl.getTitle());
			System.out.println("내용 : " + bl.getContent());
		});
	}
	
	@Override
	public void printBottom() {
		System.out.println("### 리스트 출력 끝");
	}

}






