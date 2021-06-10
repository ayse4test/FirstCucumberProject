package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.apache.poi.util.SystemOutLogger;
import org.openqa.selenium.Keys;
import pages.WalmartPage;
import utilities.Driver;

public class walmartStepDefinitions {

  WalmartPage walpage =new WalmartPage();

    @Given("kullanici {string} walmart sayfasina gider")
    public void kullanici_walmart_sayfasina_gider(String string) {
        Driver.getDriver().get(string);

    }

    @Given("kullanici walmart arama kutusuna {string} yazar ve arar")
    public void kullanici_walmart_arama_kutusuna_yazar_ve_arar(String string) {
       walpage.aramaKutusu.sendKeys(string+ Keys.ENTER);
       Driver.wait(1);
    }

    @Then("walmart sonuc sayisini ekrana yazdirir")
    public void walmart_sonuc_sayisini_ekrana_yazdirir() {
        String sonuc =walpage.sonucYazisi.getText();
        System.out.println(sonuc);
    }

}
