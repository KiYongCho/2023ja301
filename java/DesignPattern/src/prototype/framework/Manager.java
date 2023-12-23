package prototype.framework;

import java.util.HashMap;
import java.util.Map;

public class Manager {
	
	Product product;
	
	Map<String, Object> showcase
		= new HashMap<String, Object>();
	
	public Manager(Product product) {
		this.product = product;
	}
	
	public Object create() throws CloneNotSupportedException {
		return product.createClone();
	}
	
	public void register(String name, Product product) {
		showcase.put(name, product);
	}

} // class






