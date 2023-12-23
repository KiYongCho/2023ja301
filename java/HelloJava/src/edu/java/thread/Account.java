package edu.java.thread;

public class Account {

	private int money;

	public Account() {
	}

	public Account(int money) {
		super();
		this.money = money;
	}

	public synchronized int getMoney() {
		return money;
	}

	public synchronized void setMoney(int money) {
		this.money = money;
	}

}
