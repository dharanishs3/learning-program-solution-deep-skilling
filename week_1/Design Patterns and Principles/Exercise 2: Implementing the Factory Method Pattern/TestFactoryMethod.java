import documents.Document;
import factories.DocumentFactory;
import factories.WordFactory;
import factories.PdfFactory;
import factories.ExcelFactory;

public class TestFactoryMethod {
    public static void main(String[] args) {
        // Word Document
        DocumentFactory wordFactory = new WordFactory();
        Document wordDoc = wordFactory.createDocument();
        wordDoc.open();

        // PDF Document
        DocumentFactory pdfFactory = new PdfFactory();
        Document pdfDoc = pdfFactory.createDocument();
        pdfDoc.open();

        // Excel Document
        DocumentFactory excelFactory = new ExcelFactory();
        Document excelDoc = excelFactory.createDocument();
        excelDoc.open();
    }
}
