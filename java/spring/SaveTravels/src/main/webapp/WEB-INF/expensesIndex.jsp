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
      <h1>Save Travels</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <c:forEach var="oneExpense" items="${allExpenses}">
          <tr>
            <td>
              <a href="/expenses/${oneExpense.id}"><c:out value="${oneExpense.name}" /></a>
            </td>
            <td><c:out value="${oneExpense.vendor}" /></td>
            <td><c:out value="${oneExpense.amount}" /></td>
            <td class="row pt-0 pb-0" style="align-items: center">
              <a class="col-1 btn btn-link" href="/expenses/${oneExpense.id}/edit">Edit</a>
              <form:form class="col-1" action="/expenses/${oneExpense.id}" method="DELETE">
                <input type="submit" value="Delete" class="btn btn-link" />
              </form:form>
            </td>
          </tr>
          </c:forEach>
        </tbody>
      </table>
      <div class="card m-5 p-2">
        <h2 class="card-title">Add an Expense</h2>
        <form:form class="form" action="/expenses" method="POST" modelAttribute="newExpense">
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
          <input type="submit" class="btn btn-success" value="Add Expense" />
        </form:form>
      </div>
    </div>
  </body>
</html>
