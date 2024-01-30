<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
        <title>Login Page</title>
    </head>
    <body>
        <div class="container mt-5">
            <h1>Login</h1>
            <form class="form" method="POST" action="/login">
                <p>
                    <label class="form-label" for="username">Username</label>
                    <input class="form-control" type="text" id="username" name="username"/>
                </p>
                <p>
                    <label class="form-label" for="password">Password</label>
                    <input class="form-control" type="password" id="password" name="password"/>
                </p>
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                <input type="submit" class="btn btn-primary" value="Login!"/>
            </form>
         </div>
    </body>
</html>
