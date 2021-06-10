Feature: Amazon Arama
  @amazonarama
  Scenario: kullanici amazonda arama yapar
    Given kullanici amazon sayfasina  gider
    And   kullanici arama kutusuna headphones yazar
    Then  kullanici sonuc sayisini ekrana yazdirir