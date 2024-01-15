<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Dojos</title>
    </head>
    <body>
        <h1>Dojos:</h1>
        <ul>
            <c:forEach var="dojo" items="${dojos}">
            <li><c:out value="${dojo}" /></li>
            </c:forEach>
        </ul>
    </body>
</html>
