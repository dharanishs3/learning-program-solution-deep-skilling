
public class SingletonTest {
    public static void main(String[] args) {
        // Retrieve Logger instance
        Logger logger1 = Logger.getInstance();
        logger1.log("First message from logger1");

        // Retrieve Logger instance again
        Logger logger2 = Logger.getInstance();
        logger2.log("Second message from logger2");

        // Validate Singleton
        if (logger1 == logger2) {
            System.out.println("Only one instance of Logger exists.");
        } else {
            System.out.println("Multiple instances of Logger exist.");
        }
    }
}
