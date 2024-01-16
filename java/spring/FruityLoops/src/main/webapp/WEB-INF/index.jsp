<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="/css/main.css"/>
        <title>Fruity Loops</title>
    </head>
    <body>
        <h1>Fruity Loops</h1>
        <p>
            There are several fruits for sale, but you cannot afford any of them.
            Better luck next time.
        </p>
        <table cellspacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach var="fruit" items="${fruits}">
                <tr>
                    <td class="item-name"><c:out value="${fruit.name}" /></td>
                    <td class="price">
                        <fmt:formatNumber type="currency" value="${fruit.price}" />
                    </td>
                </tr>
                </c:forEach>
            </tbody>
        </table>
    </body>
</html>
