<template>
    <div class="sex" v-show="show">
        <p>男</p>
        <p>女</p>

    </div>
    
</template>
<script>
export default {
     created(){		
			this.observer.$on("handleSex",(val)=>{
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
.sex{
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
    color:#7C7C7C  ;
}





</style>

