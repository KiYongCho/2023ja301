package prototype.framework;

public interface Product {
	
	public abstract Object createClone() throws CloneNotSupportedException;
	
	public abstract void use(); 

}
