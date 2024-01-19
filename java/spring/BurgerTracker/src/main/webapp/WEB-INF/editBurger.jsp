<%@ page isErrorPage="true" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <title>Burger Tracker</title>
  </head>
  <body>
    <div class="container mt-5">
      <h1>Edit burger <c:out value="${burger.burgerName}" /></h1>
      <form:form class="form" action="/burgers/${burger.id}" method="PUT" modelAttribute="burger">
        <form:input type="hidden" path="id" />
        <p>
          <form:label class="form-label" path="burgerName">Burger Name</form:label>
          <form:errors class="form-text text-danger" path="burgerName" />
          <form:input class="form-control" path="burgerName" />
        </p>
        <p>
          <form:label class="form-label" path="restaurantName">Restaurant Name</form:label>
          <form:errors class="form-text text-danger" path="restaurantName" />
          <form:input class="form-control" path="restaurantName" />
        </p>
        <p>
          <form:label class="form-label" path="rating">Rating</form:label>
          <form:errors class="form-text text-danger" path="rating" />
          <form:input type="number" class="form-control" path="rating" />
        </p>
        <p>
          <form:label class="form-label" path="notes">Notes</form:label>
          <form:errors class="form-text text-danger" path="notes" />
          <form:textarea class="form-control" path="notes" />
        </p>
        <input type="submit" value="UPDATE RECIPE!!!" class="btn btn-primary" />
        <a href="/burgers" class="btn btn-secondary">Cancel</a>
      </form:form>
    </div>
  </body>
</html>
