<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
        <title>Registration Page</title>
    </head>
    <body>
        <div class="container mt-5">
            <h1>Register!</h1>

            <form:form class="form" method="POST" action="/register" modelAttribute="user">
                <p>
                    <form:label class="form-label" path="username">Username:</form:label>
                    <form:errors class="form-text text-danger" path="username"/>
                    <form:input class="form-control" path="username"/>
                </p>
                <p>
                    <form:label path="password">Password:</form:label>
                    <form:errors class="form-text text-danger" path="password"/>
                    <form:password class="form-control" path="password"/>
                </p>
                <p>
                    <form:label class="form-label" path="passwordConfirmation">Password Confirmation:</form:label>
                    <form:errors class="form-text text-danger" path="passwordConfirmation"/>
                    <form:password class="form-control" path="passwordConfirmation"/>
                </p>
                <input type="submit" class="btn btn-success" value="Register!"/>
            </form:form>
        </div>
    </body>
</html>
