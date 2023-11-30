import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.function.Consumer;


public class JavaLambda {

	public static void main(String[] args) {
		
		List<Integer> numbers = new ArrayList<Integer>();
		numbers.add(1);
		numbers.add(2);
		numbers.add(3);
		numbers.forEach(n -> {
			System.out.println(n);
		});
		
		Consumer<Integer> method = n -> {
			System.out.println(n);
		};
		numbers.forEach(method);
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("a", 1);
		map.put("b", 2);
		map.put("c", 3);
		map.forEach((key, value) -> System.out.println(key + ":" + value));

		BiConsumer<String, Object> method2 = (key, value) -> {
			System.out.println(key + ":" + value);
		};
		map.forEach(method2);

	}

}
