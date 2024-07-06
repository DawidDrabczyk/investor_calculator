# Kalkulator inwestora

Aplikacja umożliwia wyliczenie zwrotów z inwestycji na podstawie danych wprowadzonych przez użytkownika.

## Konfiguracja

Użytkownik wprowadza do kalkulatora kwotę początkową inwestycji, kwotę jaka zostanie wprowadzona na przestrzeni roku, długość inwestycji w latach i planowana stopa zwrotu. Aplikacja na podstawie tych danych wylicza rentowność inwestycji.

## Technologia

W projekcie została wykorzystana najnowsza wersja Angulara - wykorzystywany jest nowy syntax, outputs czy signals. Ponadto użyto komponentów z Angular Material tj. tabela, paginacja, dialog, buttons, input forms oraz tooltipy.

W kodzie aplikacji znajdziemy silne typowanie z Typescript wraz z definicją modeli, serwis przechowujący metodę wyliczeniową który jest wstrzyknięty poprzez użycie dependency injection do klasy komponentu oraz zdefioniowanie custom pipe odpowiedzialnego za przekazanie wartości boolean dla przycisku.

## Style

Aplikacja oprócz customowych styli wykorzystuje również style zawarte w Angular Material.

## Deployment

https://investor-calculator.onrender.com/
