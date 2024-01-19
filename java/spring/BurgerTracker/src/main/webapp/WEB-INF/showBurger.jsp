<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <title>Burger Details</title>
  </head>
  <body>
    <div class="container mt-5">
      <h1><c:out value="${burger.burgerName}" /></h1>
      <p><strong>Restaurant:</strong> <c:out value="${burger.restaurantName}" /></p>
      <p><strong>Rating:</strong> <c:out value="${burger.rating}" /></p>
      <p><strong>Notes:</strong></p>
      <p class="m-5 mt-1"><c:out value="${burger.notes}" /></p>
      <a href="/burgers" class="btn btn-primary">Back to List</a>
      <a href="/burgers/${burger.id}/edit" class="btn btn-secondary">Change this Burger</a>
    </div>
  </body>
</html>
