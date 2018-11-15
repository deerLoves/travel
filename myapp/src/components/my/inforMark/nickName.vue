<template>
    <div class="nickName" v-show="show">
        <p>请输入您的昵称</p>
        <p><input type="text"></p>
        </hr>

    </div>
    
</template>
<script>
export default {
     created(){		
			this.observer.$on("handleNick",(val)=>{
				this.show=val;
			})
        },
     data(){
			return {
				show:false,				
			}			
		},
   
       
}
</script>
<style scoped>
.nickName{
    width:6.86rem;
    height:3.2rem;
    background:#FFFFFF ;
	display: flex;
	flex-direction: column;
    justify-content:space-around;
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	border-radius: .1rem;
	z-index: 1;

}
p{
    text-align:center;
    font-size:.48rem;
    font-family: fantasyPingFangSC-Regula;
    color:#030303 ;
}
input{
    outline: none;
    border:none;
    
    font-size:.36rem;
   
    
}
hr{
    color: black;
}





</style>

