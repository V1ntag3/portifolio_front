<template>
  <div class="tela">
    <div class="informativo">
      <div id="hab" class="titulo"> <span>habilidades</span> </div>
      <canvas style="margin: auto;display: block;width: 80%; height: 80%;" width="600" height="600" id="tagCanvas"></canvas>
    </div>

    <div id="tags" style="font-size: 10%">
      <a v-for="(item, index) in tecnologias" :key="index" href="#hab" style="font-size: 35px">{{ item }}</a>
    </div>

    <div class="imagem">
      <div id="cert" class="titulo"><span>certificações</span></div>
      <div v-for="(item, index) in certificados" :key="index" class="curso">
        <div class="icon"><img :src="`${publicPath}${item.imagem}`" alt=""></div>
        <div class="dados">
          <div class="nome">{{ item.nome }}</div>
          <div class="local">{{ item.local }} - {{ item.data }}</div>
        </div>
      </div>
      <div id="exp">
        <div id="cert" class="titulo"> <span>experiência</span> </div>
        <div v-for="(item, index) in experiencias" :key="index" class="exp">
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
      publicPath: process.env.BASE_URL,
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
      certificados: [
        {
          imagem: "img/certificados/1.png",
          nome: "Desenvolvimento Web FullStack",
          local: "ProgramdorBR",
          data: "2022"
        }
      ],
      experiencias: [
        {
          cargo: "Desenvolvedor Front-End",
          tipo: "Estágio",
          local: "InfoG2 Tecnologia LTDA - Teresina - PI",
          dataInicial: "Out 2022",
          dataFinal: "Abr 2023"
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
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
}

.informativo,
.imagem {
  width: 50%;
  height: auto;
  display: inline-block;
}

.imagem {
  border-left: 3px solid #FFFFFF;
  padding: 0px 40px;
}

/* Curso CSS */
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
  font-weight: 600;
  font-size: 23px;
}

.curso .local {
  font-weight: 400;
  font-size: 20px;
}

/* Experiência CSS */
.exp {
  background-color: black;
  padding: 8px 10px;
  border-radius: 10px;
}

.exp .dados {
  font-weight: 700;
  font-size: 25px;
}

@media (max-width:1110px) {
  .tela {
    display: block;
  }

  .informativo,
  .imagem {
    width: auto;
    display: block;
  }

  .imagem {
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

  /* Curso */
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
    font-size: 16px;
  }

  .curso .local {
    font-size: 14px;
  }

  .exp {
    padding: 8px;
  }

  .exp .dados {
    font-size: 16px;
  }

}
</style>
