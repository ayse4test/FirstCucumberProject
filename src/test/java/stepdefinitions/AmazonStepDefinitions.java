package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.apache.poi.util.SystemOutLogger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.Select;
import pages.AmazonPage;
import utilities.Driver;

public class AmazonStepDefinitions {

     AmazonPage page =new AmazonPage();

    @Given("kullanici amazon sayfasina  gider")
    public void kullanici_amazon_sayfasina_gider() {
        Driver.getDriver().get("https://www.amazon.com");
    }


    @Given("kullanici listeden {string} secer")
    public void kullanici_listeden_secer(String string) {
        Select select = new Select(page.dropDown);

        select.selectByVisibleText(string);
    }

    @Given("kullanici amazon arama kutusuna {string} yazar")
    public void kullanici_arama_kutusuna_headphones_yazar(String string) {

        page.aramaKutusu.sendKeys(string + Keys.ENTER);

    }


    @Then("kullanici sonuc sayisini ekrana yazdirir")
    public void kullanici_sonuc_sayisini_ekrana_yazdirir() {

        System.out.println(page.sonucYazisi.getText());
    }








}
