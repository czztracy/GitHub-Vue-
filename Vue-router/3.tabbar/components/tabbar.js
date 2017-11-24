//weui-bar__item_on
var tabbar = {
	template: `
		<div class="weui-tabbar">
                <a v-for="a in arr" href="javascript:;"  @click="toggleTabbar(a.id)" class="weui-tabbar__item" :class="{'weui-bar__item_on':id==a.id}" >
                    <span style="display: inline-block;position: relative;">
                        <img src="./images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                        <span v-show="a.bool" class="weui-badge" style="position: absolute;top: -2px;right: -13px;">{{a.num}}</span>
                    </span>
                    <p class="weui-tabbar__label">{{a.title}}</p>
                </a>
            </div>
	`,
	data:function(){
		return {
			id:1,
			arr:[{
				id:1,
				title:"微信",
				href:"#/tab1",
				bool: true
			},{
				id:2,
				title:"通讯录",
				href:"#/tab2",
				bool: false
			},{
				id:3,
				title:"发现",
				href:"#/tab3",
				bool: false
			},{
				id:4,
				title:"我",
				href:"",
				bool: false
			}]
		}
	},
	methods:{
		toggleId:function(id){
			this.id = id
		}
	}
}