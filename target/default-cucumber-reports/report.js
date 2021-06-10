$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/walmart.feature");
formatter.feature({
  "name": "walmart urun arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.scenarioOutline({
  "name": "arama kutusuna cesit cesit arama yapar",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "kullanici \"https://www.walmart.com\" walmart sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "kullanici walmart arama kutusuna \"\u003ckelimeler\u003e\" yazar ve arar",
  "keyword": "And "
});
formatter.step({
  "name": "walmart sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.examples({
  "name": "aranacak urunler",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "kelimeler"
      ]
    },
    {
      "cells": [
        "calculator"
      ]
    },
    {
      "cells": [
        "watch"
      ]
    },
    {
      "cells": [
        "flower"
      ]
    }
  ]
});
formatter.scenario({
  "name": "arama kutusuna cesit cesit arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.step({
  "name": "kullanici \"https://www.walmart.com\" walmart sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.walmartStepDefinitions.kullanici_walmart_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart arama kutusuna \"calculator\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.walmartStepDefinitions.kullanici_walmart_arama_kutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "walmart sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.walmartStepDefinitions.walmart_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "arama kutusuna cesit cesit arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.step({
  "name": "kullanici \"https://www.walmart.com\" walmart sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.walmartStepDefinitions.kullanici_walmart_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart arama kutusuna \"watch\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.walmartStepDefinitions.kullanici_walmart_arama_kutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "walmart sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.walmartStepDefinitions.walmart_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "arama kutusuna cesit cesit arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.step({
  "name": "kullanici \"https://www.walmart.com\" walmart sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.walmartStepDefinitions.kullanici_walmart_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart arama kutusuna \"flower\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.walmartStepDefinitions.kullanici_walmart_arama_kutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "walmart sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.walmartStepDefinitions.walmart_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
});seCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat stepdefinitions.AmazonStepDefinitions.kullanici_arama_kutusuna_headphones_yazar(AmazonStepDefinitions.java:31)\r\n\tat ✽.kullanici amazon arama kutusuna \"phoneholder\" yazar(file:///C:/Users/aa/IdeaProjects/FirstCucumberProject/src/test/resources/features/amazon_examples.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "once dropdown kategori secme sonra urun arama.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@amazoncokluarama"
    }
  ]
});
formatter.step({
  "name": "kullanici amazon sayfasina  gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici listeden \"Baby\" secer",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_listeden_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon arama kutusuna \"stroller\" yazar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_arama_kutusuna_headphones_yazar(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d91.0.4472.77)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2SRDFOO\u0027, ip: \u0027192.168.1.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.77, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\aa\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:54832}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6f744c6f0f7e7ad0950658a1b66b276c\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat stepdefinitions.AmazonStepDefinitions.kullanici_arama_kutusuna_headphones_yazar(AmazonStepDefinitions.java:31)\r\n\tat ✽.kullanici amazon arama kutusuna \"stroller\" yazar(file:///C:/Users/aa/IdeaProjects/FirstCucumberProject/src/test/resources/features/amazon_examples.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "once dropdown kategori secme sonra urun arama.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@amazoncokluarama"
    }
  ]
});
formatter.step({
  "name": "kullanici amazon sayfasina  gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici listeden \"Book\" secer",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_listeden_secer(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Book\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2SRDFOO\u0027, ip: \u0027192.168.1.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.10\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat stepdefinitions.AmazonStepDefinitions.kullanici_listeden_secer(AmazonStepDefinitions.java:25)\r\n\tat ✽.kullanici listeden \"Book\" secer(file:///C:/Users/aa/IdeaProjects/FirstCucumberProject/src/test/resources/features/amazon_examples.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "kullanici amazon arama kutusuna \"miserables\" yazar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_arama_kutusuna_headphones_yazar(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "skipped"
});
});