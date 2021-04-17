-- LOKACIJE
INSERT INTO table_location VALUES (1,'Klisa');
INSERT INTO table_location VALUES (2,'Slana bara');
INSERT INTO table_location VALUES (3,'Vidovdansko naselje');
INSERT INTO table_location VALUES (4, 'Salajka');
INSERT INTO table_location VALUES (5, 'Sajlovo');
INSERT INTO table_location VALUES (6, 'Jugovićevo');
INSERT INTO table_location VALUES (7,'Avijatičarko naselje');
INSERT INTO table_location VALUES (8, 'Detelinara');
INSERT INTO table_location VALUES (9, 'Novo naselje');
INSERT INTO table_location VALUES (10, 'Adice');
INSERT INTO table_location VALUES (11, 'Telep');
INSERT INTO table_location VALUES (12, 'Adamovićevo naselje');
INSERT INTO table_location VALUES (13, 'Grbavica');
INSERT INTO table_location VALUES (14, 'Betanija');
INSERT INTO table_location VALUES (15, 'Banatić');
INSERT INTO table_location VALUES (16, 'Rotkvarija');
INSERT INTO table_location VALUES (17, 'Podbara');
INSERT INTO table_location VALUES (18, 'Stari grad');
INSERT INTO table_location VALUES (19, 'Petrovaradin');
INSERT INTO table_location VALUES (20, 'Liman 1');
INSERT INTO table_location VALUES (21, 'Liman 2');
INSERT INTO table_location VALUES (22, 'Liman 3');
INSERT INTO table_location VALUES (23, 'Liman 4');
INSERT INTO table_location VALUES (24, 'Ribarsko ostrvo');
INSERT INTO table_location VALUES (25, 'Sremska kamenica');
INSERT INTO table_location VALUES (26, 'Sajmište');


INSERT INTO table_users VALUES (1, null, null, 'test@gmail.com', '2021-01-14', 'Test', null, 'Test', '$2a$10$/MwqV/SnmvqIalj/RIMy.Ox7HSnclNyCy1NNLeLY7nlwfMWDiRMwi',
 '0624892247', 'test', 1);

INSERT INTO table_privileges VALUES (1, 'GET_USER_DETAILS');

INSERT INTO table_privileges VALUES (2, 'POST_AD');

INSERT INTO table_roles VALUES (1, 'User');

INSERT INTO roles_privileges VALUES (1, 1);
INSERT INTO roles_privileges VALUES (1, 2);

INSERT INTO user_roles VALUES ('test', 1);

INSERT INTO table_categories VALUES (1, 'Majstori i zanati');
INSERT INTO table_categories VALUES (2, 'Računari, telefoni bela tehnika');
INSERT INTO table_categories VALUES (3, 'Privatni časovi');
INSERT INTO table_categories VALUES (4, 'Prevodi i izrada radova');
INSERT INTO table_categories VALUES (5, 'Prevoz');
INSERT INTO table_categories VALUES (6, 'Muzika i oprema');
INSERT INTO table_categories VALUES (7, 'Fotografija i video');
INSERT INTO table_categories VALUES (8, 'Dizajn, štampa i umetnost');
INSERT INTO table_categories VALUES (9, 'Lepota, nega i tretmani');
INSERT INTO table_categories VALUES (10, 'Kućne usluge i održavanje');
INSERT INTO table_categories VALUES (11, 'Gurmanluci');
INSERT INTO table_categories VALUES (12, 'Sport i zdravlje');

--  MAJSTORI I ZANATI
INSERT INTO table_subcategories VALUES (1, 'Vodoinstaleteri');
INSERT INTO table_subcategories VALUES (2, 'Održavanje grejnih cevi');
INSERT INTO table_subcategories VALUES (3, 'Ventilacioni sistemi');
INSERT INTO table_subcategories VALUES (4, 'Električari');
INSERT INTO table_subcategories VALUES (5, 'Servis liftova');
INSERT INTO table_subcategories VALUES (6, 'Klima uređaji');
INSERT INTO table_subcategories VALUES (7, 'Termo-rashladni uređaji');
INSERT INTO table_subcategories VALUES (8, 'Krojači');
INSERT INTO table_subcategories VALUES (9, 'Obućari');
INSERT INTO table_subcategories VALUES (10, 'Časovničari');
INSERT INTO table_subcategories VALUES (11, 'Parketi i podovi');
INSERT INTO table_subcategories VALUES (12, 'Moleri');
INSERT INTO table_subcategories VALUES (13, 'Zidari');
INSERT INTO table_subcategories VALUES (14, 'Gipsari');
INSERT INTO table_subcategories VALUES (15, 'Fasade i izolacije');
INSERT INTO table_subcategories VALUES (16, 'Bravari i ključari');
INSERT INTO table_subcategories VALUES (17, 'Servis vozila');
INSERT INTO table_subcategories VALUES (18, 'Obrada metala');
INSERT INTO table_subcategories VALUES (19, 'Tašnari');


--  RAČUNARI, MOBILNI TELEFONI I BELA TEHNIKA
INSERT INTO table_subcategories VALUES (20, 'Servis računara');
INSERT INTO table_subcategories VALUES (21, 'Servih mobilnih uređaja');
INSERT INTO table_subcategories VALUES (22, 'Softveri i operativni sistemi');
INSERT INTO table_subcategories VALUES (23, 'Bela tehnika');


-- PRIVATNI ČASOVI
INSERT INTO table_subcategories VALUES (24, 'Engleski');
INSERT INTO table_subcategories VALUES (25, 'Francuski');
INSERT INTO table_subcategories VALUES (26, 'Nemački');
INSERT INTO table_subcategories VALUES (27, 'Španski');
INSERT INTO table_subcategories VALUES (28, 'IT');
INSERT INTO table_subcategories VALUES (29, 'Matematika');
INSERT INTO table_subcategories VALUES (30, 'Hemija');
INSERT INTO table_subcategories VALUES (31, 'Biologija');
INSERT INTO table_subcategories VALUES (32, 'Kineski');

-- PREVOD I IZRADA RADOVA
INSERT INTO table_subcategories VALUES (33, 'Semniraski i završni radovi');
INSERT INTO table_subcategories VALUES (34, 'Lektori');
INSERT INTO table_subcategories VALUES (35, 'Prevođenje');

-- PREVOZ
INSERT INTO table_subcategories VALUES (36, 'Šlep služba');
INSERT INTO table_subcategories VALUES (37, 'Iznajmljivanje vozila');
INSERT INTO table_subcategories VALUES (38, 'Privatne vožnje');
INSERT INTO table_subcategories VALUES (39, 'Selidbe');

-- MUZIKA I OPREMA
INSERT INTO table_subcategories VALUES (40, 'Bendovi');
INSERT INTO table_subcategories VALUES (41, 'DJ');
INSERT INTO table_subcategories VALUES (42, 'Opema');

-- FOTOGRAFIJA I VIDEO
INSERT INTO table_subcategories VALUES (43, 'Fotograf');
INSERT INTO table_subcategories VALUES (44, 'Izrada slika');
INSERT INTO table_subcategories VALUES (45, 'Obrada slika');

-- DIZAJN, UMETNOST I ŠTAMPA
INSERT INTO table_subcategories VALUES (46, 'Modelovanje');
INSERT INTO table_subcategories VALUES (47, 'Štampanje');

-- LEPOTA, NEGA I TRETMANI
INSERT INTO table_subcategories VALUES (48, 'Frizeri');
INSERT INTO table_subcategories VALUES (49, 'Šminka');
INSERT INTO table_subcategories VALUES (50, 'Nokti');
INSERT INTO table_subcategories VALUES (51, 'Kozmetika');
INSERT INTO table_subcategories VALUES (52, 'Depilacije');
INSERT INTO table_subcategories VALUES (53, 'Masaže');

-- KUĆNE USLUGE I ODRŽAVANJE
INSERT INTO table_subcategories VALUES (54, 'Čistači');
INSERT INTO table_subcategories VALUES (55, 'Tepisi i podovi');
INSERT INTO table_subcategories VALUES (56, 'Baštovani');
INSERT INTO table_subcategories VALUES (57, 'Izrada bazena');
INSERT INTO table_subcategories VALUES (58, 'Odžačari');
INSERT INTO table_subcategories VALUES (59, 'Čuvanje dece');
INSERT INTO table_subcategories VALUES (60, 'Čuvanje ljubimaca');
INSERT INTO table_subcategories VALUES (61, 'Nega odraslih');

-- GURMANLUCI
INSERT INTO table_subcategories VALUES (62, 'Torte i kolači');
INSERT INTO table_subcategories VALUES (63, 'Ketering');
INSERT INTO table_subcategories VALUES (64, 'Domaći i organski proizvodi');


-- SPORT I ZDRAVLJE
INSERT INTO table_subcategories VALUES (65, 'Personalni treninzi');
INSERT INTO table_subcategories VALUES (66, 'Kiropraktičari');
INSERT INTO table_subcategories VALUES (67, 'Masaže');
INSERT INTO table_subcategories VALUES (68, 'Alternativna medicina');

INSERT INTO categories_subcategories VALUES (1, 1);
INSERT INTO categories_subcategories VALUES (1, 2);
INSERT INTO categories_subcategories VALUES (1, 3);
INSERT INTO categories_subcategories VALUES (1, 4);
INSERT INTO categories_subcategories VALUES (1, 5);
INSERT INTO categories_subcategories VALUES (1, 6);
INSERT INTO categories_subcategories VALUES (1, 7);
INSERT INTO categories_subcategories VALUES (1, 8);
INSERT INTO categories_subcategories VALUES (1, 9);
INSERT INTO categories_subcategories VALUES (1, 10);
INSERT INTO categories_subcategories VALUES (1, 11);
INSERT INTO categories_subcategories VALUES (1, 12);
INSERT INTO categories_subcategories VALUES (1, 13);
INSERT INTO categories_subcategories VALUES (1, 14);
INSERT INTO categories_subcategories VALUES (1, 15);
INSERT INTO categories_subcategories VALUES (1, 16);
INSERT INTO categories_subcategories VALUES (1, 17);
INSERT INTO categories_subcategories VALUES (1, 18);
INSERT INTO categories_subcategories VALUES (1, 19);


INSERT INTO categories_subcategories VALUES (2, 20);
INSERT INTO categories_subcategories VALUES (2, 21);
INSERT INTO categories_subcategories VALUES (2, 22);
INSERT INTO categories_subcategories VALUES (2, 23);

INSERT INTO categories_subcategories VALUES (3, 24);
INSERT INTO categories_subcategories VALUES (3, 25);
INSERT INTO categories_subcategories VALUES (3, 26);
INSERT INTO categories_subcategories VALUES (3, 27);
INSERT INTO categories_subcategories VALUES (3, 28);
INSERT INTO categories_subcategories VALUES (3, 29);
INSERT INTO categories_subcategories VALUES (3, 30);
INSERT INTO categories_subcategories VALUES (3, 31);
INSERT INTO categories_subcategories VALUES (3, 32);

INSERT INTO categories_subcategories VALUES (4, 33);
INSERT INTO categories_subcategories VALUES (4, 34);
INSERT INTO categories_subcategories VALUES (4, 35);

INSERT INTO categories_subcategories VALUES (5, 36);
INSERT INTO categories_subcategories VALUES (5, 37);
INSERT INTO categories_subcategories VALUES (5, 38);
INSERT INTO categories_subcategories VALUES (5, 39);

INSERT INTO categories_subcategories VALUES (6, 40);
INSERT INTO categories_subcategories VALUES (6, 41);
INSERT INTO categories_subcategories VALUES (6, 42);

INSERT INTO categories_subcategories VALUES (7, 43);
INSERT INTO categories_subcategories VALUES (7, 44);
INSERT INTO categories_subcategories VALUES (7, 45);

INSERT INTO categories_subcategories VALUES (8, 46);
INSERT INTO categories_subcategories VALUES (8, 47);

INSERT INTO categories_subcategories VALUES (9, 48);
INSERT INTO categories_subcategories VALUES (9, 49);
INSERT INTO categories_subcategories VALUES (9, 50);
INSERT INTO categories_subcategories VALUES (9, 51);
INSERT INTO categories_subcategories VALUES (9, 52);
INSERT INTO categories_subcategories VALUES (9, 53);

INSERT INTO categories_subcategories VALUES (10, 54);
INSERT INTO categories_subcategories VALUES (10, 55);
INSERT INTO categories_subcategories VALUES (10, 56);
INSERT INTO categories_subcategories VALUES (10, 57);
INSERT INTO categories_subcategories VALUES (10, 58);
INSERT INTO categories_subcategories VALUES (10, 59);
INSERT INTO categories_subcategories VALUES (10, 60);
INSERT INTO categories_subcategories VALUES (10, 61);

INSERT INTO categories_subcategories VALUES (11, 62);
INSERT INTO categories_subcategories VALUES (11, 63);
INSERT INTO categories_subcategories VALUES (11, 64);

INSERT INTO categories_subcategories VALUES (12, 65);
INSERT INTO categories_subcategories VALUES (12, 66);
INSERT INTO categories_subcategories VALUES (12, 67);
INSERT INTO categories_subcategories VALUES (12, 68);

INSERT INTO table_ads VALUES ('1', 1, '2021-04-11', null, 0, '<div>Zovite me da vam sredim sve</div>', null, '0', 'Vodoinstalater', '0', '1', '1');
INSERT INTO table_ads VALUES ('2', 1, '2021-04-11', NULL, 0, '<div>Povoljan vodoinstalater</div>', null, '0', 'Odlican vodoinstalater', '0', '1', '1');
INSERT INTO table_ads VALUES ('3', 0, '2021-04-11', 'RSD', 0, '<div>Zovite me 062266123. Povoljno sve.</div>', null, '1500', 'Najjaci vodoinstalater', '0', '1', '1');


INSERT INTO table_ratings VALUES (1, 'Odlican', '2021-04-11', 1, 'ferika', 1);
INSERT INTO table_ratings VALUES (2, 'Odlican 5', '2021-04-11',1, '', 1);
INSERT INTO table_ratings VALUES (3, 'Ocajan', '2021-04-11',0, '', 1);
