<template>
	<div>
		<div class="content-left">
			<mu-list @change="handleListChange" :value="activeList">
				<mu-list-item title="Sent mail" value="list1">
					<mu-icon slot="left" value="send" />
				</mu-list-item>
				<mu-list-item title="Drafts" value="list2">
					<mu-icon slot="left" value="drafts" />
				</mu-list-item>
				<mu-list-item title="Inbox" toggleNested value="list3">
					<mu-icon slot="left" value="inbox" />
					<mu-list-item slot="nested" title="Starred" value="list4">
						<mu-icon slot="left" value="grade" />
					</mu-list-item>
					<mu-list-item slot="nested" disabled title="Sent mail" toggleNested value="list5">
						<mu-icon slot="left" value="send" />
						<mu-list-item title="Drafts" slot="nested" value="list6">
							<mu-icon slot="left" value="drafts" />
						</mu-list-item>
					</mu-list-item>
					<mu-list-item slot="nested" title="Inbox" toggleNested value="list7">
						<mu-icon slot="left" value="inbox" />
						<mu-list-item title="Drafts" slot="nested" value="list8">
							<mu-icon slot="left" value="drafts" />
						</mu-list-item>
					</mu-list-item>
				</mu-list-item>
			</mu-list>
		</div>
		<div class="content-right">
			<div class="breadcrumb">
				<mu-breadcrumb>
					<mu-breadcrumb-item href="/">Home</mu-breadcrumb-item>
					<mu-breadcrumb-item href="/">VideoGame</mu-breadcrumb-item>
					<mu-breadcrumb-item>Download</mu-breadcrumb-item>
				</mu-breadcrumb>
			</div>
			<div class="body">
				<mu-sub-header>阳光</mu-sub-header>
				<mu-content-block>
					散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
				</mu-content-block>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeList: 'list1'
			}
		},
		methods: {
			handleListChange(val) {
				this.activeList = val
			}
		}
	}
</script>

<style>
	.content-left {
		width: 30%;
		float: left;
		background-color: white;
		margin-bottom: -4000px;
		padding-bottom: 4000px;
	}
	
	.content-right {
		width: 70%;
		display: inline-block;
		float: right;
		padding: 10px 20px;
		background-color: rgba(0, 0, 0, 0)
	}
	
	.breadcrumb {
		margin: 10px 0;
	}
	
	.body {
		background-color: white;
		border-radius: 5px;
		min-height: 500px;
	}
</style>