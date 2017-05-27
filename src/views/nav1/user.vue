<template>
	<div class="carousel-wrap" id="carousel">

		<transition-group tag="ul" class='slide-ul' name="list">
			<li v-for="(list,index) in shufflingData" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
				<a :href="list.href" >
					<img :src="list.url" :alt="list.title">
				</a>
			</li>
		</transition-group>

		<div class="carousel-items">
			<span v-for="(item,index) in shufflingData.length" :class="{'active':index===currentIndex}" @mouseenter="stop" @mouseleave="go" @mouseover="change(index)"></span>
		</div>
	</div>
</template>

<script>
    export default {
        components: {

        },
        ready: function() {
            var _this=this;
            var timer = setInterval(function() {
                if(_this.shufflingId>=0&&_this.shufflingId<_this.shufflingData.length-1){
                    _this.shufflingId=parseInt(_this.shufflingId)+1;
                }
                else if (_this.shufflingId==_this.shufflingData.length-1) {
                    _this.shufflingId=0;
                }
            }, 5000)
        },
        data() {
            return {
                shufflingData:[{
                    title:'喵来个米',
                    href:'1',
                    url:'/static/tu1.jpg'
                },
					{
                        title:'豆豆',
                        href:'2',
                        url:'/static/tu2.jpg'
                    },{
                        title:'猫咪咪',
                        href:'3',
                        url:'/static/tu3.jpg'
                    }],
                currentIndex:0,
                PreNext:false,
				timer: ''
            }
        },
        methods: {
            created() {
                var _this = this;
                this.$nextTick(() => {
                    _this.timer = setInterval(() => {
                        this.autoPlay()
                    }, 3000)
                })
            },
            go() {
                var _this = this;
                this.timer = setTimeout(() => {
                    _this.autoPlay()
                    _this.go()
                }, 3000)
            },
            stop() {
                clearInterval(this.timer)
                this.timer = null
            },
            change(index) {
                this.currentIndex = index
            },
            autoPlay() {
                this.currentIndex++
                if (this.currentIndex > this.shufflingData.length - 1) {
                    this.currentIndex = 0
                }
            }
        },
		mounted(){
            this.go();
		}
    }
</script>


<style scoped lang="scss">

	.list-enter-active {
		transition: all .5s ease-in-out;
		transform: translateX(0)
	}

	.list-leave-active {
		transition: all .5s ease-in-out;
		transform: translateX(-100%)
	}

	.list-enter {
		transform: translateX(100%)
	}

	.list-leave {
		transform: translateX(0)
	}
	.carousel-wrap {
		position: relative;
		height: 453px;
		width: 100%;
		overflow: hidden;
		// 删除
		background-color: #fff;
	}

	.slide-ul {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		li {
			position: absolute;
			width: 100%;
			height: 100%;
			text-align: center;
			img {
				/*width: 100%;*/
				height: 100%;
			}
		}
	}

	.carousel-items {
		position: absolute;
		z-index: 10;
		top: 380px;
		width: 100%;
		margin: 0 auto;
		text-align: center;
		font-size: 0;
		span {
			display: inline-block;
			height: 6px;
			width: 30px;
			margin: 0 3px;
			background-color: #b2b2b2;
			cursor: pointer;
		}
		.active {
			background-color: #1d8ce0;
		}
	}

</style>