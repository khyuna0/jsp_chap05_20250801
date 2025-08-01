<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리자 로그인</title>
<script type="text/javascript">
	function checkBlank() {
		if (document.adminForm.id.value == "" || document.adminForm.pw.value == "" ) {
			alert ("아이디와 비밀번호는 필수 입력사항입니다.");
			return false;
		} }
</script>
</head>
<body>
	<h2>로그인</h2>
	<hr>
		<form action="adminLoginOk.jsp" name = "adminForm" onsubmit = "return checkBlank()">
		
			아이디 : <input type="text" name = "id"> <br><br>
			비밀번호 : <input type="password" name = "pw"> <br><br>
		
			<input type="submit" value = "입력">
			<input type="reset" value = "다시 입력">
		
		</form>
	
</body>
</html>