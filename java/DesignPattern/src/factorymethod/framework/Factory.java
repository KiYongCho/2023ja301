package factorymethod.framework;

public abstract class Factory {
	
	public Product create(String name) {
		Product product = createProduct(name);
		registerProduct(product);
		return product;
	}
	
	public abstract Product createProduct(String name);
	
	public abstract void registerProduct(Product product);

}
