<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>점수 입력하기</title>
<script type="text/javascript">
	function checkBlank() {
		if (document.scoreForm.kor.value == "" || document.scoreForm.math.value == "" || document.scoreForm.eng.value == "" ) {
			alert ("점수는 필수 입력사항입니다.");
			return false;
		}
		
	}
</script>
</head>
<body>
<h2>점수 입력하기</h2>
<hr>
	<form action="scoreOk.jsp" name = "scoreForm" onsubmit="return checkBlank()">
	국어 점수 : <input type="text" name = "kor"><br><br>
	수학 점수 : <input type="text" name = "math"><br><br>
	영어 점수 : <input type="text" name = "eng"><br><br>
	<input type="submit" value = "입력" >
	<input type="reset" value = "다시 입력">
	</form>
	
	
</body>
</html>