<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.Date" %>
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
            <h1>henlo <c:out value="${currentUser.username}" /></h1>
            <p><a href="/logout">get outta here</a></p>
            <p><a href="/users">see all users</a></p>
        </div>
    </body>
</html>
