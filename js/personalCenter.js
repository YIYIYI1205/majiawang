$(function(){
	var loc = location.href;
  	var n1 = loc.length;//地址的总长度
  	var n2 = loc.indexOf("=");//取得=号的位置
  	var telephone = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
  	// 请求数据
  	// $.get("",
		 // {
		 // 	telephone:telephone,
		 // },function(result){
  			
  	// 		//获取的数据添加到sapn #get中
  			
  	// 	});
  	// $(".telephone .get").text("123");
  	// $(".weixin .get").text("123");
  	// $(".money .get").text("123");
  	// $(".invite .get").text("123");
	$("#telephone").click(function(){
		location.href='./changeTelephone.html?id='+encodeURI(telephone);
	})
	$("#weixin").click(function(){
		location.href='./changeWeixin.html?id='+encodeURI(telephone);
	})
	$("#chongzhi").click(function(){
		location.href='./zhangdanchongzhi.html?id='+encodeURI(telephone);
	})
	$("#publishFlow").click(function(){
		location.href='./publishFlow.html?id='+encodeURI(telephone);
	})
	$("#publish").click(function(){
		location.href='./publish.html?id='+encodeURI(telephone);
	})
	$("#invite").click(function(){
		location.href='./invite.html?id='+encodeURI(telephone);
	})
})