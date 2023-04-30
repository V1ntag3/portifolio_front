<template>
  <div class="tela">
    <div id="cert" class="titulo"> <span>contate me</span> </div>
    <div class="dados">
      <div class="texto">
        {{ dados }}
      </div>
      <div class="celular"><img src="../assets/images/whatsapp.svg" alt="" srcset=""> {{ celular }}</div>
      <div class="email"><img src="../assets/images/email.svg" alt="" > {{ email }}</div>

    </div>

    <div class="inputs">
      <input type="text" placeholder="nome" class="input" style="margin-top: 40px;">
      <input type="text" placeholder="assunto" class="input">
      <textarea name="" id="" cols="30" rows="10" placeholder="mensagem" class="input"></textarea>
    </div>
    <div style="margin-top: 25px; margin-right: 15vw;    height: 100px;">
      <ButtonApp texto="enviar" />
    </div>
    <div class="footid" style="    margin-bottom: 20px;"> <span><a :href="gitHub" _black>BY V1NTAG3</a> </span> </div>
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
      email: "marcos.vinicius.r.alencar@gmail.com"
    }
  },
  created() {

  }
}
</script>

<style scoped>
@import url(../assets/fonts-Abster.css);

.titulo {
  font-family: 'Poppins-Bold' !important;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #FFFFFF;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
}

.dados {
  height: auto;
  width: 100%;
  background-color: #070707;
  padding: 20px 15vw;
  background-color: #070707;

}

.texto {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #FFFFFF;
  margin-bottom: 10px;
}

.email,
.celular {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #FFFFFF;
  padding: 2px 0px;
}
.email img,
.celular img{
 margin-right: 5px;
}
.input {
  background-color: #070707;
  color: #FFFFFF;
  display: block;
  margin-bottom: 20px;
  width: calc(100% - 30vw);
  padding: 25px 0px 20px 20px;
  margin: 10px 15vw 10px 15vw;
  border-radius: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #F5F4F4;
}


.footid span {
  width: 100%;

  text-align: center;
  display: block;
  transition: 0.5s;
  cursor: pointer;
}
.footid span a{
  font-family: ABSTER;
  color: #FFFFFF;
  text-decoration: none;
}
.footid span:hover {
  opacity: 0.5;

}
::-webkit-input-placeholder {
  color: #FFFFFF;
}

@media (max-width: 1110px) {

}

@media (max-width:665px) {
  .titulo {
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .dados{
    padding: 20px 10vw;
  }
  .input{
    width: calc(100% - 20vw);
    margin: 10px 10vw;
  }
}</style>
