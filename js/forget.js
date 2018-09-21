$(function(){
	$(".next").click(function(){
		var telephone=$("input[name='telephone']").val();
		var verificationCode=$("input[name='verificationCode']").val();
		if(telephone==null||telephone==""){
			alert("手机号不能为空！");
			return;
		}
		if(verificationCode==null||verificationCode==""){
			alert("验证码不能为空！");
			return;
		}
	
		// 要验证一下验证码是否正确（如何验证验证码正确？）
		// 成功后跳转setPassword.html
		location.href="setPassword.html?tel="+encodeURI(telephone);
	})
})