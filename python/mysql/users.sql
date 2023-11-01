INSERT INTO users (first_name, last_name, email) VALUES ("Giordano","Bruno","bruno@earthisflat.com");
INSERT INTO users (first_name, last_name, email) VALUES ("Dr","Seuss","cat@hat.com");
INSERT INTO users (first_name, last_name, email) VALUES ("Bob","Ross","joy@painting.gov");

SELECT * FROM users;
SELECT * FROM users WHERE email = "bruno@earthisflat.com";
SELECT * FROM users WHERE id = (SELECT COUNT(*) FROM users);

UPDATE users SET last_name = "Pancakes" WHERE id = 3;

DELETE FROM users WHERE id = 2;

SELECT * FROM users ORDER BY first_name;
SELECT * FROM users ORDER BY first_name DESC;