<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="/css/main.css"/>
        <title>Omikuji Form</title>
    </head>
    <body>
        <h1>Send an Omikuji!</h1>
        <form action="/omikuji/" method="POST">
            <label>Pick any number form 5 to 25:
                <input type="number" name="number" id="number" min="5" max="25" required />
            </label>
            <label>Enter the name of a city:
                <input type="text" name="city" id="city" required />
            </label>
            <label>Enter professional endeavor or hobby:
                <input type="text" name="endeavor" id="endeavor" required />
            </label>
            <label>Enter any type of living thing:
                <input type="text" name="organism" id="organism" required />
            </label>
            <label>Say something nice to someone:
                <textarea name="compliments" id="compliments" rows="10"></textarea>
            </label>
            <p><em>Send and show a friend</em></p>
            <button>Send</button>
        </form>
    </body>
</html>
