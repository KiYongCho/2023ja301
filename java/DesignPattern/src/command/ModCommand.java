package command;

public class ModCommand implements Command {

	@Override
	public float calc(int i, int j) {
		return i % j;
	}

}
