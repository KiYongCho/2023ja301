package edu.java.net;

import java.util.List;

public class QuizList {

	private List<Quiz> quizList;

	public QuizList() {
	}

	public List<Quiz> getQuizList() {
		return quizList;
	}

	public void setQuizList(List<Quiz> quizList) {
		this.quizList = quizList;
	}

	@Override
	public String toString() {
		return "QuizList [quizList=" + quizList + "]";
	}

}
