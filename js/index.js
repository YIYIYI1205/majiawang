$(function(){
	$(".login").click(function(){
		var telephone=$("input[name='telephone']").val();
		var password=$("input[name='password']").val();
		if(telephone==null||telephone==""){
			alert("手机号不能为空！");
			return;
		}
		if(password==null||password==""){
			alert("密码不能为空！");
			return;
		}
		// 发送请求
		 $.post("",
		 {
		 	telephone:telephone,
		 	password:password
		 },function(result){
  			
  			if(){
  				// 成功后跳转personalCenter.html
  				location.href="personalCenter.html?id"+encodeURI(telephone);
  			}else{
  				//账户或者密码错误
  			}
  			
  		});
		
	})
	$(".register").click(function(){
		location.href="register.html";
	})
	$(".forget").click(function(){
		location.href="forget.html";
	})
})