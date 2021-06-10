Feature: kullanici amazonda cesitli aramalar yapıp sonuc alir
  @amazoncokluarama
  Scenario Outline: once dropdown kategori secme sonra urun arama.
#bu ilk method önceden yazildiği için yeniden yazmama gerek yok
    Given kullanici amazon sayfasina  gider
    Given kullanici listeden "<kategori>" secer
    Given   kullanici amazon arama kutusuna "<urunler>" yazar
    Then  kullanici sonuc sayisini ekrana yazdirir

    Examples: urun cesitleri
      |kategori  |urunler     |
      |Automotive|phoneholder |
      |Baby      |stroller    |
      |Book      |miserables  |