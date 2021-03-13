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