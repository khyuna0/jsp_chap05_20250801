/**
 * memberjoin js 외부파일로 빼서 만들기 권장
 */
	
function joinCheck() {
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
	// 이메일
	if(document.joinForm.memail.value.length == 0 ) { 
		alert ("이메일은 필수 입력사항입니다.");
		document.joinForm.memail.focus(); 
		return;
	}		
	
	
	document.joinForm.submit(); 		
			
			
}
