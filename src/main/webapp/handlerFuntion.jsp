<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>핸들러 함수</title>
<script type="text/javascript">
	function checkFun() {
		if(document.gradeForm.book.value == "") { // 빈칸 검사
			alert("추천 도서 이름은 필수 입력 사항입니다!")
		} else {
			alert("추천 도서 : " + document.gradeForm.book.value + "\n" + "평점 : " + document.gradeForm.grade.value );
		}
	}
</script>
</head>
<body>
	<h2>추천 도서 평점</h2>
	<hr>
	<form action="#" name = "gradeForm"> 
	
		추천 도서 : <input type="text" name = "book" size = "30"><br><br>
		평점 :
		<hr>
		<input type="radio" name="grade" value="★★★★★" checked="checked">★★★★★<br>
		<input type="radio" name="grade" value="★★★★☆">★★★★☆<br>
		<input type="radio" name="grade" value="★★★☆☆">★★★☆☆<br>
		<input type="radio" name="grade" value="★★☆☆☆">★★☆☆☆<br>
		<input type="radio" name="grade" value="★☆☆☆☆">★☆☆☆☆<br>
		<hr>
		
		<!-- onclick : 버튼을 누르면 checkFun 함수가 실행됨 -->
		<input type="submit" value ="추천하기" onclick="checkFun()"> 
		<input type="reset" value = "다시작성">
		   
	</form>
</body>
</html>