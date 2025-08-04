/**
 * memberjoin js 외부파일로 빼서 만들기 권장
 */
	
function joinCheck() {
	
	var f = document.joinForm; // 변수 선언하기
	
	// 정규표현식으로 특정 글자만 입력받게 하기 (구글링 권장...)
	// 정규표현식 안의 글자가 들어오면 T
	var regex1 = /^[가-힣]+$/; // 한글만
	var regex2 = /^[A-Za-z0-9!-/:-@[-`{-~]+$/; // 영어, 특수기호, 숫자만 (대소문자 모두 허용)
//	var regex3 = /^[가-힣ㄱ-ㅎㅏ-ㅣ]+$/;
	var regex4 = /^[0-9]+$/;
	var regex5 = /^[a-zA-Z]+$/;	
		
	var cname = document.joinForm.mname.value;
	var cemail = document.joinForm.memail.value;
	var cage =  document.joinForm.mage.value;
	
	// ~value.length == 0 대신 value.length == "" 써도 됨
	
	// id
	if(document.joinForm.mid.value.length == 0 ) { // 아이디가 빈칸으로 입력된 경우
		alert ("아이디는 필수 입력사항입니다.");
		document.joinForm.mid.focus(); // 해당 입력 폼으로 커서 이동
		return;
	}
	// 아이디는 4자 이상 15자 이하만 허용
	if(document.joinForm.mid.value.length < 3 || document.joinForm.mid.value.length > 15 ) { 
		alert ("아이디는 4자 이상 15자 이하 입력하세요.");
		document.joinForm.mid.focus(); 
		return;
	}
	// 비밀번호
	if(document.joinForm.mpw.value.length == 0 ) { 
		alert ("비밀번호는 필수 입력사항입니다.");
		document.joinForm.mpw.focus(); 
		return;
	}
	// 비밀번호는 4자 이상 15자 이하만 허용
	if(document.joinForm.mpw.value.length < 3 || document.joinForm.mpw.value.length > 15 ) { 
		alert ("비밀번호는 4자 이상 15자 이하 입력하세요.");
		document.joinForm.mpw.focus(); 
		return;
	}
	// 비밀번호 확인
	if(document.joinForm.mpwCheck.value.length == 0 ) { 
		alert ("비밀번호는 필수 입력사항입니다.");
		document.joinForm.mpwCheck.focus(); 
		return;
	}
	// 비밀번호 일치 여부 확인
	if(document.joinForm.mpwCheck.value != document.joinForm.mpw.value) { 
		alert ("비밀번호가 일치하지 않습니다.");
		document.joinForm.mpwCheck.focus(); 
		return;
	}
	// 이름
	if(document.joinForm.mname.value.length == 0 ) { 
		alert ("이름은 필수 입력사항입니다.");
		document.joinForm.mname.focus(); 
		return;
	}
	// 이름 입력에 정규표현식 적용
	if(!regex1.test(cname)) { // 한글이 아니면 T
		alert ("이름은 한글만 입력하세요.");
		document.joinForm.mname.focus(); 
		return;
	}
	
	// 이메일
	if(document.joinForm.memail.value.length == 0 ) { 
		alert ("이메일은 필수 입력사항입니다.");
		document.joinForm.memail.focus(); 
		return;
	}
	// 이메일 입력에 정규표현식 적용 - 영어와 특수문자만
		if(!regex2.test(cemail)) { // 영어 대소문자와 특수문자, 숫자만 허용됨
		// 영어 대소문자와 특수문자, 숫자 외에 다른 값이 입력된 경우
		alert ("이메일은 영어와 숫자, 허용된 특수문자만 입력 가능합니다.");
		document.joinForm.memail.focus(); 
		return;
	}		
	// 이메일 입력에 정규표현식 적용 - 한글만 쳐내기
//			if(regex3.test(cemail)) { 
//			alert ("이메일은 한글은 불가능합니다.");
//			document.joinForm.memail.focus(); 
//			return;
//		}
		
	//나이 
	if(document.joinForm.mage.value.length == 0 ) { 
			alert ("나이는 필수 입력사항입니다.");
			document.joinForm.mage.focus(); 
			return;
		}
	
	// 나이 정규표현식으로 처리
	if(!regex4.test(cage)) { // 한글이 아니면 T
		alert ("나이는 숫자만 입력하세요.");
		document.joinForm.mage.focus(); 
		return;
	}
	
	
	document.joinForm.submit(); 		
			
			
}
