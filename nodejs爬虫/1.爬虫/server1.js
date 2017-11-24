
var fs = require("fs");
var cheerio = require("cheerio");

fs.readFile("./index1.html", function(err, data) {
	if(err) throw err;
//	console.log(data.toString());
	var html = data.toString();
	const $ = cheerio.load(html)
//	console.log($(".item").eq(2).find("img").attr("src"))
	var item = $(".single");
	var json = [];
	for(var i = 0 ; i < item.length; i++){

		var data = {
			
			img:item.eq(i).find(".pic").find("img").attr("src"),
			icon:item.eq(i).find(".iconfont").eq(0).attr("class"),
			icon1:item.eq(i).find(".category").find("span").eq(1).html(),
			
			vx:item.eq(i).find(".iconfont").eq(1).attr("class"),
			vx1:item.eq(i).find(".iconfont").eq(1).html(),
			
			red:item.eq(i).find(".iconfont").eq(2).attr("class"),
			red1:item.eq(i).find(".iconfont").eq(2).html(),
			
			
			desc:item.eq(i).find("h1").html(),
//			time:item.eq(i).find(".smart-date").html(),		
		};

		json.push(data);
	}
//	console.log(json)
	
	var item1 = $(".com-grid-article");
	var json1 = [];
	for(var k= 0 ; k < item1.length; k++){

		var data = {
			
			img:item1.eq(k).find(".lazyloaded").attr("src"),
			icon:item1.eq(k).find(".iconfont").eq(0).attr("class"),
			icon1:item1.eq(k).find(".category").find("span").eq(1).html(),
			
			vx:item1.eq(k).find(".iconfont").eq(1).attr("class"),
			vx1:item1.eq(k).find(".iconfont").eq(1).html(),
			
			red:item1.eq(k).find(".iconfont").eq(2).attr("class"),
			red1:item1.eq(k).find(".iconfont").eq(2).html(),
			
			
			desc:item1.eq(k).find("h1").html(),
			time:item1.eq(k).find(".smart-date").html(),		
		};

		json1.push(data);
	}
	console.log(json1)
	/*for(var i = 0; i < item.length; i++) {
		console.log($(".item").eq(i).find("img").attr("src"));
		console.log($(".item").eq(i).find("span").eq(5).html());
		console.log($(".item").eq(i).find("span").eq(8).html());
		var img = $(".item").eq(i).find("img").attr("src");
		var title = $(".item").eq(i).find("span").eq(5).html();
		var price = $(".item").eq(i).find(".price span").eq(2).html()?$(".item").eq(4).find(".price span").eq(2).html():0
//		connection.query(`INSERT INTO goods (img, title, price) VALUES ('${img}','${title}',${price})`, function(error, results, fields) {
//			if(error) throw error;
			//console.log('The solution is: ', results[0]);
		});*/
//	}
});