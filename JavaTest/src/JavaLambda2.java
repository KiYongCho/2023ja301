import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class JavaLambda2 {
	
	public static void main(String[] args) {
		
		Consumer<Person> personConsumer
			= pc -> {
				System.out.println("이름:"+pc.getName());
				System.out.println("나이:"+pc.getAge());
			};
		
		List<Person> personList = new ArrayList<Person>();
		personList.add(new Person("홍길동", 20));
		personList.add(new Person("강감찬", 30));
		
		personList.forEach(personConsumer);
		
	}

}
