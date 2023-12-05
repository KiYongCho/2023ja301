package command;

public class SubCommand implements Command {

	@Override
	public float calc(int i, int j) {
		return i - j;
	}

}
