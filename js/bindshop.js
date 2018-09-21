$(function(){
	var loc = location.href;
  	var n1 = loc.length;//地址的总长度
  	var n2 = loc.indexOf("=");//取得=号的位置
  	var telephone = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
	var valo = $("#area").attr("areaid");
	$('#area').scroller('destroy').scroller({ preset: 'area', theme: 'android-ics light', display: 'bottom',valueo:valo });
	$(".submit").click(function(){
		var shop_url=$("input[name='shop_url']").val();
		var shop_name=$("input[name='shop_name']").val();
		var zhanggui_name=$("input[name='zhanggui_name']").val();
		var fajianren_name=$("input[name='fajianren_name']").val();
		var fajianren_number=$("input[name='fajianren_number']").val();
		var area=$("#area").val();
		var fajianren_jiedao=$("input[name='fajianren_jiedao']").val();			
		if(shop_url==null||shop_url==""){
			alert("店铺首页网址不能为空！");
			return;
		}
		if(shop_name==null||shop_name==""){
			alert("店铺名称不能为空！");
			return;
		}
		if(zhanggui_name==null||zhanggui_name==""){
			alert("掌柜名称不能为空！");
			return;
		}
		if(fajianren_name==null||fajianren_name==""){
			alert("发件人姓名不能为空！");
			return;
		}
		if(fajianren_number==null||fajianren_number==""){
			alert("发件人电话不能为空！");
			return;
		}
		if(area==null||area==""){
			alert("发件人地址不能为空！");
			return;
		}
		if(fajianren_jiedao==null||fajianren_jiedao==""){
			alert("发件人街道不能为空！");
			return;
		}
		// 发送请求把上面数据传给后台
		$.post("",
		 {
		 	shop_url:shop_url,
		 	shop_name:shop_name,
		 	zhanggui_name:zhanggui_name,
		 	fajianren_name:fajianren_name,
		 	fajianren_number:fajianren_number,
		 	area:area,
		 	fajianren_jiedao:fajianren_jiedao,
		 	telephone:telephone
		 },function(result){
  			
  			if(){
  				// 成功后跳转personalCenter.html
  				location.href="shop.html?id"+encodeURI(telephone);
  			}else{
  				//账户或者密码错误
  			}
  			
  		});
	})
	
})