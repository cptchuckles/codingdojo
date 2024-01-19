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
      <h1>Burgers Tracker!!!!</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Burger name</th>
            <th>Restaurant Name</th>
            <th>Rating (out of 5)</th>
          </tr>
        </thead>
        <tbody>
          <c:forEach var="oneBurger" items="${allBurgers}">
          <tr>
            <td><a href="/burgers/${oneBurger.id}"><c:out value="${oneBurger.burgerName}" /></a></td>
            <td><c:out value="${oneBurger.restaurantName}" /></td>
            <td><c:out value="${oneBurger.rating}" /></td>
          </tr>
          </c:forEach>
        </tbody>
      </table>
      <div class="container m-3">
        <h2>Add a Burger:</h2>
        <form:form class="form" action="/burgers" method="POST" modelAttribute="newBurger">
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
          <input type="submit" value="GET COOKIN!!!!" class="btn btn-primary" />
        </form:form>
      </div>
    </div>
  </body>
</html>
