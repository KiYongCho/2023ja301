package edu.java.thread;

public class Person {
	
	private String name;
	private Account account;
	
	public Person() {
	}

	public Person(String name, Account account) {
		super();
		this.name = name;
		this.account = account;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}
	
} // class
