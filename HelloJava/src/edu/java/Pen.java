package edu.java;

public class Pen {
	
	String manufactureCompany;	// 제조사
	String sort; // 종류
	String colorName; //색상
	int price; // 가격
	
	Pen() {
	}
	
	Pen(String manufactureCompany, String sort,
			String colorName, int price) {
		this.manufactureCompany = manufactureCompany;
		this.sort = sort;
		this.colorName = colorName;
		this.price = price;
	}
	
	String getPenData() {
		String resultStr 
			= "이 펜의 제조사는 " + this.manufactureCompany
			 + ", 종류는 " + this.sort
			 + ", 색상은 " + this.colorName
			 + ", 가격은 " + this.price;
		return resultStr;
	}
	
	

}






