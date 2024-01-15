<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>JSP</title>
    </head>
    <body>
        <h1>Customer Name: <c:out value="${customerName}" /></h1>
        <p>Item name: <c:out value="${itemName}" /></p>
        <p>Price: $<c:out value="${itemPrice}" /></p>
        <p>Description: <c:out value="${itemDescription}" /></p>
        <p>Vendor: <c:out value="${itemVendor}" /></p>
    </body>
</html>
