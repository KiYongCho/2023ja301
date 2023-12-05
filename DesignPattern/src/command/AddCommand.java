package command;

public class AddCommand implements Command {

	@Override
	public float calc(int i, int j) {
		return i + j;
	}

}
