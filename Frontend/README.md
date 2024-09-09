# Sumar

Repo pentru metrialele de cursuri si trimiterea de teme la cursul de Frontend (JS + React)

# Procedura

- fiecare academician cloneaza repo-ul pe local
- se creaza un branch sub forma prenume.nume/main
- pentru fiecare tema se creaza un nou branch prenume.nume/tema1, prenume.nume/tema2 etc.
- pentru a trimite tema, se face un pull request, de pe branch-ul de tema pe branch-ul main
- se adauga ca reviewer required mentorul
- se adauga ca reviewer optional profesorul
- tema se considera completa atunci cand se primeste Approve de la mentor pe PR

# Teme Ziua 1

1. Fizz buzz (https://youtu.be/QPZ0pIK_wsc?si=aIHw3ccmDZHH4AwZ)
2. Implementarea unui formular ce contine un input pentru nume, varsta, email si parola.
   O data actionat un buton, se vor valida valorile acestor inputuri: toate inputurile sa contina valoare, emailul sa aiba structura de email, etc.
   Daca valorile sunt valide, se vor afisa in pagina
3. Adaugare dinamica de optiuni intr-un select
4. Implementati o functie, ce o data apelata, va injecta in document un nou div ce contine un select si un buton.
   Cand este actionat acest buton, se va afisa in pagina valoarea selectata din dropdown

#Teme Ziua 2

1. implementare navbar ce tine cont de width-ul ferestrei
2. interfata grafica a unui calculator ce poate face operatii basic: adunare, scadere, inmultire, impartire
3. de refacut din codul de snake de la c# in js si de randat interfata grafica, sarpele va fi controlat prin 4 butoane aflate pe ecran
4. (pentru cei care termina tema prea repede) O simpla aplicatie unde poti adauga sau sterge chenare. Chenarele se randeaza recursiv. <br />
   Un chenar nou se randeaza in interiorul ultimului chenar adaugat. Fiecare chenar are in interior un buton ce ii incrementeaza numarul.<br />
   3 e ultimul chenar adaugat <br />
   ![Alt text](https://firebasestorage.googleapis.com/v0/b/ruxi-cc7de.appspot.com/o/Picture1.png?alt=media&token=52cc4f7d-a240-402c-afaf-1ade0d9946d6)
   <br />
   '+' adauga un chenar <br />
   '-' sterge ultimul chenar <br />
   Butoanele din interiorul chenarelor pornesc de la 0 si la fiecare apasare se incrementeaza.<br />
   Exista 2 componente: Manager care se ocupa de adaugare/stergere si de randarea primului chenar, si chenarul care randeaza un buton si inca un chenar daca e nevoie.<br />
   Fiecare chenar va avea state-ul lui pentru numarul de apasari pe buton. <br />

#Teme Ziua 4
Implementati dupa modelul din folderul Homework, un shopping cart, in care putem modifica cantitatea ficarui item, putem vedea totalul, putem sterge toate elementele, iar in navbar avem cantitatea totala din cart
