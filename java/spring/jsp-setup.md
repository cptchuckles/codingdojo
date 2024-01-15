## Dependencies

Add the following entries to `./pom.xml` within the `<dependencies>` node:
```xml
    <dependency>
        <groupId>org.apache.tomcat.embed</groupId>
        <artifactId>tomcat-embed-jasper</artifactId>
    </dependency>
    <dependency>
        <groupId>jakarta.servlet.jsp.jstl</groupId>
        <artifactId>jakarta.servlet.jsp.jstl-api</artifactId>
    </dependency>
    <dependency>
        <groupId>org.glassfish.web</groupId>
        <artifactId>jakarta.servlet.jsp.jstl</artifactId>
    </dependency>
```
Optionally, add these dependencies when using Bootstrap:
```xml
    <dependency>
        <groupId>org.webjars</groupId>
        <artifactId>webjars-locator</artifactId>
        <version>0.46</version>
    </dependency>
    <dependency>
        <groupId>org.webjars</groupId>
        <artifactId>bootstrap</artifactId>
        <version>5.2.3</version>
    </dependency>
```


## Application Properties

Add the following line to `./src/main/resources/application.properties`:
```
spring.mvc.view.prefix=/WEB-INF/
```


## JSP Template file

Use the following JSP template to scaffold new pages in `./src/main/webapp/WEB-INF/`:
```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <!-- for Bootstrap CSS -->
        <!-- <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> -->
        <!-- For any Bootstrap that uses JS -->
        <!-- <script src="/webjars/bootstrap/js/bootstrap.min.js"></script> -->
        <!-- YOUR own local CSS -->
        <link rel="stylesheet" href="/css/main.css"/>
        <title>...</title>
    </head>
    <body>

    </body>
</html>
```
