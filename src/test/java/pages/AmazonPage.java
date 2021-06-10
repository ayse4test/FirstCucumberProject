package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class AmazonPage {
    public AmazonPage(){
         PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(id="nav-search-bar-form")
    public WebElement aramaKutusu;


    @FindBy(className ="sg-col-inner")
     public WebElement sonucYazisi;

    @FindBy(id="searchDropdownBox")
    public WebElement dropDown;

}
