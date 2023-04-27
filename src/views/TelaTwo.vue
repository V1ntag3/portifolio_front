<template>
  <div class="tela">
   <div class="informativo">
  
   </div>
   <div class="imagem">
     
   </div>
 </div>
</template>

<script>

export default {
name: 'TelaTwo',
components:{
 
}
}
</script>

<style scoped>
.tela {
 display: flex;
}

.titulo {
 font-family: 'Poppins-Regular';
 font-style: normal;
 font-weight: 600;
 font-size: 54px;
 color: #FFFFFF;
}


.informativo {
 width: calc(55% - 120px);
 height: 100vh;
 display: inline-block;
 padding: 0px 60px;
 padding-left: 100px;
}


.imagem {
 width: 45%;
 height: 100vh;
 background-color: black;
 display: inline-block;
}
@media (max-width:1110px) {
 .tela-1{
   display: block;
 }
 .informativo {
   width: auto;
   display: grid;
   padding-right: 100px;
 }
 .imagem {
   width: auto;
   display: grid;
 }
 .informativo .info{
   max-width: unset;
 }
}
@media (max-width:665px) {

 .informativo{
   padding-right: 25px;
   padding-left: 85px;
 }

}

</style>
