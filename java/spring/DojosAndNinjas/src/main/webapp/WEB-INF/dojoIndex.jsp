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
      <h1>Dojos</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Location Name</th>
            <th>Enrolled Ninjas</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <c:forEach var="oneDojo" items="${allDojos}">
          <tr>
            <td>
              <a href="/dojos/${oneDojo.id}"><c:out value="${oneDojo.name}" /></a>
            </td>
            <td><c:out value="${oneDojo.ninjas.size()}" /></td>
            <td>
              <form:form action="/dojos/${oneDojo.id}" method="DELETE">
                <input type="submit" value="Delete" class="btn btn-link p-0" />
              </form:form>
            </td>
          </tr>
          </c:forEach>
        </tbody>
      </table>
      <a href="/ninjas/new" class="btn btn-primary">Add a Ninja</a>
      <div class="container card p-3 mt-5 w-100">
        <h2 class="card-title">New Dojo</h2>
        <form:form action="/dojos" method="POST" modelAttribute="newDojo">
          <p>
            <form:label class="form-label" path="name">Name</form:label>
            <form:errors class="form-text text-danger" path="name" />
            <form:input class="form-control" path="name" />
          </p>
          <input type="submit" value="Create" class="btn btn-success" />
        </form:form>
      </div>
    </div>
  </body>
</html>
