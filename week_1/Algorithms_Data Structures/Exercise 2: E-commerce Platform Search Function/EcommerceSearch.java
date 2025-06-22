import java.util.*;

// Product Class
class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public String toString() {
        return "Product{ID=" + productId + ", Name='" + productName + "', Category='" + category + "'}";
    }
}

public class EcommerceSearch {

    public static Product[] createSampleProducts() {
        return new Product[] {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Smartphone", "Electronics"),
            new Product(103, "Keyboard", "Electronics"),
            new Product(104, "Mouse", "Electronics"),
            new Product(105, "Monitor", "Electronics"),
            new Product(106, "Shoes", "Fashion"),
            new Product(107, "T-Shirt", "Fashion"),
            new Product(108, "Jeans", "Fashion"),
            new Product(109, "Jacket", "Fashion"),
            new Product(110, "Sunglasses", "Fashion"),
            new Product(111, "Notebook", "Education"),
            new Product(112, "Pen", "Education"),
            new Product(113, "Backpack", "Education"),
            new Product(114, "Calculator", "Education"),
            new Product(115, "Textbook", "Education"),
            new Product(116, "Chair", "Furniture"),
            new Product(117, "Table", "Furniture"),
            new Product(118, "Lamp", "Furniture"),
            new Product(119, "Sofa", "Furniture"),
            new Product(120, "Bookshelf", "Furniture"),
            new Product(121, "Blender", "Kitchen"),
            new Product(122, "Toaster", "Kitchen"),
            new Product(123, "Knife Set", "Kitchen"),
            new Product(124, "Mixer", "Kitchen"),
            new Product(125, "Plate Set", "Kitchen")
        };
    }

    public static int getUserChoice(Scanner sc) {
        System.out.println("\nSearch Menu:");
        System.out.println("1. Search by Product ID");
        System.out.println("2. Search by Product Name");
        System.out.println("3. Search by Product Category");
        System.out.println("0. Exit");
        System.out.print("Enter your choice: ");
        return sc.nextInt();
    }

    public static Product linearSearchById(Product[] products, int id) {
        for (Product p : products) {
            if (p.productId == id) {
                return p;
            }
        }
        return null;
    }

    public static List<Product> linearSearchByName(Product[] products, String name) {
        List<Product> result = new ArrayList<>();
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(name)) {
                result.add(p);
            }
        }
        return result;
    }

    public static List<Product> linearSearchByCategory(Product[] products, String category) {
        List<Product> result = new ArrayList<>();
        for (Product p : products) {
            if (p.category.equalsIgnoreCase(category)) {
                result.add(p);
            }
        }
        return result;
    }

    public static Product binarySearchById(Product[] products, int id) {
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (products[mid].productId == id) {
                return products[mid];
            } else if (products[mid].productId < id) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static Product binarySearchByName(Product[] products, String name) {
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);
            if (cmp == 0) {
                return products[mid];
            } else if (cmp < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static List<Product> binarySearchByCategory(Product[] products, String category) {
        Arrays.sort(products, Comparator.comparing(p -> p.category.toLowerCase()));
        List<Product> result = new ArrayList<>();

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].category.compareToIgnoreCase(category);

            if (cmp == 0) {
                // Expand left and right
                int i = mid;
                while (i >= 0 && products[i].category.equalsIgnoreCase(category)) {
                    i--;
                }
                i++;
                while (i < products.length && products[i].category.equalsIgnoreCase(category)) {
                    result.add(products[i]);
                    i++;
                }
                break;
            } else if (cmp < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    public static void displayProduct(Product product) {
        if (product != null) {
            System.out.println(product);
        } else {
            System.out.println("Product not found.");
        }
    }

    public static void displayProductList(List<Product> list) {
        if (list.isEmpty()) {
            System.out.println("No matching products found.");
        } else {
            for (Product p : list) {
                System.out.println(p);
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Product[] products = createSampleProducts();

        while (true) {
            int choice = getUserChoice(sc);
            sc.nextLine(); // consume newline

            if (choice == 0) {
                System.out.println("Thank you for using the product search system!");
                break;
            } else if (choice == 1) {
                System.out.print("Enter Product ID: ");
                int id = sc.nextInt();

                System.out.println("\n-- Linear Search by ID --");
                displayProduct(linearSearchById(products, id));

                System.out.println("\n-- Binary Search by ID --");
                displayProduct(binarySearchById(products, id));
            } else if (choice == 2) {
                System.out.print("Enter Product Name: ");
                String name = sc.nextLine();

                System.out.println("\n-- Linear Search by Name --");
                displayProductList(linearSearchByName(products, name));

                System.out.println("\n-- Binary Search by Name --");
                displayProduct(binarySearchByName(products, name));
            } else if (choice == 3) {
                System.out.print("Enter Product Category: ");
                String category = sc.nextLine();

                System.out.println("\n-- Linear Search by Category --");
                displayProductList(linearSearchByCategory(products, category));

                System.out.println("\n-- Binary Search by Category --");
                displayProductList(binarySearchByCategory(products, category));
            } else {
                System.out.println("Invalid choice. Please try again.");
            }
        }

        sc.close();
    }
}
