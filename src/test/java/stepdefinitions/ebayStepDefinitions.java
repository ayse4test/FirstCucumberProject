package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.And;
import org.openqa.selenium.Keys;
import pages.EbayPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class ebayStepDefinitions {

    EbayPage ebayPage = new EbayPage();

    @Given("kullanici ebay anasayfasina {string} gider.")
    public void kullanici_ebay_anasayfasina_gider(String string) {
        Driver.getDriver().get(ConfigurationReader.getProperty(string));
    }

    @Given("kullanici ebay arama kutusuna {string} yazar")
    public void kullanici_ebay_arama_kutusuna_yazar(String string) {
       ebayPage.aramaKutusu.sendKeys(string+Keys.ENTER);
    }

    @Then("kullanici ebaydaki sonuc sayisini ekrana yazdirir")
    public void kullanici_ebaydaki_sonuc_sayisini_ekrana_yazdirir() {
        System.out.println(ebayPage.sonucYazisi.getText());

    }


}
