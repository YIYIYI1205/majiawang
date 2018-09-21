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
  			
  	// 		//获取的数据循环添加中
  			
  	// 	});
  	// 循环数组动态添加

  	var first="1123123";
  	var second="1123123";
  	var third="1123123";
  	var fourth="1123123";
  	var fifth="1123123";
  	var sixth="1123123";
  	  	var item=$('<div class="shop-content"><div class="first">'+first+'</div><div class="second">'+second+'</div><div class="third">'+third+'</div><div class="fourth">'+fourth+'</div><div class="fifth">'+fifth+'</div><div class="sixth">'+sixth+'</div><a href="#">修改店铺信息</a></div>')
  	  	item.appendTo($(".shop_detail"));

	$(".bindShop_a").click(function(){
		location.href="bindshop.html?id="+encodeURI(telephone);
  });
  
})