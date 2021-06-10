@walmart
  Feature: walmart urun arama
    Scenario Outline: arama kutusuna cesit cesit arama yapar
      Given kullanici "https://www.walmart.com" walmart sayfasina gider
      And  kullanici walmart arama kutusuna "<kelimeler>" yazar ve arar
      Then walmart sonuc sayisini ekrana yazdirir
Examples: aranacak urunler
      |kelimeler|
      |calculator      |
      |    watch     |
      |    flower     |



    echo "# FirstCucumberProject" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/ayse4test/FirstCucumberProject.git
    git push -u origin main

    git remote add origin https://github.com/ayse4test/FirstCucumberProject.git
    git branch -M main
    git push -u origin main