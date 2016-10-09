var yuliu;
var page="{'pageNum':1,'totalPage':1,'pageSize':10,'firstNum':1,'sumNum':10}";
var task="{'taxindustry':{'industryname':'房地产业'},'user':{'username':'lpf'}}";
var Test={
		
	/**
	 * ajax获取全部主题测试
	 */	
	ajaxTestFunc:function(){
		$.ajax({
			url:"http://192.168.1.38:8090/nszcfxv1_sj/servlet/report_NSRQD",
//			data:{"page":page,"TaskAllid":"1"},
			data:{"TaskAllid":"1"},
			dataType:"json",
			type:"post",
			success:function(a){
				alert(JSON.stringify(a));
				page=a;
			}
		});
		
	},	
		
	chushihua : function(){
		//this.ajaxTestFunc();
		this.ajaxTestFunc();
		
	}	
};