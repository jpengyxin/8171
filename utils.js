//工具类

/******************************说明************************************/

/**********************************************************************/



/****************************工具类****************************************/

(function() {


	/*
	 *获取当前时间
	 *@return 返回当前时间 yyyy-MM-dd
	 */
	function dateNow() {
		var date = new Date();
		var seperator1 = "-";
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var strDate = date.getDate();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		var currentdate = year + seperator1 + month + seperator1 + strDate;
		return currentdate;
	}

	/*
	 *日期格式化函数（正则匹配 y年 M月 d日 H小时 m分钟 s秒 q季度 S毫秒）
	 *@param fmt 格式化形参 
	 *@param date 日期（Date形的日期）new Date();   
	 *@return 返回格式化的日期       
	 */
	var dateFtt = function(fmt, date) {
		var o = {
			"M+": date.getMonth() + 1, //月份   
			"d+": date.getDate(), //日   
			"H+": date.getHours(), //小时   
			"m+": date.getMinutes(), //分   
			"s+": date.getSeconds(), //秒   
			"q+": Math.floor((date.getMonth() + 3) / 3), //季度   
			"S": date.getMilliseconds() //毫秒     
		};
		if (/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}   

	/*
	 *js日期加减函数（ y年， m月， d日， h小时， n分钟，s秒  ）
	 *@param date 日期（Date形的日期）new Date();
	 *@param part 格式化形参 
	 *@param value 加减的数值
	 *@return 返回日期加减后的日期 Date形的日期）new Date();
	 */     
	function dateAdd(date, part,  value)  {  
		value  *=  1;     
		if  (isNaN(value))  {         
			value  =  0;     
		}  
		var rtDate = new Date(date);   
		switch  (part)  {         
			case  "y":
				  
				rtDate.setFullYear(rtDate.getFullYear()  +  value);             
				break;          
			case  "M":
				  
				rtDate.setMonth(rtDate.getMonth()  +  value);              
				break;          
			case  "d":
				rtDate.setDate(rtDate.getDate()  +  value);              
				break;          
			case  "H":
				 
				rtDate.setHours(rtDate.getHours()  +  value);              
				break;          
			case  "m":
				rtDate.setMinutes(rtDate.getMinutes()  +  value);              
				break;          
			case  "s":
				  
				rtDate.setSeconds(rtDate.getSeconds()  +  value);              
				break;          
			default:
				         
		}  
		return rtDate;
	}   

	         
})();