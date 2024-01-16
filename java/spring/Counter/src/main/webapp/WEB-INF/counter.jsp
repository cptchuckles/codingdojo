<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="/css/main.css"/>
        <title>Counter</title>
    </head>
    <body>
        <p>You have visited <a href="/" id="home-link"></a> <c:out value="${counter}" /> times.</p>
        <p><a href="/">Test another visit?</a> or <a href="/reset">reset the counter</a></p>
        <p><a href="/secretincrement">Get more visits</a></p>
        <script>
            document.getElementById("home-link").textContent = window.location.origin;
        </script>
    </body>
</html>
