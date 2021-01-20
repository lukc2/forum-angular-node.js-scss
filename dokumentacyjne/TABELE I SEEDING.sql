--STAWIANIE TABEL--

CREATE TABLE uzytkownik(
id SERIAL PRIMARY KEY,
nazwa TEXT NOT NULL UNIQUE, 
login TEXT NOT NULL UNIQUE, 
haslo TEXT NOT NULL,
email TEXT NOT NULL,
ranga TEXT NOT NULL DEFAULT('user')
)

CREATE TABLE kategoria(
id SERIAL PRIMARY KEY,
nazwa TEXT NOT NULL UNIQUE
)

CREATE TABLE watek(
id SERIAL PRIMARY KEY,
kategoria_id INTEGER REFERENCES kategoria(id),
uzytkownik_id INTEGER REFERENCES uzytkownik(id),	
nazwa TEXT NOT NULL UNIQUE,
data_zalozenia TIMESTAMP WITH TIME ZONE DEFAULT(current_timestamp),
data_modyfikacji TIMESTAMP WITH TIME ZONE DEFAULT(current_timestamp)	
)

CREATE TABLE post(
id SERIAL PRIMARY KEY,
watek_id INTEGER REFERENCES watek(id),
uzytkownik_id INTEGER REFERENCES uzytkownik(id),	
tresc TEXT NOT NULL,
data_wyslania TIMESTAMP WITH TIME ZONE DEFAULT(current_timestamp)
)

--SEEDING DLA TESTÓW
INSERT INTO uzytkownik(nazwa, login, haslo, email, ranga)
VALUES('Mistrzunio99', 'Mistrzunio', '123', 'jjj@www.pl', 'admin');

INSERT INTO uzytkownik(nazwa, login, haslo, email, ranga)
VALUES('KrzysiekPL', 'Krzysiek', 'Krzysiek', 'iii@www.pl', 'user');

INSERT INTO uzytkownik(nazwa, login, haslo, email, ranga)
VALUES('Stefan Kowalski', 'St', '1234', 'eee@www.pl', 'user');


INSERT INTO kategoria(nazwa) VALUES ('Rowery');
INSERT INTO kategoria(nazwa) VALUES ('Samochody');
INSERT INTO kategoria(nazwa) VALUES ('Off-topic');


INSERT INTO watek(kategoria_id, uzytkownik_id, nazwa)
VALUES (2, 2, 'Sprzedam opla');

INSERT INTO watek(kategoria_id, uzytkownik_id, nazwa)
VALUES (2, 2, 'Sprzedam mercedesa');

INSERT INTO watek(kategoria_id, uzytkownik_id, nazwa)
VALUES (1, 3, 'Fajny mam rower');


INSERT INTO post(watek_id, uzytkownik_id, tresc)
VALUES (2, 2, 'Mam opla do sprzedania, nówka fumka nieśmigana, oferty minimum 2000 zł');

INSERT INTO post(watek_id, uzytkownik_id, tresc)
VALUES (2, 3, 'A daj spokój z tym gruchotem');

INSERT INTO post(watek_id, uzytkownik_id, tresc)
VALUES (2, 1, 'DROGO TROCHĘ');

INSERT INTO post(watek_id, uzytkownik_id, tresc)
VALUES (3, 2, 'Mercedes, patrzcie jaki piękny za jedyne 99 999! ');

INSERT INTO post(watek_id, uzytkownik_id, tresc)
VALUES (3, 1, 'Rzeczywiscie bardzo ladne auto');

INSERT INTO post(watek_id, uzytkownik_id, tresc)
VALUES (3, 3, 'Biore w ciemno');

INSERT INTO post(watek_id, uzytkownik_id, tresc)
VALUES (4, 3, 'Patrzcie, to moj rower. Fajny co nie? HEHE');






