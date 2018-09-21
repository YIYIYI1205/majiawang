$(function(){
	$(".next").click(function(){
		var password=$("input[name='password']").val();
		var agian=$("input[name='againPassword']").val();
		if(password==null||password==""){
			alert("新密码不能为空！");
			return;
		}
		console.log(agian);
		if(agian==null||agian==""){
			alert("再输一次不能为空！");
			return;
		}
		if(agian!=password){
			alert("密码不一致！");
			return;
		}
		var loc = location.href;
  		var n1 = loc.length;//地址的总长度
  		var n2 = loc.indexOf("=");//取得=号的位置
  		var telephone = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
		// 发送请求
		$.post("",
		 {
		 	telephone:telephone,
		 	password:password
		 },function(result){
  			
  			if(){
  				// 成功后跳转personalCenter.html
  				location.href="personalCenter.html?id="+encodeURI(telephone);
  			}else{
  				//
  			}
  			
  		});
	})
})