<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
        <title>Book #${shownBook.id}</title>
    </head>
    <body>
        <div class="container mt-5">
            <h1><c:out value="${shownBook.title}" /></h1>
            <p>Language: <c:out value="${shownBook.language}" /></p>
            <p>Description: <c:out value="${shownBook.description}" /></p>
            <p>Page Count: <c:out value="${shownBook.pageCount}" /></p>
            <a href="/books">Return to Index</a>
        </div>
    </body>
</html>
