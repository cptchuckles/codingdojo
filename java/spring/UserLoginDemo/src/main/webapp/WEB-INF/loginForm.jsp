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
        <title>Login</title>
    </head>
    <body>
        <div class="container d-flex flex-row gap-3 mx-auto mt-5">
            <div class="card col p-3">
                <h1>Register</h1>
                <form:form class="form" action="/register" method="POST" modelAttribute="userRegister">
                    <p>
                        <form:label class="form-label" path="username">Username</form:label>
                        <form:errors class="form-text text-danger" path="username" />
                        <form:input class="form-control" path="username" />
                    </p>
                    <p>
                        <form:label class="form-label" path="email">Email</form:label>
                        <form:errors class="form-text text-danger" path="email" />
                        <form:input type="email" class="form-control" path="email" />
                    </p>
                    <p>
                        <form:label class="form-label" path="password">Password</form:label>
                        <form:errors class="form-text text-danger" path="password" />
                        <form:input type="password" class="form-control" path="password" />
                    </p>
                    <p>
                        <form:label class="form-label" path="confirmPassword">Confirm Password</form:label>
                        <form:errors class="form-text text-danger" path="confirmPassword" />
                        <form:input type="password" class="form-control" path="confirmPassword" />
                    </p>
                    <input type="submit" value="Create Account" class="btn btn-success" />
                </form:form>
            </div>
            <div class="card col p-3">
                <h1>Login</h1>
                <form:form class="form" action="/login" method="POST" modelAttribute="userLogin">
                    <p>
                        <form:label class="form-label" path="email">Email</form:label>
                        <form:errors class="form-text text-danger" path="email" />
                        <form:input class="form-control" path="email" />
                    </p>
                    <p>
                        <form:label class="form-label" path="password">Password</form:label>
                        <form:errors class="form-text text-danger" path="password" />
                        <form:input type="password" class="form-control" path="password" />
                    </p>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </form:form>
            </div>
        </div>
    </body>
</html>
