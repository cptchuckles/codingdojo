<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.Date" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
        <title>Login or Register</title>
    </head>
    <body>
        <div class="container mt-5">
            <div class="d-flex flex-row justify-content-between align-items-baseline">
                <h1>henlo <c:out value="${currentUser.username}" /></h1>
                <p><a href="/logout">Log out</a></p>
            </div>
            <div class="d-flex flex-row justify-content-around">
                <h3>all of the books</h3>
                <a href="/books/new">add a to my shelf!!!!!</a>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Posted by</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach var="oneBook" items="${allBooks}">
                    <tr>
                        <td><c:out value="${oneBook.id}" /></td>
                        <td><a href="/books/${oneBook.id}"><em><c:out value="${oneBook.title}" /></em></a></td>
                        <td><c:out value="${oneBook.author}" /></td>
                        <td><c:out value="${oneBook.user.username}" /></td>
                        <td>
                            <c:if test="${oneBook.user.id eq currentUser.id}">
                            <a href="/books/${oneBook.id}/edit" class="btn btn-link p-0">Edit</a> |
                            <form:form action="/books/${oneBook.id}" method="DELETE" class="d-inline p-0 m-0">
                                <input type="submit" value="Delete" class="btn btn-link p-0" />
                            </form:form>
                            </c:if>
                        </td>
                    </tr>
                    </c:forEach>
                </tbody>
            </table>
        </div>
    </body>
</html>
