<template>
  <div class="tela" data-anima="centro">
    <div id="port" class="titulo"> <span>portifólio</span> </div>
    <div class="portifolio">

      <div v-for="(item, index) in projetos" :key="index" @click="abrirModal(index)" class="item">
        <img :src="`${publicPath}${item.imagemTela}`" alt="" class="img-port">
        <div class="ver">ver projeto</div>
      </div>

    </div>
  </div>
  <div v-bind:class="{ 'modal-ativo': ativo }" class="modal-projeto">
    <div class="modal-flex">
      <div class="imagem-modal">
        <img class="img-tela" :src="`${publicPath}${projetos[currentIndex].imagemTela}`" alt="" srcset="">
        <div v-if="projetos[currentIndex].isMy == true" class="name-imagem"><span> <img src="../assets/images/check.svg"
              alt=""> design by me</span></div>
      </div>
      <div class="informacoes">

        <h1 :style="'font-family:' + projetos[currentIndex].fontText" class="titulo-info">{{ projetos[currentIndex].nome
          }}
        </h1>
        <p class="descricao">{{ projetos[currentIndex].descricao }}</p>
        <h2 class="sub-titulo">Tecnologias Utilizadas</h2>
        <ul>
          <li v-for="(item, index) in projetos[currentIndex].tecnologias" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="botoes">
      <a v-if="projetos[currentIndex].siteProjeto != ''" :href="projetos[currentIndex].siteProjeto" target="_blank">
        <ButtonApp classB="button-modal" texto="acessar projeto" />
      </a>
      <a v-if="projetos[currentIndex].front != ''" :href="projetos[currentIndex].front" target="_blank">
        <ButtonApp classB="button-modal" texto="repositório front" />
      </a>
      <a v-if="projetos[currentIndex].back != ''" :href="projetos[currentIndex].back" target="_blank">
        <ButtonApp classB="button-modal" texto="repositório back" />
      </a>
      <a v-if="projetos[currentIndex].design != ''" :href="projetos[currentIndex].design" target="_blank">
        <ButtonApp classB="button-modal" texto="design" />
      </a>
    </div>
    <div @click="fecharModal()" class="close-modal">
      <span class="line line-one-aberto"></span>
      <span class="line line-two-aberto"></span>
    </div>
  </div>
  <div v-bind:class="{ 'modal-background-ativo': ativo }" @click="fecharModal()" class="modal-background">

  </div>
</template>

<script>
import ButtonApp from '../components/Button.vue'
export default {
  name: 'TelaTree',
  components: {
    ButtonApp
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      ativo: false,
      currentIndex: 0,
      projetos: [
        {
          nome: "HandManga",
          fontText: "Poppins",
          descricao: "Um aplicativo intuitiva onde o usuário pode explorar, ler e acompanhar seus mangás favoritos, integrando diretamente com a API do MangaDex. O app oferece recursos como busca por títulos e leitura vertical e horizontal. A experiência é otimizada com uma interface moderna, suporte a múltiplos idiomas e atualizações em tempo real conforme novos capítulos são lançados.",
          tecnologias: [
            "React Native"
          ],
          imagemTela: "img/projetos/3.jpg",
          siteProjeto: "https://github.com/V1ntag3/HandManga",
          front: "",
          back: "",
          design: "",
          isMy: true
        },
        {
          nome: "Groomify",
          fontText: "Poppins",
          descricao: "Plataforma completa que permite que clientes agendem serviços de forma rápida e prática. O sistema oferece funcionalidades como seleção de serviços, escolha de profissionais, horários disponíveis em tempo real, confirmação e lembretes automáticos por e-mail ou SMS. Para os estabelecimentos, a solução inclui gestão de agenda, controle de fluxo de clientes, relatórios de desempenho e personalização de horários e serviços. Tudo isso com uma interface moderna, responsiva e fácil de usar, tanto para clientes quanto para administradores.",
          tecnologias: [
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Ruby on Rails"
          ],
          imagemTela: "img/projetos/4.png",
          siteProjeto: "",
          front: "",
          back: "",
          design: "",
          isMy: true
        },
        {
          nome: "ACHEMED Médicos",
          fontText: "Poppins",
          descricao: "Aplicativo desenvolvido para a empresa ACHEMED, permitindo que médicos consultem suas agendas e acessem os dados dos pacientes de forma prática e segura. O app está disponível nas lojas de aplicativos. Para utilizar o aplicativo ou conhecer outros serviços, entre em contato diretamente com a ACHEMED.",
          tecnologias: [
            "React Native"
          ],
          imagemTela: "img/projetos/5.png",
          siteProjeto: "",
          front: "",
          back: "",
          design: "",
          isMy: true
        }
        ,
        {
          nome: "ORGANIZER FINE",
          fontText: "ABSTER",
          descricao: "Desenvolvido para atender a uma necessidade real de controle financeiro, o app permite que o usuário registre suas contas, categorize seus gastos e acompanhe seus rendimentos de forma simples e eficiente. Com uma interface intuitiva, o aplicativo gera relatórios visuais e gráficos detalhados, facilitando a análise das despesas e ajudando na tomada de decisões. Recursos adicionais incluem alertas de vencimento de contas, metas de economia e exportação de dados, tornando o gerenciamento financeiro mais prático e acessível no dia a dia.",
          tecnologias: [
            "React Native"
          ],
          imagemTela: "img/projetos/6.png",
          siteProjeto: "https://github.com/V1ntag3/OrganizerFine",
          front: "",
          back: "",
          design: "",
          isMy: true
        }
      ]
    }
  },
  created() {

    this.ativo = false
  },
  methods: {
    fecharModal() {
      this.ativo = false
      var el = document.querySelector('body')
      el.style.overflow = ""
    },
    abrirModal(index) {
      this.currentIndex = index
      this.ativo = true
      var el = document.querySelector('body')
      el.style.overflow = "hidden"
    }
  }
}
</script>

<style scoped>
/* Modal CSS */
.close-modal {
  display: none;
  position: absolute;
  top: 30px;
  right: 27px;
  padding-top: 20px;
  margin-top: -20px;
  height: 40px;
  cursor: pointer;
}

.modal-projeto {
  border: 3px solid white;
  background-color: black;
  width: 90%;
  height: auto;
  position: fixed;
  top: -100%;
  left: 5%;
  z-index: 10;
  overflow: hidden;
  padding: 40px;
  overflow-y: auto;
  transition: 0.5s;
  max-height: calc(100vh - 145px);

}

.modal-background-ativo {
  opacity: 1 !important;
  z-index: 9 !important;
}

.modal-ativo {
  top: 10%;
  left: 5%;
}

.modal-flex {
  display: flex;
}

.modal-background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(7, 7, 7, 0.62);
  z-index: -10;
  opacity: 0;
  transition: 0.5s;
}

.img-tela {
  max-width: 490px;
  max-height: 212px;
  height: calc(40vw - 2px);
}

.imagem-modal {
  background-color: transparent;
  max-width: 490px;
  max-height: 214px;
  width: 100%;
  height: calc(40vw - 30px);
  position: relative;
  padding: 1px;
  display: flex;
  justify-content: center;
}

.name-imagem span {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #3183FF;

}



.informacoes {
  width: calc(100% - 400px);
  margin-left: 20px;
}

.informacoes .titulo-info {
  font-size: 40px;
  margin-top: 15px;
}

.informacoes .descricao {
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
}

.informacoes .sub-titulo {
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
}

.informacoes ul li {
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
}

.botoes {
  margin-top: 10px;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.titulo {
  font-family: 'Poppins' !important;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
}

.portifolio {
  min-height: 100px;
  width: 100%;
  background: #070707;
  display: flex;
  flex-wrap: wrap;
}

.item {
  background-color: transparent;
  height: 200px;
  width: 200px;
  cursor: pointer;
  transition: 0.2s;


}

.img-port {
  object-fit: cover;
  height: 200px;
  width: 200px;
  transition: 0.2s;
}

.item:hover .img-port {
  scale: 1.3;
  margin-left: 30px;
  z-index: 3;
}

.ver {
  width: 100%;
  text-align: center;
  background-color: white;
  height: 75px;
  font-weight: 700;
  font-size: 25px;
  padding: 20px;
  color: #000000;
  opacity: 0;
  transition: 0.3s;
  margin-top: -135px;
  position: relative;
}

.item:hover .ver {
  opacity: 1;
  scale: 1.3;
  margin-left: 30px;
}

.ver:hover .img-port {
  scale: 1.3;
}

@media (max-width: 1110px) {
  .close-modal {
    display: unset;
  }


  .modal-projeto {

    width: 100%;
    height: 100%;
    top: -100%;
    left: 0px;
    z-index: 10;
    overflow: hidden;
    padding: 40px;
    overflow-y: auto;
    padding-top: 60px;
    max-height: unset;
  }

  .modal-ativo {
    top: 0%;
    left: 0%;
  }

  .modal-flex {
    display: block;
  }

  .imagem-modal {
    max-width: 490px;
    max-height: 214px;
    width: 100%;
    height: calc(47vw - 30px);
    display: block;
    margin: auto;
  }

  .name-imagem span {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #3183FF;

  }

  .informacoes {
    width: 100%;
    margin-left: 0px;
  }

  .botoes {
    height: 70px;
    width: 100%;
    display: grid;
    margin: auto;

  }

}

@media (max-width:665px) {
  .modal-projeto {
    padding: 30px;
    padding-top: 60px;
    max-height: unset;

  }

  .imagem-modal {
    max-width: 490px;
    max-height: 212px;
    width: 100%;
    height: calc(40vw);
  }

  .informacoes .titulo-info {
    font-size: 30px;
    line-height: 40px;
  }

  .informacoes .descricao {
    font-size: 16px;
    line-height: 24px;
  }

  .informacoes .sub-titulo {
    font-size: 24px;
    line-height: 20px;
  }

  .informacoes ul li {
    font-size: 16px;
    line-height: 24px;
  }

  .titulo {
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .item {
    height: 100px;
    width: 100px;
  }

  .img-port {
    object-fit: cover;
    height: 100px;
    width: 100px;
    transition: 0.5s;
    z-index: 1;
  }

  .ver {
    margin-top: calc(50% - 120px);
    width: calc(100%);
    text-align: center;
    background-color: white;
    height: 40px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    padding: 10px;
    color: #000000;
    transition: 0.3s;
  }
}

@media (min-width: 515px) {}
</style>
