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
    <title>Dojos Index</title>
  </head>
  <body>
    <div class="container pt-5">
      <h1>New Ninja</h1>
      <form:form class="form" action="/ninjas" method="POST" modelAttribute="newNinja">
        <p>
          <form:label class="form-label" path="dojo">Dojo</form:label>
          <form:errors class="form-text text-danger" path="dojo" />
          <form:select class="form-control" path="dojo">
            <c:forEach var="oneDojo" items="${allDojos}">
            <form:option value="${oneDojo.id}" path="dojo">
              <c:out value="${oneDojo.name}" />
            </form:option>
            </c:forEach>
          </form:select>
        </p>
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
          <form:label class="form-label" path="age">Age</form:label>
          <form:errors class="form-text text-danger" path="age" />
          <form:input type="number" class="form-control" path="age" />
        </p>
        <input type="submit" value="Create" class="btn btn-success" />
        <a href="/dojos" class="btn btn-secondary">Cancel</a>
      </form:form>
    </div>
  </body>
</html>
