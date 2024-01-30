<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
        <title>Login</title>
    </head>
    <body>
        <div class="container mt-5">
            <h1>All Users</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th width="10%">ID</th>
                        <th width="20%">Username</th>
                        <th width="30%">Email</th>
                        <th width="40%">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach var="oneUser" items="${allUsers}">
                    <tr>
                        <td><c:out value="${oneUser.id}" /></td>
                        <td><c:out value="${oneUser.username}" /></td>
                        <td><c:out value="${oneUser.email}" /></td>
                        <td class="d-flex flex-row gap-2 align-items-center">
                            <c:choose>
                            <c:when test="${currentUserId eq oneUser.id}">
                                <a href="/users/${oneUser.id}/edit" class="btn btn-link p-0 m-0">Edit</a> |
                                <form:form class="m-0 p-0" action="/users/${oneUser.id}" method="DELETE">
                                    <input type="submit" value="Delete" class="btn btn-link m-0 p-0" />
                                </form:form>
                            </c:when>
                            <c:otherwise>
                                <a href="/users/${oneUser.id}">View</a>
                            </c:otherwise>
                            </c:choose>
                        </td>
                    </tr>
                    </c:forEach>
                </tbody>
            </table>
        </div>
    </body>
</html>
