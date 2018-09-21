$(function(){
	  var loc = location.href;
  	var n1 = loc.length;//地址的总长度
  	var n2 = loc.indexOf("=");//取得=号的位置
  	var telephone = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
// 第一部分
  // 七牛
    $.post('https://51wrq.com/user/upload/token', {}, function(data) {
      console.log(data);
    if (data.code != 200) return;
    // 初始化SDK
      CDT.uptoken = data.results;
    });

    $(".bind").click(function(){
  		location.href="./shop.html?id="+encodeURI(telephone);
  	})
  	$("input[type=radio][name='type']").change(function(){
  		var value=$(this).val();
  		if(value=="TKL"||value=="JHS"||value=="TQG"||value=="TKMP"||value=="TJB"||value=="TTTJ"||value=="ZWTG"){
  			// console.log($('.hide'));
        $(".subwayPancel").attr("style","display:none;");
        $(".panelBox1").attr("style","display:none;");
  			$('.hide').attr("style","display:block;")
  			$('#erweima').attr("style","display:none;")
        $(".erweimaSpecial").attr("style","display:block;")
        $(".add_keyword").attr("style","display:none;");
        $(".add").attr("style","display:none;");
        $(".keyDetail").attr("style","display:block;");
        if(value=="TKL"){
          $(".erweimaSpecial input").val("淘口令")
          $(".keyDetail .keyName").text("淘口令")
        }else if(value=="JHS"){
          $(".erweimaSpecial input").val("聚划算")
           $(".keyDetail .keyName").text("聚划算")
        }else if(value=="TQG"){
          $(".erweimaSpecial input").val("淘抢购")
           $(".keyDetail .keyName").text("淘抢购")
        }else if(value=="TKMP"){
          $(".erweimaSpecial input").val("淘客秒拍")
           $(".keyDetail .keyName").text("淘客秒拍")
        }else if(value=="TJB"){
          $(".erweimaSpecial input").val("淘金币")
           $(".keyDetail .keyName").text("淘金币")
        }else if(value=="TTTJ"){
          $(".erweimaSpecial input").val("天天特价")
           $(".keyDetail .keyName").text("天天特价")
        }else{
          $(".erweimaSpecial input").val("活动推广")
           $(".keyDetail .keyName").text("活动推广")
        }

  		}else if(value=="RWM"){
  			$('#erweima').attr("style","display:block;")
        $(".erweimaSpecial").attr("style","display:block;")
  			$('.hide').attr("style","display:none;")
        $(".subwayPancel").attr("style","display:none;");
        $(".panelBox1").attr("style","display:none;");
        $(".add_keyword").attr("style","display:none;");
        $(".add").attr("style","display:none;");
        $(".erweimaSpecial input").val("二维码")
        $(".keyDetail").attr("style","display:block;");
        $(".keyDetail .keyName").text("二维码")
  		}else if(value=="SUBWAY"){
        $(".subwayPancel").attr("style","display:block;");
        $(".panelBox1").attr("style","display:block;");
        $('.hide').attr("style","display:none;")
        $('#erweima').attr("style","display:none;")
        $(".erweimaSpecial").attr("style","display:none;")
        $(".add_keyword").attr("style","display:block;");
        $(".add").attr("style","display:block;");
        $(".keyDetail").attr("style","display:none;");
  		}else{
        $('.hide').attr("style","display:none;")
        $('#erweima').attr("style","display:none;")
        $(".subwayPancel").attr("style","display:none;");
        $(".panelBox1").attr("style","display:none;");
        $(".erweimaSpecial").attr("style","display:none;")
        $(".add_keyword").attr("style","display:block;");
        $(".add").attr("style","display:block;");
        $(".keyDetail").attr("style","display:none;");
      }
  	})
    // 还差一个二维码上传
  	var data={};
  	$(".next").click(function(){
  		var shop=$("input[type=radio][name='shop']:checked").val();
  		var type=$("input[type=radio][name='type']:checked").val();
  		var enterUrl=$("input[name='enterUrl']").val();
  		// 还差一个二维码上传
  		var publishTime=$("select").val();
  		data.shop=shop;
  		data.type=type;
  		data.publishTime=publishTime;
  		if(enterUrl!=null||enterUrl!=""||enterUrl!=undefined){
  			console.log(enterUrl);
  			data.enterUrl=enterUrl;
  		}
  		console.log(data);
  		$(".second_title").attr("style","display:block;");
  		$(".first_title").attr("style","display:none;");
  		$(".first_step").attr("style","display:none;");
  		$(".second_step").attr("style","display:block;");
  	})
// 第二部分
    
    // 点击添加购物车
    $(document).on('click', '.subwayplusBlockBtn', function() {
    
        var index=$(".subwayPancel").length+2;
        if(index>4){
          return false;
        }
        var html="<div class='subwayBoxs subwayPancel'>"+
                "<div class='panelLine sec subway' >"+
                  "<span class='ls floatLeft itemPic'>直通车图<span class='red bold'>*</span></span>"
                  +"<input type='text' class='inputText floatLeft ls long required' id='txtItemSubwayPicUrl"+index+"' name='itemSubwayPicUrl"+index+"' value='' itemPic=''/>"
                  +"<div class='floatLeft' id='subwayBox"+index+"'>"
                  +"<input type='button' id='btnPickfiles"+index+"' value='选择并上传直通车图' />"
                  +"</div>"
                  +"</div>"
                  +"<a href='javascript:;' class='close iconfont subwayClose'>&#xf00b3;</a>"
                  +"<div class='pic-box subway' id='imgSubwayWrapperInStep"+index+"'>"
                  +"<img id='imgSubway"+index+"' name='itemImg"+index+"' src='' /></div></div>";
        $(this).parent().before(html);
        // initUploaderSubway(index);
      });
    // 选择发货地
    $(".fahuoArea").click(function(){
      var fahuoArea=$(this);
      $(this).next().attr("style","display:block;");
      $(".choose_fahuoArea ul li a").click(function(){
         fahuoArea.text($(this).text());
         $(".choose_fahuoArea").attr("style","display:none;");
       })
      // 如果按照下面的代码写，会把所有叫choose_fahuoArea的div都显示出来
      // $(".choose_fahuoArea").attr("style","display:block;");
      // $(".choose_fahuoArea ul li a").click(function(){
        
      //   $(".fahuoArea").text($(this).text());
      //   $(".choose_fahuoArea").attr("style","display:none;");
      // })
   })

    // 点击存搜索方式
    $(".searchMethod a").click(function(){
      // 先把其它的元素样式清空
      $(this).siblings().attr("class","");
      $(this).attr("class","check");
    })
    $(".chooseMethod a").click(function(){
      $(this).siblings().attr("class","");
      $(this).attr("class","check");
    })


    // 添加搜索关键字方案
    $(".add").click(function(){
      // 先判断前一个是否填完了，主要是三个选择的东西
      if(data.type=="SUBWAY"||data.type=="ORDER"){
        var len=$(".add_keyword").children().length;
        for(var i=len-1;i<len;i++){
            var item=$(".add_keyword").children()[i]; 
            var keyword=$(item).children('input[name="keyword"]').val();
            var a=i*2;
            var b=i*2+1;
            var searchMethod=$($(".check")[a]).text();
            var chooseMethod=$($(".check")[b]).text();
            var fahuoArea=$(item).children(".fahuoArea").text();
            var priceLow=$(item).children("input[name='low']").val();
            var priceHigh=$(item).children("input[name='high']").val();
            if(keyword==""||keyword==null){
                alert("关键字不能为空");
                return;
            }
            if(searchMethod==""||searchMethod==null){
                alert("请选择搜索方式");
                return;
            }
            if(chooseMethod==""||chooseMethod==null){
                alert("请选择排序方式");
                return;
            }
            if(priceLow==""||priceLow==null){
                alert("价格区间不能为空");
                return;
            }
            if(priceHigh==""||priceHigh==null){
                alert("价格区间不能为空");
                return;
            }
        }
        if(len>9){
          alert("最多可添加10个方案");
          return;
        }
        var keyword=$('<div class="keyword"><h4>搜索关键字方案</h4><span>关键词</span><input type="text" name="keyword"><br><div class="searchMethod"><span>搜索方式</span><a href="javascript:;">淘宝搜索</a><a href="javascript:;">天猫搜索</a></div><div class="chooseMethod"><span>筛选条件-排序方式</span><a href="javascript:;">综合</a><a href="javascript:;">销量</a><a href="javascript:;">信用</a><a href="javascript:;">价格低到高</a><a href="javascript:;">价格高到低</a></div><span>筛选条件-发货地</span><a href="javascript:;" class="fahuoArea">全国</a><div class="choose_fahuoArea" style="display: none;"><div class="list-innerwrap"><ul class="area"><li><a class="address" href="javascript:;">全国</a></li></ul></div><div class="list-innerwrap"><ul class="area"><span class="area-title">区域</span><li><a class="address" href="javascript:;">江浙沪</a></li><li><a class="address" href="javascript:;">珠三角</a></li><li><a class="address" href="javascript:;">港澳台</a></li><li><a class="address" href="javascript:;">海外</a></li></ul></div><div class="list-innerwrap"><ul class="city"><span class="area-title">城市</span><li><a class="address" href="javascript:;">北京</a></li><li><a class="address" href="javascript:;">上海</a></li><li><a class="address" href="javascript:;">广州</a></li><li><a class="address" href="javascript:;">深圳</a></li><li><a class="address" href="javascript:;">杭州</a></li><li><a class="address" href="javascript:;">温州</a></li><li><a class="address" href="javascript:;">宁波</a></li><li><a class="address" href="javascript:;">南京</a></li><li><a class="address" href="javascript:;">苏州</a></li><li><a class="address" href="javascript:;">济南</a></li><li><a class="address" href="javascript:;">青岛</a></li><li><a class="address" href="javascript:;">大连</a></li><li><a class="address" href="javascript:;">无锡</a></li><li><a class="address" href="javascript:;">合肥</a></li><li><a class="address" href="javascript:;">长沙</a></li><li><a class="address" href="javascript:;">武汉</a></li><li><a class="address" href="javascript:;">郑州</a></li><li><a class="address" href="javascript:;">石家庄</a></li><li><a class="address" href="javascript:;">成都</a></li><li><a class="address" href="javascript:;">重庆</a></li><li><a class="address" href="javascript:;">西安</a></li><li><a class="address" href="javascript:;">昆明</a></li><li><a class="address" href="javascript:;">南宁</a></li><li><a class="address" href="javascript:;">福州</a></li><li><a class="address" href="javascript:;">厦门</a></li><li><a class="address" href="javascript:;">南昌</a></li><li><a class="address" href="javascript:;">东莞</a></li><li><a class="address" href="javascript:;">沈阳</a></li><li><a class="address" href="javascript:;">长春</a></li><li><a class="address" href="javascript:;">哈尔滨</a></li></ul></div><div class="list-innerwrap"><ul class="province"><span class="area-title">省份</span><li><a class="address" href="javascript:;">安徽</a></li><li><a class="address" href="javascript:;">福建</a></li><li><a class="address" href="javascript:;">甘肃</a></li><li><a class="address" href="javascript:;">广东</a></li><li><a class="address" href="javascript:;">广西</a></li><li><a class="address" href="javascript:;">贵州</a></li><li><a class="address" href="javascript:;">海南</a></li><li><a class="address" href="javascript:;">河北</a></li><li><a class="address" href="javascript:;">河南</a></li><li><a class="address" href="javascript:;">黑龙江</a></li><li><a class="address" href="javascript:;">江西</a></li><li><a class="address" href="javascript:;">吉林</a></li><li><a class="address" href="javascript:;">辽宁</a></li><li><a class="address" href="javascript:;">内蒙古</a></li><li><a class="address" href="javascript:;">宁夏</a></li><li><a class="address" href="javascript:;">青海</a></li><li><a class="address" href="javascript:;">山东</a></li><li><a class="address" href="javascript:;">山西</a></li><li><a class="address" href="javascript:;">陕西</a></li><li><a class="address" href="javascript:;">四川</a></li><li><a class="address" href="javascript:;">西藏</a></li><li><a class="address" href="javascript:;">新疆</a></li><li><a class="address" href="javascript:;">云南</a></li><li><a class="address" href="javascript:;">浙江</a></li><li><a class="address" href="javascript:;">香港</a></li><li><a class="address" href="javascript:;">澳门</a></li><li><a class="address" href="javascript:;">台湾</a></li></ul></div></div><br><span>筛选条件-价格区间</span><input type="number" name="low">元-<input type="number" name="high">元 <br><a href="javascript:;" class="delete">删除</a></div>')
        keyword.appendTo($(".add_keyword"));
        $(".delete").click(function(){
          $(this).parent().remove();
        })
        $(".fahuoArea").click(function(){
          var fahuoArea=$(this);
          $(this).next().attr("style","display:block;");
          $(".choose_fahuoArea ul li a").click(function(){
             fahuoArea.text($(this).text());
             $(".choose_fahuoArea").attr("style","display:none;");
          })
        // 如果按照下面的代码写，会把所有叫choose_fahuoArea的div都显示出来
        // $(".choose_fahuoArea").attr("style","display:block;");
        // $(".choose_fahuoArea ul li a").click(function(){
          
        //   $(".fahuoArea").text($(this).text());
        //   $(".choose_fahuoArea").attr("style","display:none;");
        // })
        })
        $(".searchMethod a").click(function(){
        // 先把其它的元素样式清空
        $(this).siblings().attr("class","");
        $(this).attr("class","check");
        })
        $(".chooseMethod a").click(function(){
          $(this).siblings().attr("class","");
          $(this).attr("class","check");
        })
      }
    })
   // 点击上一步
   $(".second_last").click(function(){
      $(".second_title").attr("style","display:none;");
      $(".first_title").attr("style","display:block;");
      $(".first_step").attr("style","display:block;");
      $(".second_step").attr("style","display:none;");
   })
   // 点击下一步
   $(".second_next").click(function(){
      // 先把数据存到data中
      var productTitle=$('input[name="productTitle"]').val();
      var productUrl=$('input[name="productUrl"]').val();
      // 差一个商品主图
      var productPrice=$('input[name="productPrice"]').val();  
      if(productTitle==""||productTitle==null){
        alert("商品标题不能为空");
        return;
      }
      if(productPrice==""||productPrice==null){
        alert("商品单价不能为空");
        return;
      }
      if(productUrl==""||productUrl==null){
        alert("商品链接不能为空");
        return;
      }
      if(data.type=="SUBWAY"||data.type=="ORDER"){ 
      console.log(data.type) 
        var add_keyword=[];
        var len=$(".add_keyword").children().length;
        for(var i=0;i<len;i++){
            var item=$(".add_keyword").children()[i]; 
            var keyword=$(item).children('input[name="keyword"]').val();
            var a=i*2;
            var b=i*2+1;
            var searchMethod=$($(".check")[a]).text();
            var chooseMethod=$($(".check")[b]).text();
            var fahuoArea=$(item).children(".fahuoArea").text();
            var priceLow=$(item).children("input[name='low']").val();
            var priceHigh=$(item).children("input[name='high']").val();
            if(keyword==""||keyword==null){
                alert("关键字不能为空");
                return;
            }
            if(searchMethod==""||searchMethod==null){
                alert("请选择搜索方式");
                return;
            }
            if(chooseMethod==""||chooseMethod==null){
                alert("请选择排序方式");
                return;
            }
            if(priceLow==""||priceLow==null){
                alert("价格区间不能为空");
                return;
            }
            if(priceHigh==""||priceHigh==null){
                alert("价格区间不能为空");
                return;
            }
          var keywordContent={};
          keywordContent.keyword=keyword;
          keywordContent.searchMethod=searchMethod;
          keywordContent.chooseMethod=chooseMethod;
          keywordContent.fahuoArea=fahuoArea;
          keywordContent.priceLow=priceLow;
          keywordContent.priceHigh=priceHigh;
          add_keyword.push(keywordContent);
        }
      }  
      data.add_keyword=add_keyword;
      data.productTitle=productTitle;
      data.productUrl=productUrl;
      data.productPrice=productPrice;
      
      $(".second_title").attr("style","display:none;");
      $(".third_title").attr("style","display:block;");
      $(".third_step").attr("style","display:block;");
      $(".second_step").attr("style","display:none;");
      // 要根据关键字搜索的数目来决定有几个关键字
        for(var i=0;i<len;i++){
          var keydetail=$('<div class="keydetail"><span>关键词:'+data.add_keyword[i].keyword+'</span><br><span>浏览数量</span><input type="number" name="liulanNumber"><span>收藏商品</span><input type="number" name="collectProduct"> <span>收藏店铺</span><input type="number" name="collectShop"><span>加购物车</span><input type="number" name="addCar"><br><span>浏览好评</span><input type="number" name="liulanGood"><span>领优惠券</span><input type="number" name="getYouhuiquan"><span>旺旺聊天</span><input type="number" name="wangwangChat"><span>其他截图</span><input type="number" name="qitajietu"><span>（开团提醒，开抢提醒）</span></div>')       
          keydetail.appendTo($(".keyMethod"));
          // 要在这里面写input改变事件，因为在外面写，input还不存在
            $("input[type=number]").change(function(){
              var getname=$(this).attr("name");
              var className='.'+$(this).attr("name");
              var elementLength=$('input[name='+getname+']').length;
              var element=$('input[name='+getname+']');
              var number=0;
              for(var j=0;j<elementLength;j++){
                if($(element[j]).val()==""){
                 
                }else{
                  number=number+parseInt($(element[j]).val());
                }
                  
              }
              var price=(parseFloat($(className).children(".one").text())*number).toFixed(2);
              $(className).children(".number").text(number);
              $(className).children(".price").text(price);
              if(getname=="liulanNumber"){
                var liulanNumber=parseInt($(this).val());
                if(liulanNumber<5){
                  alert("搜索浏览数量必须大于5且大于等于其他任务数量")
                  return;
                }
              }else{
                var compare=parseInt($(this).val());
                var liulanNumber=parseInt($($(this).parent().children("input[name='liulanNumber']")).val());
                if(compare>liulanNumber){
                  alert("搜索浏览数量必须大于5且大于等于其他任务数量")
                  return;
                }
              }
              var total=0;
              for(var k=0;k<8;k++){
                var priceDiv=$(".detail .price")[k];
                // Number(15.7784514000.toString().match(/^\d+(?:\.\d{0,2})?/))
                // console.log(Math.floor($(priceDiv).text()));
                total=total+parseFloat($(priceDiv).text());
              }
              // toFixed之后是字符串
              total=total.toFixed(2);
              $(".total").text(total);
              $(".Total").text(total);
            })
        }
   })

   // 第三步
   // 点击上一步
   $(".third_last").click(function(){
      $(".second_title").attr("style","display:block;");
      $(".third_title").attr("style","display:none;");
      $(".third_step").attr("style","display:none;");
      $(".second_step").attr("style","display:block;");
   })
   $(".third_next").click(function(){
      //获取数据，保存在data中 
      // console.log(data);
      var length=$(".keydetail").length;
      for(var i=0;i<length;i++){
        // 如果input没有东西就为空
        for(var k=0;k<8;k++){
          var number= $($($(".keydetail")[i]).children("input")[k]).val();
            if(number==""){
              number=0;
            }else{
              number=parseInt(number);
            }
            if(k==0){
              data.add_keyword[i].liuliangNumber=number;
            }
            if(k==1){
              data.add_keyword[i].collectProduct=number;
            }
            if(k==2){
              data.add_keyword[i].collectShop=number;
            }
            if(k==3){
              data.add_keyword[i].addCar=number;
            }
            if(k==4){
              data.add_keyword[i].liulanGood=number;
            }
            if(k==5){
              data.add_keyword[i].getYouhuiquan=number;
            }
            if(k==6){
              data.add_keyword[i].wangwangChat=number;
            }
            if(k==7){
              data.add_keyword[i].qitajietu=number;
            }
        }
      }
      console.log(data);
      data.huobisanjia=$("input[name='huobisanjia']:checked:checked").val();
      data.specailNeed=$("textarea[name='specailNeed']").val();
      // console.log(data);
      $(".fourth_title").attr("style","display:block;");
      $(".third_title").attr("style","display:none;");
      $(".third_step").attr("style","display:none;");
      $(".fourth_step").attr("style","display:block;");
      // console.log($(".liulanNumber .number").text());
      // 设置加赏区域
      var setNumber=$($(".liulanNumber .number")[1]).text();
      $(".rewardIngot .number").text(setNumber);
      // 设置区域限制
      $("input[name='district_cn']").change(function(){
        if($(this).context.checked){
          $(".district_cn .number").text(setNumber);
          var price=parseInt(setNumber)*0.1;
          $(".district_cn .price").text(price);
        }else{
          console.log($(this).siblings("input"));
          var siblings=$($(this).siblings("input"));
          var length=siblings.length;
          console.log(length);
          console.log(siblings[10]);
          for(var i=0;i<length;i++){
              if($(siblings[i]).context.checked){
                return;
              }
          }
             $(".district_cn .number").text(0);
             $(".district_cn .price").text(0);
        }
      })
      // 设置性别限制
      $("input[name='gender']").change(function(){
        if($(this).val()=="不限"){
          if($(this).context.checked){
              $(".gender .number").text(0);
               $(".gender .price").text(0);
          }else{
            $(".gender .number").text(setNumber);
            var price=parseInt(setNumber)*0.1;
            $(".gender .price").text(price);
          }
        }else{
          $(".gender .number").text(setNumber);
          var price=parseInt(setNumber)*0.1;
            $(".gender .price").text(price);
        }
      })
      // 设置年龄
      $("input[name='ageLimit']").change(function(){
        if($(this).val()=="0"){
          if($(this).context.checked){
              $(".ageLimit .number").text(0);
               $(".ageLimit .price").text(0);
          }else{
            $(".ageLimit .number").text(setNumber);
            var price=parseInt(setNumber)*0.1;
            $(".ageLimit .price").text(price);
          }
        }else{
          $(".ageLimit .number").text(setNumber);
          var price=parseInt(setNumber)*0.1;
            $(".ageLimit .price").text(price);
        }
      })
      //设置购物类目
      $("input[name='commdityType']").change(function(){
        if($(this).val()==""){
          if($(this).context.checked){
              $(".commdityType .number").text(0);
               $(".commdityType .price").text(0);
          }else{
            $(".commdityType .number").text(setNumber);
            var price=parseInt(setNumber)*0.1;
            $(".commdityType .price").text(price);
          }
        }else{
          $(".commdityType .number").text(setNumber);
          var price=parseInt(setNumber)*0.1;
            $(".commdityType .price").text(price);
        }
      })
      //时间优化
      $("input[name='browseTime']").change(function(){
        if($(this).val()=="0"){
          if($(this).context.checked){
              $(".browseTime .number").text(0);
               $(".browseTime .price").text(0);
          }else{
            $(".browseTime .number").text(setNumber);
            var price=parseInt(setNumber)*0.1;
            $(".browseTime .price").text(price);
          }
        }else{
          $(".browseTime .number").text(setNumber);
          var price=parseInt(setNumber)*0.1;
            $(".browseTime .price").text(price);
        }
      })
      // 信用等级
       $("select[name='creditLimit']").change(function(){
          if($(this).val()==""){
              $(".creditLimit .number").text(0);
              $(".creditLimit .price").text(0);
          }else{
              $(".creditLimit .number").text(setNumber);
              var price=parseInt(setNumber)*0.1;
              $(".creditLimit .price").text(price);
          }
       })
       //淘气值限制
       $("select[name='taoqizhiLimit']").change(function(){
          if($(this).val()==""){
              $(".taoqizhiLimit .number").text(0);
              $(".taoqizhiLimit .price").text(0);
          }
          if($(this).val()=="500"){
            $(".taoqizhiLimit .number").text(setNumber);
            $(".taoqizhiLimit .one").text(0.1);
              var price=parseInt(setNumber)*0.1;
              $(".taoqizhiLimit .price").text(price);
          }
          if($(this).val()=="700"){
            $(".taoqizhiLimit .number").text(setNumber);
            $(".taoqizhiLimit .one").text(0.2);
              var price=parseInt(setNumber)*0.2;
              $(".taoqizhiLimit .price").text(price);
          }
          if($(this).val()=="1000"){
            $(".taoqizhiLimit .number").text(setNumber);
            $(".taoqizhiLimit .one").text(0.3);
              var price=parseInt(setNumber)*0.3;
              $(".taoqizhiLimit .price").text(price.toFixed(2));
          }
       })
       //任务加赏
       $("select[name='rewardIngot']").change(function(){
          if($(this).val()=="0"){
              $(".rewardIngot .number").text(0);
              $(".rewardIngot .price").text(0);
          }else{
            $(".rewardIngot .number").text(setNumber);
            $(".rewardIngot .one").text($(this).val());
            var price=(setNumber*parseFloat($(this).val())).toFixed(2);
            $(".rewardIngot .price").text(price);
          }
       })
       // 计算总数
       $("input").change(function(){
            var total=parseFloat($(".total").text());
              for(var k=0;k<8;k++){
                // console.log($(priceDiv).text());
                var priceDiv=$(".zengzhi .detail .price")[k];
                total=parseFloat(total)+parseFloat($(priceDiv).text());
              }
              // toFixed之后是字符串
              total=total.toFixed(2);
              $(".Total").text(total);
       })
       $("select").change(function(){
            var total=parseFloat($(".total").text());
              for(var k=0;k<8;k++){
                var priceDiv=$(".zengzhi .detail .price")[k];
                total=parseFloat(total)+parseFloat($(priceDiv).text());
              }
              // toFixed之后是字符串
              total=total.toFixed(2);
              $(".Total").text(total);
       })
   })

// 第四部分
    var count=0;
     $("input[type=checkbox][name='district_cn']").change(function(){
        var checked=$(this).prop("checked")
        if(checked){
          count++;
        }else{
          count--;
        }
        if(count>30){
          alert("已经选择了选择30项")
          count--;
          $(this).context.checked=false;
        }
     })
     var count_commdityType=0;
     $("input[type=checkbox][name='commdityType']").change(function(){
        if($(this).val()=="不限"){
          var length=$(this).siblings("input[name='commdityType']").length;
          for(var i=0;i<length;i++){
            $($(this).siblings("input[name='commdityType']")[i]).context.checked=false;
          }
          $(this).context.checked=true;
          count_commdityType=0;
        }else{
              // $("input[type=checkbox][value='不限']").context.checked=false;
              $("input[type=checkbox][value='不限']").prop("checked",false);
              var checked=$(this).prop("checked");
              if(checked){
                count_commdityType++;
              }else{
                count_commdityType--;
              }
              if(count_commdityType>4){
                alert("已经选择了选择4项")
                count_commdityType--;
                $(this).context.checked=false;
              }
        }
     })
     // 点击上一步
   $(".fourth_last").click(function(){
      $(".third_title").attr("style","display:block;");
      $(".fourth_title").attr("style","display:none;");
      $(".third_step").attr("style","display:block;");
      $(".fourth_step").attr("style","display:none;");
   })
   // 点击发布
   var task={};
   $(".fourth_next").click(function(){
    // 连续发布天数
    var days=$("#days").val();
    //每天增长比例
    var publishRate=$("input[name='publishRate']").val();
    // 任务类型
    var type=data.type;
    // 这应该是从后台获取过来的店铺的id
    // task.shopId=
    var shopName=data.shop;
    // 商品标题
    var itemTitle=data.productTitle;
    // 良品链接
    var itemUrl=data.productUrl;
    // 进入路径
    var itemSubwayPicUrl
    // 商品主图
    // task.itemPicUrl
    // 商品价格乘以100
    var itemPrice=parseInt(data.productPrice)*100;
    // 特殊需求备注
    var taskRequest=$.trim(data.specailNeed)
    // 任务加赏
    var extraRewardIngot=$("#rewardIngot").val();
    // 选择性别
    task.genderLimit=$("input[name='gender']:checked").val();
    // 区域限制
    // task.areaLimit=
    // 信用等级
    task.creditLimit=$("#creditLimit").val();
    //年龄阶段
    task.ageLimit=$("input[name='ageLimit']:checked").val();
    // 购物类目，用,号分开
    // task.commdityType: CLOTHING_SHOES_PACKAGE
    // 时间优化
    task.browseTime=$("input[name='browseTime']:checked").val();
    // 发布开始时间
    task.taskStartTime=$("#taskStartTime").val();
    //发布结束时间
    task.taskEndTime=$("#taskEndTime").val();
    //货比三家
    task.sdNeed=data.huobisanjia;
    // 淘口令的进入路径
    // task.tgPath: 
    // 备注图片
    // task.tgImg: ,
    // 淘气值限制
    task.taoqizhiLimit=$("#taoqizhiLimit").val();

    task.platform= 'FLOW';
    searchPlans=[];
    for(var i=0;i<data.add_keyword.length;i++){
      //搜索方式
      if(data.add_keyword[i].searchMethod=="淘宝搜索"){
        searchPlans[i][inTmall]=false;
      }else{
        searchPlans[i][inTmall]=true;
      }
      searchPlans[i][itemSearchMinPrice]=data.add_keyword[i].priceHigh;
      searchPlans[i][itemSearchMaxPrice]=data.add_keyword[i].priceLow;
      searchPlans[i][itemSearchLocation]=data.add_keyword[i].fahuoArea;
      // task.searchPlans[0].orderway=data.add_keyword[i].chooseMethod;
      // task.searchPlans[0].word=data.add_keyword[i].keyword;
      // task.searchPlans[0].flowNum=data.add_keyword[i].liuliangNumber;
      // task.searchPlans[0].collectProduct=data.add_keyword[i].collectProduct;
      // task.searchPlans[0].shoppingCart=data.add_keyword[i].addCar;
      // task.searchPlans[0].collectShop=data.add_keyword[i].collectShop;
      // task.searchPlans[0].couponNum=data.add_keyword[i].getYouhuiquan;
      // task.searchPlans[0].commectNum=data.add_keyword[i].liulanGood;
      // task.searchPlans[0].chatNum=data.add_keyword[i].wangwangChat;
      // task.searchPlans[0].otherNum=data.add_keyword[i].qitajietu;
    }
   
    
    // 延时发布
    task.delaySpan=data.publishTime;

    var p={
      // var mill = new Date().getTime();
        //     // 毫秒数
        // __ts:,
        // 获取
        // http://51wrq.com/user/upload/token
        // authenticityToken:"",
        // task:task
    };
    console.log(task);
   })
})