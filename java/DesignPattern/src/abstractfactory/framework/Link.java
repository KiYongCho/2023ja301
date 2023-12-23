package abstractfactory.framework;

public abstract class Link extends Item {
	
	private String url;
	
	public String getUrl() {
		return url;
	}

	@Override
	public abstract String makeHTML();
}
