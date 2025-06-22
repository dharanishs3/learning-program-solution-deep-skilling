import java.util.Scanner;

public class FinancialForecastStudent {

    
    public static double forecast(double amount, double rate, int years) {
        if (years == 0) {
            return amount; 
        } else {
            
            return forecast(amount, rate, years - 1) * (1 + rate);
        }
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter starting amount: ");
        double startAmount = input.nextDouble();

        System.out.print("Enter yearly growth rate (%): ");
        double growthPercent = input.nextDouble();
        double growthRate = growthPercent / 100; 

        System.out.print("Enter number of years: ");
        int numYears = input.nextInt();

        double result = forecast(startAmount, growthRate, numYears);

        System.out.printf("After %d years, the value will be: %.2f\n", numYears, result);
    }
}
