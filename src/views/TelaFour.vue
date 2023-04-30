<template>
  <div class="tela">
    <div id="cont" class="titulo"> <span>contate me</span> </div>
    <div class="dados">
      <div class="texto">
        {{ dados }}
      </div>
      <div class="celular"><img src="../assets/images/whatsapp.svg" alt="" srcset=""> {{ celular }}</div>
      <div class="email"><img src="../assets/images/email.svg" alt=""> {{ email }}</div>

    </div>
      <input type="text" placeholder="nome" class="input" style="margin-top: 40px;" v-model="nome">
      <div v-if="erros.nome" class="erro"></div>
      <input type="text" placeholder="assunto" class="input" v-model="assunto">
      <div v-if="erros.assunto" class="erro"></div>
      <textarea name="" id="" cols="30" rows="10" placeholder="mensagem" class="input" v-model="mensagem"></textarea>
      <div v-if="erros.mensagem" class="erro"></div>
    <div style="margin-top: 25px; margin-right: 15vw;    height: 100px;">
      <div @click="validarMensagem()">
      <ButtonApp texto="enviar" />
    </div>
    </div>
    <div class="footid" style="margin-bottom: 20px;"> <span><a :href="gitHub" _black>BY V1NTAG3</a> </span> </div>
  </div>
</template>

<script>
import ButtonApp from "../components/Button.vue"
export default {
  name: 'TelaTree',
  components: {
    ButtonApp
  },
  data() {
    return {
      gitHub: "https://github.com/V1ntag3",
      dados: "Eu sou um desenvolvedor em busca de propostas de trabalho ou freelas, para mais perguntas ou propostras basta entrar em contato pelos canais abaixo ou preenchendo o formulário.",
      celular: "(86) 9 99851 - 4018",
      email: "marcos.vinicius.r.alencar@gmail.com",
      celularLimpo:"86998514018",
      nome:"",
      assunto:"",
      mensagem:"",
      erros:{
        nome:false,
        assunto:false,
        mensagem:false
      }
    }
  },
  methods: {
    validarMensagem(){
      this.erros.nome = this.nome == "" ? true : false
      this.erros.assunto = this.assunto == "" ? true : false
      this.erros.mensagem = this.mensagem == "" ? true : false  
      if(!this.erros.nome && !this.erros.assunto && !this.erros.mensagem) {
        var url = "https://wa.me/+55" + this.celularLimpo + "?text=Olá sou " + this.nome + ".%0A" + "Estou entrando em contato para "+ this.assunto + "%0A" + this.mensagem
        window.open(url);
      }
    }
  }
}
</script>

<style scoped>
@import url(../assets/fonts-Abster.css);
.erro{
  height: 1px;
    border-bottom: #ff3434 2px solid;
    width: 100%;
    width: calc(100% - 30vw);
    margin: -10px auto 10px auto;
}
.titulo {
  font-family: 'Poppins-Bold' !important;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
}

.dados {
  height: auto;
  width: 100%;
  background-color: #070707;
  padding: 20px 14vw;
}

.texto {
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 10px;
}

.email,
.celular {
  font-weight: 400;
  font-size: 14px;
  padding: 2px 0px;
}

.email img,
.celular img {
  margin-right: 5px;
}

.input {
  background-color: #070707;
  color: #FFFFFF;
  display: block;
  width: calc(100% - 30vw);
  padding: 25px 0px 20px 20px;
  margin: 10px 15vw 10px 15vw;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}


.footid span {
  width: 100%;
  text-align: center;
  display: block;
  transition: 0.5s;
  cursor: pointer;
}

.footid span a {
  font-family: ABSTER;
  text-decoration: none;
  color: #FFFFFF;
}

.footid span:hover {
  opacity: 0.5;

}

::-webkit-input-placeholder {
  color: #FFFFFF;
}

@media (max-width: 1110px) {}

@media (max-width:665px) {
  .titulo {
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .dados {
    padding: 20px 9vw;
  }

  .input {
    width: calc(100% - 18vw);
    margin: 10px 9vw;
  }
  .erro{

    width: calc(100% - 18vw);


  }
}</style>
