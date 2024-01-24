<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <title>Login or Register</title>
  </head>
  <body>
    <div class="container mt-5">
      <h1>All users</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <c:forEach var="oneUser" items="${allUsers}">
          <tr>
            <td><c:out value="${oneUser.username}" /></td>
            <td><c:out value="${oneUser.email}" /></td>
            <td>
              <c:if test="${oneUser.id eq currentUser.id}">
              <a href="/users/${oneUser.id}/edit">Edit</a>
              <form:form action="/users/${oneUser.id}" method="DELETE">
                <input type="submit" value="Delete" class="btn btn-link p-0" />
              </form:form>
              </c:if>
            </td>
          </tr>
          </c:forEach>
        </tbody>
      </table>
      <a href="/dashboard">back to dashboard</a>
    </div>
  </body>
</html>
