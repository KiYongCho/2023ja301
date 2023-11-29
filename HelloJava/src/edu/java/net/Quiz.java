package edu.java.net;

public class Quiz {

	private int seq;
	private String content;

	public Quiz() {
	}

	public int getSeq() {
		return seq;
	}

	public void setSeq(int seq) {
		this.seq = seq;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "Quiz [seq=" + seq + ", content=" + content + "]";
	}

}
