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
    <title>Add a License</title>
  </head>
  <body>
    <div class="container pt-5">
      <h1>Add a License</h1>
      <form:form class="form" action="/licenses" method="POST" modelAttribute="newLicense">
        <p>
          <form:label path="person" class="form-label">Licensed Person</form:label>
          <form:errors path="person" class="form-text text-danger" />
          <form:select class="form-control" path="person">
            <c:forEach var="onePerson" items="${allPersons}">
            <form:option value="${onePerson.id}" path="person">
              <c:out value="${onePerson.firstName}" />
              <c:out value="${onePerson.lastName}" />
            </form:option>
            </c:forEach>
          </form:select>
        </p>
        <p>
          <form:label class="form-label" path="number">License Number</form:label>
          <form:errors class="form-text text-danger" path="number" />
          <form:input class="form-control" path="number" />
        </p>
        <p>
          <form:label class="form-label" path="state">Issuing State</form:label>
          <form:errors class="form-text text-danger" path="state" />
          <form:input class="form-control" path="state" />
        </p>
        <p>
          <form:label class="form-label" path="expirationDate">Expiration Date</form:label>
          <form:errors class="form-text text-danger" path="expirationDate" />
          <form:input type="date" class="form-control" path="expirationDate" />
        </p>
        <input type="submit" value="Issue License" class="btn btn-success" />
        <a href="/persons" class="btn btn-secondary">Cancel</a>
      </form:form>
    </div>
  </body>
</html>
