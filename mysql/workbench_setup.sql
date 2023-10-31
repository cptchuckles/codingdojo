INSERT INTO names (name) VALUES ("johnny g mcgee");

UPDATE names SET name = "Jonathan Gollnick" WHERE id = 1;

INSERT INTO names (name) VALUES ("Bingus"), ("Giovanni"), ("Birb"), ("doge"), ("AMOGUS");

SELECT * FROM names;

DELETE FROM names WHERE id = (SELECT id FROM names WHERE name = "AMOGUS");

SELECT * FROM names;