<template>

 <div class="modal-mask" v-show="show" transition="modal">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
			<h3 class="modal-header-t" 
				v-show="title!==''" 
				v-text="title">
			</h3>
			<p class="modal-header-c" v-text="content"></p>
		</div>
		<div class="modal-footer">
			<a class="modal-footer-btn" @click="onHide">确定</a>
		</div>

      </div>
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
			type : String,
			required: true
		},
		content : {
			type : String
		}
	},
	methods: {
	    onHide: function () {
	      this.show = false;
	      this.$dispatch('hide');
	    }
    },
	ready(){
        var modalC = document.querySelectorAll(".modal-container"),
	    widthC = window.innerWidth * (4/5);

	    for (var i = 0; i < modalC.length; i++) {
	      modalC[i].style.width = widthC +'px'
	    }
	},
}
</script>


<style lang="sass">

.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .5);
	display: table;
	transition: opacity .3s ease;

    .modal-wrapper {
	  display: table-cell;
	  vertical-align: middle;
	}

	.modal-container {
	  // width: 300px;
	  margin: 0px auto;
	  background-color: #fff;
	  border-radius: 2px;
	  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	  transition: all .3s ease;


	  .modal-header {
	    padding: 15px 10px;

	    .modal-header-t{
		    margin-bottom: 15px;
		    color: rgba(0,0,0,.87);
		    font-size: 16px;
		    text-align: center;
		}

		.modal-header-c {
		    line-height: 22px;
		    color: rgba(0,0,0,.54);
		}
	}

	 .modal-footer {
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

	    .modal-footer-btn{
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
}

.modal-enter, .modal-leave {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
  transform: scale(1.1);
} 
	
</style>