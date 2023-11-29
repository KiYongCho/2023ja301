package factorymethod.car;

import java.util.ArrayList;
import java.util.List;

import factorymethod.framework.Factory;
import factorymethod.framework.Product;

public class CarFactory extends Factory {
	
	private List<Product> productList;
	
	public List<Product> getProductList() {
		return this.productList;
	}
	
	public CarFactory() {
		this.productList = new ArrayList<Product>();
	}

	@Override
	public Product createProduct(String name) {
		return new Car(name);
	}

	@Override
	public void registerProduct(Product product) {
		productList.add(product);
	}

}
