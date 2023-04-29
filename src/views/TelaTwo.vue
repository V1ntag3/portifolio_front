<template>
  <div class="tela">
    <div class="informativo">
      <div id="hab" class="titulo"> <span>habilidades</span> </div>
      <canvas style="width: 80%; height: 80%;margin: auto;
      display: block;" width="600" height="600" id="tagCanvas"></canvas>
    </div>


    <div id="tags" style="font-size: 10%">
      <a href="#hab" style="font-size: 4.83ex">Vue.js</a>
      <a href="#hab" style="font-size: 5.61ex">REST</a>
      <a href="#hab" style="font-size: 10.64ex">Figma</a>
      <a href="#hab" style="font-size: 6.47ex">Axios</a>
      <a href="#hab" style="font-size: 8.32ex">JQuery</a>
      <a href="#hab" style="font-size: 5.74ex">React.js</a>
      <a href="#hab" style="font-size: 5.16ex">TypeScript</a>
      <a href="#hab" style="font-size: 5.74ex">HTML</a>
      <a href="#hab" style="font-size: 5.16ex">CSS</a>
      <a href="#hab" style="font-size: 6.36ex">React Native</a>
      <a href="#hab" style="font-size: 5.32ex">Python</a>
      <a href="#hab" style="font-size: 7.68ex">Git</a>
      <a href="#hab" style="font-size: 6.69ex">Django</a>
      <a href="#hab" style="font-size: 7.8ex">JavaScript</a>
      <a href="#hab" style="font-size: 8.47ex">JSON</a>
      <a href="#hab" style="font-size: 5.65ex">BootStrap 5</a>
      <a href="#hab" style="font-size: 10.77ex">CSS</a>

    </div>


    <div class="imagem">
      <div id="cert" class="titulo"> <span>certificações</span> </div>
      <div class="curso">
        <div class="icon"></div>
        <div class="dados">
          <div class="nome">Desenvolvimento Web FullStack</div>
          <div class="local">ProgramdorBR - 2022</div>
        </div>
      </div>
      <div id="exp">
        <div id="cert" class="titulo"> <span>experiência</span> </div>
        <div class="exp">
          <div class="dados">
            <div class="cargo">Desenvolvedor Front End - Estágio</div>
            <div class="local">InfoG2 Tecnologia LTDA- Teresina - PI</div>
            <div class="data">Out 2022 - Abr 2023</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>


export default {
  name: 'TelaTwo',
  components: {

  },
  created() {

  }
}
</script>

<style scoped>
.tela {
  display: flex;margin-top: 30px;
}

.titulo {
  font-family: 'Poppins-Bold' !important;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #FFFFFF;
  text-align: center;
  margin-top: 65px;
  margin-bottom: 15px;
}

.informativo {
  width: 50%;
  height: 100vh;
  display: inline-block;
}


.imagem {
  width: calc(50% - 80px);
  height: calc(100vh - 30px);
  display: inline-block;
  border-left: 3px solid #FFFFFF;
  padding: 0px 40px;
}

.curso {
  display: flex;
  margin-bottom: 10px;
}

.curso .icon {
  background-color: black;
  width: 100px;
  height: 100px;
  border-radius: 15px;
}

.curso .dados {
  padding: 20px;
  height: fit-content;
}

.curso .nome {
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  color: #FFFFFF;
}

.curso .local {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #FFFFFF;
}

.exp {
  background-color: black;
  color: white;
  padding: 8px 10px;
  border-radius: 10px;
}

.exp .dados {
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  color: #FFFFFF;

}

@media (max-width:1110px) {
  .tela {
    display: block;
  }

  .informativo {
    width: auto;
    display: block;
  }

  .imagem {
    width: auto;
    display: block;
    border: none;

  }

  .titulo {
    margin-bottom: 5vh;
  }
}

@media (max-width:665px) {

  .informativo {
    width: 100%;
  }

  .titulo {
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .imagem {
    padding: 0px 15px;
  }

  .curso {
    display: flex;
  }

  .curso .icon {
    background-color: black;
    width: 60px;
    height: 60px;
    border-radius: 15px;
  }

  .curso .dados {
    padding: 5px 10px;
    height: fit-content;
    padding-right: 0px;
  }

  .curso .nome {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
  }

  .curso .local {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
  }

  .exp {
    padding: 8px;

  }

  .exp .dados {

    font-size: 16px;

  }

}
</style>
