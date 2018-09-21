$(function(){
	var loc = location.href;
  	var n1 = loc.length;//地址的总长度
  	var n2 = loc.indexOf("=");//取得=号的位置
  	var telephone = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
	$(".next").click(function(){
		var weixin=$("input[name='weixin']").val();
		if(weixin==null||weixin==""){
			alert("微信号不能为空！");
			return;
		}
		// 发送请求
		$.post("",
		 {
		 	weixin:weixin
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