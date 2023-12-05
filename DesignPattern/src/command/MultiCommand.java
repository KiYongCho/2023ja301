package command;

public class MultiCommand implements Command {

	@Override
	public float calc(int i, int j) {
		return i * j;
	}

}
