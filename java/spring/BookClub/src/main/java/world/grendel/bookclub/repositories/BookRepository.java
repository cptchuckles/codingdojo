package world.grendel.bookclub.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import world.grendel.bookclub.models.Book;

/**
 * BookRepository
 */
@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
    public List<Book> findAll();
    public List<Book> findAllByAuthor(String author);
    public List<Book> findAllByUserId(Long userId);
}
