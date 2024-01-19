<%@ page isErrorPage="true" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <title>Save Travels - Edit Expense</title>
  </head>
  <body>
    <div class="container mt-5">
      <h1 class="card-title">Edit <c:out value="${expense.name}" /></h1>
      <form:form class="form" action="/expenses/${expense.id}" method="PUT" modelAttribute="expense">
        <p>
          <form:label path="name" class="form-label">Expense Name</form:label>
          <form:errors path="name" class="form-label text-danger" />
          <form:input path="name" class="form-control"></form:input>
        </p>
        <p>
          <form:label path="vendor" class="form-label">Vendor</form:label>
          <form:errors path="vendor" class="form-label text-danger" />
          <form:input path="vendor" class="form-control"></form:input>
        </p>
        <p>
          <form:label path="amount" class="form-label">Amount</form:label>
          <form:errors path="amount" class="form-label text-danger" />
          <form:input type="number" step="0.01" path="amount" class="form-control"></form:input>
        </p>
        <p>
          <form:label path="description" class="form-label">Description</form:label>
          <form:errors path="description" class="form-label text-danger" />
          <form:textarea path="description" class="form-control"></form:textarea>
        </p>
        <p>
          <input type="submit" class="btn btn-success" value="Update Expense" />
          <a href="/expenses" class="btn btn-secondary">Cancel</a>
        </p>
      </form:form>
    </div>
  </body>
</html>
