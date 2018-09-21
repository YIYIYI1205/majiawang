a$(function(){
	$(".register").click(function(){
		var telephone=$("input[name='telephone']").val();
		var verificationCode=$("input[name='verificationCode']").val();
		var weixin=$("input[name='weixin']").val();
		var password=$("input[name='password']").val();
		var InviteCode=$("input[name='InviteCode']").val();
		if(telephone==null||telephone==""){
			alert("手机号不能为空！");
			return;
		}
		if(verificationCode==null||verificationCode==""){
			alert("验证码不能为空！");
			return;
		}
		if(weixin==null||weixin==""){
			alert("微信不能为空！");
			return;
		}
		if(password==null||password==""){
			alert("密码不能为空！");
			return;
		}
		if(InviteCode==null||InviteCode==""){
			alert("邀请码不能为空！");
			return;
		}
		// 要验证一下邀请码是否正确
		// 要验证一下验证码是否正确（如何验证验证码正确？）
		// 发送请求
		 $.post("",
		 {
		 	telephone:telephone,
		 	weixin:weixin,
		 	password:password,
		 	InviteCode:InviteCode
		 },function(result){
  			
  			if(){
  				// 成功后跳转personalCenter.html
  				location.href="personalCenter.html?id"+encodeURI(telephone);
  			}else{
  				//
  			}
  			
  		});
	})
})