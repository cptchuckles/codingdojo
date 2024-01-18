<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
        <title>Books</title>
    </head>
    <body>
        <div class="container mt-5">
            <h1>here are some books!!!!!!</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th># Pages</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach var="oneBook" items="${allBooks}">
                    <tr>
                        <td><c:out value="${oneBook.id}" /></td>
                        <td><em><a href="/books/${oneBook.id}"><c:out value="${oneBook.title}" /></a></em></td>
                        <td><c:out value="${oneBook.description}" /></td>
                        <td><c:out value="${oneBook.pageCount}" /></td>
                    </tr>
                    </c:forEach>
                </tbody>
            </table>
        </div>
    </body>
</html>
