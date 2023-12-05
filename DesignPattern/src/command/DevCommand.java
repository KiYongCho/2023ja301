package command;

public class DevCommand implements Command {

	@Override
	public float calc(int i, int j) {
		return (float)i / (float)j;
	}

}
