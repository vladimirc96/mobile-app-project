INSERT INTO table_users VALUES ('test', null, null, 'test@gmail.com', '2021-01-14', 'Test', null, 'Test', '$2a$10$X5m5pL5ra2hkbJNl8ffrJ.uZnuBwB9z0ofwBJqX9i9OouszMLJ5C.',
 '062', 0);

INSERT INTO table_privileges VALUES (1, 'GET_USER_DETAILS');

INSERT INTO table_privileges VALUES (2, 'POST_AD');

INSERT INTO table_roles VALUES (1, 'User');

INSERT INTO roles_privileges VALUES (1, 1);
INSERT INTO roles_privileges VALUES (1, 2);

INSERT INTO user_roles VALUES ('test', 1);