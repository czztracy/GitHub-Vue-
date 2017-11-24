var Vue = require("vue");
require("./resource/css/base.css")
new Vue({
	el:"#app",
	data:{
		name:"qd",
		//txt
		txt:require("./resource/txt/data.txt"),
		html:require("./resource/html/index.html"),
		img:require("./resource/images/1.jpg"),
		
	},
	template:`
		<div>
			<p class="title">txt类型文件</p>
			<p>{{txt}}</p>
			
			<p class="title">html类型文件</p>
			<div v-html="html"></div>
			
			<p class="title">img类型文件</p>
			<img :src="img" />
		</div>
	`
})
