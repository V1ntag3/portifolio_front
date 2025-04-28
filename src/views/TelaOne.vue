<template>
  <div id="home" class="tela">
    <div class="informativo" data-anima="esquerda">
      <div class="info">
        <div style="display: flex;">
          <div id="titulo" aria-label=" Olá, sou Marcos" class="blast-root titulo"></div>
        </div>
        <span class="emprego">
          Desenvoldedor Front-End
        </span>
        <div class="sub-titulo">
          <span>
            {{ mensagemInicial }}
          </span>
        </div>
        <a :href="`${publicPath}${curriculo}`" target="_blank">
          <ButtonApp texto="currículo" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonApp from "../components/Button.vue"


export default {
  name: 'Tela1App',
  components: {
    ButtonApp
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      curriculo: "curriculo.pdf",
      mensagemInicial: "Aqui você poderá conhecer melhor meu trabalho como desenvolvedor front-end, minhas habilidades, experiências e projetos pessoais."
    }
  }
}
</script>

<style scoped>
.tela {
  display: flex;
  position: relative;
  height: 100vh;
  justify-content: center;
  align-items: center;
}


.titulo {
  font-weight: 600;
  font-size: 54px;
  color: #FFFFFF;
}

.emprego {
  font-family: 'Poppins' !important;
  font-weight: 600;
  font-size: 25px;
  text-align: justify;
  margin-bottom: 60px;
  color: #000;
  margin-bottom: 28px;
}

.titulo span {
  font-size: 100px;
  color: black;
}

.sub-titulo span {
  font-family: 'Poppins' !important;
  font-weight: lighter;
  font-weight: 400;
  font-size: 24px;
  text-align: justify;
  margin-bottom: 60px;
}

.informativo {
  flex: 1;
  display: inline-block;
  padding: 0px 60px;
  padding-left: 100px;
}

.informativo .info {
  max-width: 750px;
}

.imagem {
  padding: 30px;
  display: inline-block;
}

.imagem img {
  height: fit-content;
  border-radius: 25px;
  width: 100%;
  max-height: calc(100vh - 100px);
}

@media (max-width:1110px) {

  .tela {
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

  .informativo .info {
    max-width: unset;
  }
}

@media (max-width:665px) {
  .titulo {
    font-size: 29.5px;
  }

  .titulo span {
    font-size: 65px;
  }

  .sub-titulo span {
    font-size: 24px;
  }

  .sub-titulo {
    margin-bottom: 15vh;
  }

  .informativo {
    padding: 0px 40px;
    padding-right: 20px;
  }

  .informativo .info {
    margin-top: 45%;
    max-width: 640px;
  }
}
</style>
