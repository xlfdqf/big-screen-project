<template>
    <div class="up" v-if="visible" @click="scrollTo" v-scroll-to="{el:'body',offset:0}" >
        <img src="../assets/image/up.png"/>
    </div>
</template>
<style scoped>
    .up{
        position: fixed;
        bottom:100px;
        right:30px;
        cursor: pointer;
        z-index: 999;
    }
</style>

<script>
export default {
   namw:"up",
   props:{
       offset:{
           default:100,
           type:Number,
       }
   },
   data(){
       return {
           visible:false,
       }
   },
   methods:{
       getOffset(){
            this.offset=document.documentElement.offsetHeight-document.documentElement.clientHeight;
            return   this.offset;
       },
       show(){
            if(document.documentElement.scrollTop>=  this.offset){
                    this.visible=true;
            }else{
                 this.visible=false;
            }
       },
       scrollTo(){

       }
   },
   mounted(){
    
       this.show();
       window.addEventListener('scroll',()=>{
           this.show();
       },true)
  
   }
}
</script>

