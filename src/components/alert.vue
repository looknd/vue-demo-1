<template>
<div class="v-dimmer" v-show="show" transition="modal"></div>
<div class="v-modal" v-show="show" transition="modal">
	<div class="v-modal-header">
		<h3 class="v-modal-header-t" 
			v-show="title!==''" 
			v-text="title">
		</h3>
		<p class="v-modal-header-c" v-text="content"></p>
	</div>
	<div class="v-modal-footer">
		<a class="v-modal-footer-btn" @click.prevent="show=false">确定</a>
	</div>
</div>
</template>
<script>
export default {
	props : {
		show : {
			type : Boolean,
			default : false,
			twoWay : true
		},
		title : {
			type : String
		},
		content : {
			type : String
		}
	}
}
</script>


<style lang="sass">
.v-dimmer{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    z-index: 999;
    pointer-events: none;
     transition: opacity .3s ease;
}

.v-modal{
	position: fixed;
	width: 80%;
	top: 50%;
	left: 50%;
	background-color: #fafafa;
	border-radius: 3px;
	z-index: 1000;
	-webkit-transform: translate(-50%,-50%);
	transform: translate(-50%,-50%);
	transition: all .3s ease;

	.v-modal-header {
	    padding: 15px 10px;

	    .v-modal-header-t{
		    margin-bottom: 15px;
		    color: rgba(0,0,0,.87);
		    font-size: 16px;
		    text-align: center;
		}

		.v-modal-header-c {
		    line-height: 22px;
		    color: rgba(0,0,0,.54);
		}
	}

	.v-modal-footer {
	    position: relative;
	    display: table;
	    width: 100%;
	    border-collapse: collapse;

	    &:before {
			display: block;
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			transform: scaleY(.5);
			-webkit-transform-origin: 0 0;
			transform-origin: 0 0;
			height: 1px;
			border-top: 1px solid #ddd;
			z-index: 1001;
		}

	    .v-modal-footer-btn{
			position: relative;
			display: table-cell;
			height: 44px;
			line-height: 44px;
			text-align: center;
			color: rgba(0,0,0,.87);
			box-sizing: border-box;
			overflow: hidden;
	    }
	}

}

.modal-enter, .modal-leave {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
  transform: scale(1.1);
} 
	
</style>