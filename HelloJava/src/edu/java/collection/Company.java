package edu.java.collection;

public class Company {

	private String ssn; // 사업자번호
	private String name; // 회사명
	private int income2022; // 2022년도 수익
	private int income2023; // 2023년도 수익

	public Company() {
	}

	public Company(String ssn, String name, int income2022, int income2023) {
		super();
		this.ssn = ssn;
		this.name = name;
		this.income2022 = income2022;
		this.income2023 = income2023;
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

	public int getIncome2022() {
		return income2022;
	}

	public void setIncome2022(int income2022) {
		this.income2022 = income2022;
	}

	public int getIncome2023() {
		return income2023;
	}

	public void setIncome2023(int income2023) {
		this.income2023 = income2023;
	}

	@Override
	public String toString() {
		return "Company [ssn=" + ssn + ", name=" + name + ", income2022=" + income2022 + ", income2023=" + income2023
				+ "]";
	}

}
