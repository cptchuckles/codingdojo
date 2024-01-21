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
    <title>Add a Person</title>
  </head>
  <body>
    <div class="container pt-5">
      <h1>Add a Person</h1>
      <form:form class="form" action="/persons" method="POST" modelAttribute="newPerson">
        <p>
          <form:label class="form-label" path="firstName">First Name</form:label>
          <form:errors class="form-text text-danger" path="firstName" />
          <form:input class="form-control" path="firstName" />
        </p>
        <p>
          <form:label class="form-label" path="lastName">Last Name</form:label>
          <form:errors class="form-text text-danger" path="lastName" />
          <form:input class="form-control" path="lastName" />
        </p>
        <p>
          <input type="submit" value="Create" class="btn btn-success" />
          <a href="/persons" class="btn btn-secondary">Cancel</a>
        </p>
      </form:form>
    </div>
  </body>
</html>
