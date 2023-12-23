package board;

public class Board {

	private int bid;
	private String bwriter;
	private String btitle;
	private String bcontent;

	public Board() {
	}

	public Board(int bid, String bwriter, String btitle, String bcontent) {
		super();
		this.bid = bid;
		this.bwriter = bwriter;
		this.btitle = btitle;
		this.bcontent = bcontent;
	}

	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
	}

	public String getBwriter() {
		return bwriter;
	}

	public void setBwriter(String bwriter) {
		this.bwriter = bwriter;
	}

	public String getBtitle() {
		return btitle;
	}

	public void setBtitle(String btitle) {
		this.btitle = btitle;
	}

	public String getBcontent() {
		return bcontent;
	}

	public void setBcontent(String bcontent) {
		this.bcontent = bcontent;
	}

	@Override
	public String toString() {
		return "Board [bid=" + bid + ", bwriter=" + bwriter + ", btitle=" + btitle + ", bcontent=" + bcontent + "]";
	}

}
