<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <title>Book #${shownBook.id}</title>
  </head>
  <body>
    <div class="container mt-5">
      <h1>Create a new Book</h1>
      <form:form class="form" action="/books" method="POST" modelAttribute="book">
        <p>
          <form:label class="form-label" path="title">Title</form:label>
          <form:errors class="form-text text-danger" path="title"/>
          <form:input class="form-control" path="title"/>
        </p>
        <div class="row">
          <p class="col">
            <form:label class="form-label" path="pageCount">Pages</form:label>
            <form:errors class="form-text text-danger" path="pageCount"/>     
            <form:input class="form-control" type="number" path="pageCount"/>
          </p>
          <p class="col col-3">
            <form:label class="form-label" path="language">Language</form:label>
            <form:errors class="form-text text-danger" path="language"/>
            <form:input class="form-control" path="language"/>
          </p>
        </div>
        <p>
          <form:label class="form-label" path="description">Description</form:label>
          <form:errors class="form-text text-danger" path="description"/>
          <form:textarea class="form-control" path="description"/>
        </p>
        <input class="btn btn-primary" type="submit" value="Submit"/>
        <a href="/books" class="btn btn-secondary">Back</a>
      </form:form>
    </div>
  </body>
</html>
