package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SaleSumDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String sellerName;
	private Double Sum;
	
	public SaleSumDTO( ) {
		
	}

	public SaleSumDTO(Seller seller, Double sum) {
		this.sellerName = seller.getName();
		Sum = sum;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Double getSum() {
		return Sum;
	}

	public void setSum(Double sum) {
		Sum = sum;
	}
	
	
	
	

}
