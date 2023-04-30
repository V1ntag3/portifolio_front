<template>
   <div id="home" class="tela">
    <div class="informativo">
      <div class="info">
        <div class="titulo"><span>O</span>lá, sou Marcos</div>
        <div class="sub-titulo">
          <span>
            {{ mensagemInicial }}
          </span>
        </div>
        <a :href="`${publicPath}${curriculo}`" target="_blank">
        <ButtonApp  texto="currículo" />
      </a>
        </div>
    </div>
    <div class="imagem">
        <div class="borda-imagem">
          <img src="../assets/images/eu.jpeg" alt="">  
        </div>
    </div>
  </div>
</template>

<script>
import ButtonApp from "../components/Button.vue"


export default {
name: 'Tela1App',
components:{
  ButtonApp
},
data(){
  return{
    publicPath: process.env.BASE_URL,
    curriculo:"curriculo.pdf",
    mensagemInicial:"Aqui você poderar ver um pouco do meu trabalho como desenvolvedor, minhas qualificações e meus projetos pessoais durate minha carreira."
  }
}
}
</script>

<style scoped>
.tela {
  display: flex;
}

.titulo {
  font-style: normal;
  font-weight: 600;
  font-size: 54px;
  color: #FFFFFF;
}

.titulo span {
  font-size: 100px;
  color: black;
}

.sub-titulo span {
  font-family: 'Poppins-ExtraLight' !important;
  font-style: normal;
  font-weight: 275;
  font-size: 34px;
  text-align: justify;
  color: #FFFFFF;
  margin-bottom: 60px;

}

.informativo {
  width: calc(55%);
  height: 100vh;
  display: inline-block;
  padding: 0px 60px;
  padding-left: 100px;
}

.informativo .info {
  margin-top: 30%;
  max-width: 750px;
}

.imagem {
  width: 45%;
  height: 100vh;
  background-color: black;
  display: inline-block;
}
.borda-imagem img{
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    object-fit: cover;
    margin: 20px;
    border-bottom: 3px solid #fff;
    border-left: 3px solid #fff;
    margin-left: 0px;
    margin-top: 37px;    
}
.borda-imagem{
  height: calc(100% - 100px);
  margin: 50px;
  border-top: 3px solid white;
  border-right: 3px solid white;

}

@media (max-width:1110px) {
  .borda-imagem img{
    width: calc(100vw - 160px);
    height: calc(100vh - 170px);
  }
  .tela{
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
  .titulo{
    font-size: 29.5px;
  }
  .titulo span{
    font-size: 65px;
  }
  .sub-titulo span{
    font-size: 24px;
  }
  .sub-titulo{
    margin-bottom: 15vh;
    }
  .informativo{
    padding: 0px 40px;
    padding-right: 20px;
  }
  .informativo .info {
    margin-top: 45%;
    max-width: 640px;
}
}

</style>
