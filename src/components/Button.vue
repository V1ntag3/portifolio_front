<template>
    <div :onclick="acao" :class="'botao-completo ' + classB">
        <div class="botao">{{ texto }}</div>
        <div class="botao botao-sombra">{{ texto }}</div>
    </div>
</template>
  
<script>



export default {
    name: 'ButtonApp',
    props: {
        acao: String,
        texto: String,
        classB: String

    },
    data() {
        return {

        }
    }
}
</script>
  
<style>
.botao-completo {
    cursor: pointer;
    transition: 0.5s;
    float: right;
    height: 56px;
}

.botao-completo:hover {
    scale: 1.1;

}

.botao {
    background-color: #3183FF;
    padding: 8px 15px;
    width: max-content;
    color: white;
    z-index: 2;
    position: relative;
    font-weight: 700;
    font-size: 24px;
    z-index: 2;
}

.botao-sombra {
    background-color: #034CBA;
    position: relative;
    top: -45px;
    left: 9px;
    color: transparent;
    z-index: 1;
}

.button-modal {
    margin-left:30px;
}
@media (max-width: 1110px) {
    .button-modal{
        display: block;
        margin-bottom: 20px;
    }
}

</style>
  