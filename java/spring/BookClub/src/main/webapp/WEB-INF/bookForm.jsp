<%@ page isErrorPage="true" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
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
      <h1 class="card-title">Add a Book</h1>
      <form:form class="form" action="/books" method="POST" modelAttribute="newBook">
        <p>
          <form:label class="form-label" path="title">Title</form:label>
          <form:errors class="form-text text-danger" path="title" />
          <form:input class="form-control" path="title" />
        </p>
        <p>
          <form:label class="form-label" path="author">Author</form:label>
          <form:errors class="form-text text-danger" path="author" />
          <form:input class="form-control" path="author" />
        </p>
        <p>
          <form:label class="form-label" path="thoughts">My Thoughts</form:label>
          <form:errors class="form-text text-danger" path="thoughts" />
          <form:textarea class="form-control" path="thoughts"></form:textarea>
        </p>
        <input type="submit" value="Add Book" class="btn btn-success" />
        <a href="/books" class="btn btn-secondary">Cancel</a>
      </form:form>
    </div>
  </body>
</html>
