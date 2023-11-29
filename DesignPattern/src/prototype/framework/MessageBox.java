package prototype.framework;

public class MessageBox implements Product, Cloneable {
	
	private String str;
	
	public MessageBox(String str) {
		this.str = str;
	}
	
	@Override
	public Object createClone() throws CloneNotSupportedException {
		return this.clone();
	}
	
	@Override
	public void use() {
		System.out.println(str);
	}

}
