import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class JavaReflection {
	
	public static void main(String[] args) {
		
		try {
			
			Class JR = Class.forName("JavaReflection");
			Class JR2 = JavaReflection.class;
			System.out.println(JR.getName());
			System.out.println(JR2.getName());
			
			JavaReflection jr = new JavaReflection();
			Class JR3 = jr.getClass();
			System.out.println(JR3.getName());

			Class Person = Person.class;
			Field[] fields = Person.getFields();
			for (Field field : fields) {
				System.out.println(field.getName());
			}
			Method[] methods = Person.getMethods();			
			for (Method method : methods) {
				System.out.println(method.getName());
			}
			
			
		} catch (ClassNotFoundException cnfe) {
			cnfe.printStackTrace();
		}
		
	} // main

} // class
