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
      <h1>People</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <c:forEach var="onePerson" items="${allPersons}">
          <tr>
            <td>
              <c:out value="${onePerson.firstName}" />
              <c:out value="${onePerson.lastName}" />
            </td>
            <td>
              <form:form action="/persons/${onePerson.id}" method="DELETE">
                <input type="submit" value="Delete" class="btn btn-link p-0" />
              </form:form>
            </td>
          </tr>
          </c:forEach>
        </tbody>
      </table>
      <h2>Actions</h2>
      <a href="/persons/new" class="btn btn-success">Add a Person</a>
      <a href="/licenses/new" class="btn btn-primary">Add a License</a>
    </div>
  </body>
</html>
