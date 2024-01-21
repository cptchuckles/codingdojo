<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <title>Person Index</title>
  </head>
  <body>
    <div class="container pt-5">
      <h1>Person Details</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>License Number</th>
            <th>State</th>
            <th>Expiration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <c:out value="${person.firstName}" />
              <c:out value="${person.lastName}" />
            </td>
            <td><c:out value="${person.license.number}" /></td>
            <td><c:out value="${person.license.state}" /></td>
            <td><c:out value="${person.license.expirationDate}" /></td>
            <td>
              <c:if test="${person.license ne null}">
              <form:form action="/licenses/${person.license.id}" method="DELETE">
                <input type="submit" value="Revoke License" class="btn btn-link p-0" />
              </form:form>
              </c:if>
            </td>
          </tr>
        </tbody>
      </table>
      <a href="/persons">Back</a>
    </div>
  </body>
</html>
