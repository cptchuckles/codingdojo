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
        <h1><c:out value="${dojo.name}" /></h1>
        <p>Enrolled Ninjas:</p>
        <table class="table">
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach var="oneNinja" items="${dojo.ninjas}">
                <tr>
                    <td>
                        <c:out value="${oneNinja.firstName}" />
                        <c:out value="${oneNinja.lastName}" />
                    </td>
                    <td><c:out value="${oneNinja.age}" /></td>
                    <td>
                        <form:form action="/ninjas/${oneNinja.id}" method="DELETE">
                            <input type="submit" value="Dismiss" class="btn btn-link p-0" />
                        </form:form>
                    </td>
                </tr>
                </c:forEach>
            </tbody>
        </table>
        <a href="/dojos">Return</a>
    </div>
  </body>
</html>
