$(function(){
	$(".title span").click(function(){
		$($(this).siblings("span")).attr("class","");
		$(this).attr("class","active");
	})
	$("#queryBtn").click(function(){
		var vo={};
		var shopId=$("#shopName").val();
		var status=$("#status").val();
		var itemTitle=$("itemTitle").val();
		var publishTimeStart=$("input[name='publishTimeStart']").val();
		var publishTimeEnd=$("input[name='publishTimeEnd']").val();
		var orderId="";
		var taskId=$("#taskId").val();
		var buyerTaskId=$("#buyerTaskId").val();
		var buyerNick=$("#buyerNick").val();
		//页数
		var pageNo=1;
		//一页显示多少条
		var pageSize=10;
		var mill = new Date().getTime();
		// console.log(mill);
		var type="PROCESS";
  		

		var authenticityToken="cee95b042703aeea9c63120866d8d7633588ccd9";
		$.ajax({
			url:"http://localhost:8096/apis/user/upload/token",
			type:'post',
			data:{
				authenticityToken:authenticityToken,
				__ts: new Date().getTime()
			},
			dataType: 'json',
			success:function(res){
				console.log(res);
			}
		})



  		// $.jsonp({
    //     	url: "http://51wrq.com/seller/task/list",
    //     	data: {
	   //       	'__ts':mill,
				// 'vo.shopId':shopId,
				// 'vo.status': status,
				// 'vo.itemTitle':itemTitle,
				// 'vo.publishTimeStart': publishTimeStart,
				// 'vo.publishTimeEnd': publishTimeEnd,
				// 'vo.orderId': $.trim($('#orderId').val()),
				// 'vo.taskId': $.trim($('#taskId').val()),
				// 'vo.buyerTaskId': $.trim($('#buyerTaskId').val()),
				// 'vo.buyerNick': $.trim($('#buyerNick').val()),//买家账号
				// 'vo.pageNo': pageNo,
				// 'vo.pageSize':pageSize,
				// 'type':type },
	   //      callback:"callbackAction",
	   //      success: function (json) {
	   //         console.log(json);           
	   //      },

    // 	});

	})
})