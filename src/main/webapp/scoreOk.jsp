<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	

</head>
<body>
	<%
	int k = Integer.parseInt(request.getParameter("kor")); // 국
	int m = Integer.parseInt(request.getParameter("math")); // 수 
	int e = Integer.parseInt(request.getParameter("eng"));	 // 영 
	
	double avr = (k+m+e)/3; 
	%>
	<h2>평균점수는 <%=avr %></h2>
	
</body>
</html>