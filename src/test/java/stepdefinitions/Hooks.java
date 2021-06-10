package stepdefinitions;

import io.cucumber.java.Scenario;
import io.restassured.internal.TrustAndKeystoreSpec;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Driver;

public class Hooks {

    public void setUp() {
        System.out.println("setUp calisti");


    }

    public void tearDown(Scenario scenario) {
        System.out.println("tearDown calisti");
        final byte[] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);  //ekranfotosunu alıp byte a cvirip array e atiyor.
        if (scenario.isFailed()) {
            scenario.embed(screenshot, "image/png");   //senaryo fail olursa ekran goruntusu alip rapora eklicek. seleniumun kendi kodu. ondan geliyor.
        }

    }
}