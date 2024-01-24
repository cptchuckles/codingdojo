<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <title>Add a Book</title>
  </head>
  <body>
    <div class="container mt-5">
      <div class="d-flex flex-row justify-content-between align-items-baseline">
        <h1>Details for <em><c:out value="${book.title}" /></em></h1>
        <div class="d-flex flex-row gap-2 w-0">
          <p><c:out value="${currentUser.username}" /></p>
          |
          <a href="/logout">Logout</a>
        </div>
      </div>
      <div class="card p-3">
        <p><strong>Author:</strong> <c:out value="${book.author}" /></p>
        <p><strong>Poster:</strong> <a href="/users/${book.user.id}"><c:out value="${book.user.username}" /></a></p>
        <p><strong>Thoughts:</strong></p>
        <p class="m-5 mt-0 mb-2"><c:out value="${book.thoughts}" /></p>
      </div>
      <c:if test="${book.user.id eq currentUser.id}">
      <div class="card p-2 mt-2 d-flex flex-row gap-2">
        <strong>Actions:</strong>
        <a href="/books/${book.id}/edit" class="btn btn-link p-0 m-0" style="display: inline">Edit</a> |
        <form action="/books/${book.id}" method="POST" class="p-0 m-0" style="display: inline">
          <input type="hidden" name="_method" value="DELETE" />
          <input type="submit" value="Delete" class="btn btn-link p-0 m-0" style="display: inline" />
        </form>
      </div>
      </c:if>
      <a href="/books" class="mt-2">Back to Books Index</a>
    </div>
  </body>
</html>
