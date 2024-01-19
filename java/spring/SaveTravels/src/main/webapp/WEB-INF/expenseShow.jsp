<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <title>Save Travels</title>
  </head>
  <body>
    <div class="container mt-5">
      <h1><c:out value="${expense.name}" /></h1>
      <p><strong>Amount:</strong> <c:out value="${expense.amount}" /></p>
      <p><strong>Vendor:</strong> <c:out value="${expense.vendor}" /></p>
      <p>
        <strong>Description:</strong>
        <p class="m-3"><c:out value="${expense.description}" /></p>
      </p>
      <p style="display: flex; flex-direction: row; align-items: center">
        <a href="/expenses" class="btn btn-link" style="display: inline-block;">Back to Index</a>
        <a href="/expenses/${expense.id}/edit" class="btn btn-dark" style="display: inline-block">Edit</a>
        <form:form style="display: inline-block" action="/expenses/${expense.id}" method="DELETE" modelAttribute="expense">
          <input type="submit" class="btn btn-danger" value="Delete" />
        </form:form>
      </p>
    </div>
  </body>
</html>
