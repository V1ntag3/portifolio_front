<template>
  <div class="tela">
    <div class="informativo">
      <div id="hab" class="titulo"> <span>habilidades</span> </div>
      <canvas style="width: 80%; height: 80%;margin: auto;
      display: block;" width="600" height="600" id="tagCanvas"></canvas>
    </div>


    <div id="tags" style="font-size: 10%">
      <a v-for="(item, index) in tecnologias" :key="index" href="#hab" style="font-size: 35px">{{ item }}</a>
    </div>


    <div class="imagem">
      <div id="cert" class="titulo"> <span>certificações</span> </div>
      <div v-for="(item, index) in certificados" :key="index" class="curso">
        <div class="icon"><img src="" alt=""></div>
        <div class="dados">
          <div class="nome">{{ item.nome }}</div>
          <div class="local">{{ item.local }} - {{ item.data }}</div>
        </div>
      </div>
      <div id="exp">
        <div id="cert" class="titulo"> <span>experiência</span> </div>
        <div v-for="(item,index) in experiencias" :key="index" class="exp">
          <div class="dados">
            <div class="cargo">{{ item.cargo }} - {{ item.tipo }}</div>
            <div class="local">{{ item.local }}</div>
            <div class="data">{{ item.dataInicial }} - {{ item.dataFinal }}</div>
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
  data() {
    return {
      tecnologias: [
        'Vue.js',
        'REST',
        'Figma',
        'Axios',
        'JQuery',
        'React.js',
        'TypeScript',
        'HTML',
        'React Native',
        'Python',
        'Git',
        'Django',
        'JavaScript',
        'JSON',
        'BootStrap 5',
        'CSS',
        'Ajax',
      ],
      certificados:[
        {
          imagem:"",
          nome:"Desenvolvimento Web FullStack",
          local:"ProgramdorBR",
          data:"2022"
        }
      ],
      experiencias:[
        {
          cargo:"Desenvolvedor Front-End",
          tipo:"Estágio",
          local:"InfoG2 Tecnologia LTDA - Teresina - PI",
          dataInicial:"Out 2022",
          dataFinal:"Abr 2023"
        }
      ]
    }

  },
  created() {

  }
}
</script>

<style scoped>
.tela {
  display: flex;
  margin-top: 30px;
}

.titulo {
  font-family: 'Poppins-Bold' !important;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #FFFFFF;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
}

.informativo {
  width: 50%;
  height: auto;
  display: inline-block;
}


.imagem {
  width: 50%;
  height: auto;
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
