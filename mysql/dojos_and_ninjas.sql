INSERT INTO dojos (name) VALUES ("West Virginia"), ("Ethiopia"), ("Burthorpe");

SET SQL_SAFE_UPDATES = 0;
DELETE FROM dojos;
SET SQL_SAFE_UPDATES = 1;

INSERT INTO dojos (name) VALUES ("Zanzibarland"), ("McDojo"), ("Bullshido Jutsu");

INSERT INTO ninjas (first_name, last_name, age, dojo_id) VALUES
	("Giordano", "Bruno", 47, 4),
    ("Michael", "Angelo", 29, 4),
    ("Scape", "Rune", 11, 4);

INSERT INTO ninjas (first_name, last_name, age, dojo_id) VALUES
	("Pop", "Eye", 89, 5),
    ("Amon", "Amarth", 31, 5),
    ("John", "Sekiro", 49, 5);

INSERT INTO ninjas (first_name, last_name, age, dojo_id) VALUES
	("Jay", "Son", 24, 6),
    ("Reggie", "Ex", 97, 6),
    ("X", "Emil", 104, 6);

-- Ninjas from first dojo
SELECT * FROM ninjas
	WHERE dojo_id = (SELECT id FROM dojos LIMIT 1);

-- Ninjas from last dojo
SELECT * FROM ninjas
	WHERE dojo_id = 
		(SELECT id FROM dojos ORDER BY id DESC LIMIT 1);

-- Last ninja's dojo
SELECT * FROM dojos
	WHERE id =
		(SELECT dojo_id FROM ninjas ORDER BY id DESC LIMIT 1);

-- Ninja #6 and his dojo
SELECT * FROM ninjas
	JOIN dojos
    ON ninjas.dojo_id = dojos.id
    WHERE ninjas.id = 6;

-- All ninjas and their dojos
SELECT * FROM ninjas
	JOIN dojos
    ON ninjas.dojo_id = dojos.id;