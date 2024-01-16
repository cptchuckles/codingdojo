<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="/css/main.css"/>
        <title>Omikuji Results</title>
    </head>
    <body>
        <h1>Here's your Omikuji!</h1>
        <p class="results">
            In <c:out value="${number}" /> years,
            you will live in <c:out value="${city}" />
            with <c:out value="${organism}" />
            as your roommate,
            <c:out value="${endeavor}" /> for a living.
            The next time you see a <c:out value="${organism}" />,
            you will have good luck.
            <c:if test="${compliments != null}">
            Also, <c:out value="${compliments}" />
            </c:if>
        </p>
        <a href="/omikuji/">Go back</a>
    </body>
</html>
