INSERT INTO authors (name) VALUES ("Reginald"), ("Abominable Snowman"), ("Babungo III");

SELECT * FROM authors;

INSERT INTO books (title, pages) VALUES
    ("The Magic Wabungo", 223),
    ("Skeleton Hell", 192),
    ("I Almost Died", 74),
    ("Bears ate my Pants", 129),
    ("The Mating of Bees", 478);

SELECT * FROM books;

INSERT INTO authors_have_books (author_id, book_id) VALUES
	(2, 2),
    (3, 1),
    (1, 3),
    (1, 4),
    (3, 5);

SELECT * FROM authors
    LEFT JOIN authors_have_books
    ON authors.id = authors_have_books.author_id
    LEFT JOIN books
    ON books.id = authors_have_books.book_id;