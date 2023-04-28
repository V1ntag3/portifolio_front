<template>
  <div class="tela">
    <div id="cert" class="titulo"> <span>portifólio</span> </div>
    <div class="portifolio">
      <div class="item">
        <div class="ver">ver projeto</div>
      </div>
      <div style="background-color: blue;" class="item">
        <div class="ver">ver projeto</div>
      </div>

      <div style="background-color: aqua;" class="item">
        <div class="ver">ver projeto</div>
      </div>

      <div style="background-color: blueviolet;" class="item">
        <div class="ver">ver projeto</div>
      </div>

      <div style="background-color: yellow;" class="item">
        <div class="ver">ver projeto</div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'TelaTree',
  components: {

  },
  created() {

  }
}
</script>

<style scoped>
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

.portifolio {
  min-height: 100px;
  width: 100%;
  background: #070707;
  display: flex;
  flex-wrap: wrap;
}

.item {
  background-color: gray;
  height: 200px;
  width: 200px;
  cursor: pointer;
  transition: 0.2s;
}

.item:hover {
  scale: 1.3;

}

.ver {
  margin-top: calc(50% - 40px);
  width: calc(100% - 40px);
  text-align: center;
  background-color: white;
  height: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  padding: 20px;
  color: #000000;
  opacity: 0;
  transition: 0.3s;
}

.item:hover .ver {
  opacity: 1;
}

@media (max-width: 1110px) {
  .titulo {
    margin-bottom: 5vh;
  }
}

@media (max-width:665px) {
  .titulo {
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .item {
    height: 100px;
    width: 100px;
  }

  .ver {
    margin-top: calc(50% - 20px);
    width: calc(100% - 20px);
    text-align: center;
    background-color: white;
    height: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    padding: 10px;
    color: #000000;
    transition: 0.3s;
  }
}</style>
