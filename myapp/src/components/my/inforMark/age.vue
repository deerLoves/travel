<template>
    <div class="headPortrait" v-show="show">
        <p>请输入您的年龄</p>
        <input type="text">
        <hr>

    </div>
    
</template>
<script>
export default {
     created(){		
			this.observer.$on("handleImg",(val)=>{
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
.headPortrait{
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
}





</style>

