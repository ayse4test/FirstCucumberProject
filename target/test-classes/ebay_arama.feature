

  Feature: kullanici ebayda cesitli aramalr yapıp sonuc alir
    @ebayarama
    Scenario Outline: cesitli urun aramalari

      Given kullanici ebay anasayfasina "ebay_url" gider.
      Given   kullanici ebay arama kutusuna "<urunler>" yazar
      Then  kullanici ebaydaki sonuc sayisini ekrana yazdirir

      Examples: urun cesitleri
      |urunler|
      |book|
      |pencil|
      |pen   |