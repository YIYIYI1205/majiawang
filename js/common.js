$(function(){
	var loc = location.href;
  	var n1 = loc.length;//地址的总长度
  	var n2 = loc.indexOf("=");//取得=号的位置
  	var telephone = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容	
	$("ul li").click(function(){
		var content=$(this).text();
		switch(content){
			case "个人中心":
  				location.href="personalCenter.html?id="+encodeURI(telephone);
  			break;
			case "绑定店铺":
			  location.href="shop.html?id="+encodeURI(telephone);
			  break;
			case "我的工单":
			  location.href="gongdan.html?id="+encodeURI(telephone);
			  break;
			  case "发布流量任务":
			  location.href="publishFlow.html?id="+encodeURI(telephone);
			  break;
			  case "我的流量任务":
			  location.href="myFlowTask.html?id="+encodeURI(telephone);
			  break;
			  case "截图监控":
			  location.href="jietu.html?id="+encodeURI(telephone);
			  break;
			  case "发布补单":
			  location.href="publish.html?id="+encodeURI(telephone);
			  break;
			  case "我的任务":
			  location.href="myTask.html?id="+encodeURI(telephone);
			  break;
			  case "账单管理":
			  location.href="zhangdan.html?id="+encodeURI(telephone);
			  break;
			  case "历史账单管理":
			  location.href="historyzhangdan.html?id="+encodeURI(telephone);
			  break;
			  case "订单审核":
			  location.href="dingdanshenhe.html?id="+encodeURI(telephone);
			  break;
			  case "我的快递":
			  location.href="mykuaidi.html?id="+encodeURI(telephone);
			  break;
			  case "发布好评":
			  location.href="publishgood.html?id="+encodeURI(telephone);
			  break;
			  case "评价审核":
			  location.href="pingjiashenhe.html?id="+encodeURI(telephone);
			  break;
			  case "催下单/收货":
			  location.href="cuixiadan.html?id="+encodeURI(telephone);
			  break;
			  case "账单充值":
			  location.href="zhangdanchongzhi.html?id="+encodeURI(telephone);
			  break;
			  case "提现管理":
			  location.href="tixian.html?id="+encodeURI(telephone);
			  break;
			  case "会员续费":
			  location.href="huiyuanxufei.html?id="+encodeURI(telephone);
			  break;
			  case "资金记录":
			  location.href="zijinjilu.html?id="+encodeURI(telephone);
			  break;  
			  case "邀请好友":
			  location.href="invite.html?id="+encodeURI(telephone);
			  break;  
		}
	})
})