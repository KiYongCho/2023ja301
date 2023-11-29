package edu.java.io;

import java.io.Serializable;

public class Person implements Serializable {

	public static final long serialVersionUID = 32947392047903247L;

	private String ssn; // 주민등록번호
	private String name; // 성명
	private int age; // 나이

	public Person() {
	}

	public Person(String ssn, String name, int age) {
		super();
		this.ssn = ssn;
		this.name = name;
		this.age = age;
	}

	public String getSsn() {
		return ssn;
	}

	public void setSsn(String ssn) {
		this.ssn = ssn;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	@Override
	public String toString() {
		return "Person [ssn=" + ssn + ", name=" + name + ", age=" + age + "]";
	}

}
