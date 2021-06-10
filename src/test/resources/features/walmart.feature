@walmart
  Feature: walmart urun arama
    Scenario Outline: arama kutusuna cesit cesit arama yapar
      Given kullanici "https://www.walmart.com" walmart sayfasina gider
      And  kullanici walmart arama kutusuna "<kelimeler>" yazar ve arar
      Then walmart sonuc sayisini ekrana yazdirir
Examples: aranacak urunler
      |kelimeler  |
      |calculator |
      |watch      |
      |flower     |
