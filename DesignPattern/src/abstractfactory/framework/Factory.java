package abstractfactory.framework;

public abstract class Factory {
	
	private static Factory factory;
	
	private Factory() {
	}
	
	public static Factory getFactory() {
		return factory;
	}
	
	public abstract Link createLink();
	
	public abstract Tray createTray();
	
	public abstract Page createPage();

}








