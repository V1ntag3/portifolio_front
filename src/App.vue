<template>
  <MenuApp />
  <TelaOne />
  <TelaTwo />
  <TelaThree />
  <TelaFour />
</template>

<script>
import MenuApp from "./components/Menu.vue"
import TelaOne from "./views/TelaOne.vue"
import TelaTwo from "./views/TelaTwo.vue"
import TelaThree from "./views/TelaThree.vue"
import TelaFour from "./views/TelaFour.vue"

export default {
  name: 'App',
  components: {
    MenuApp,
    TelaOne,
    TelaTwo,
    TelaThree,
    TelaFour
  }
}
</script>

<style>
@import url(assets/fonts-Abster.css);
@import url(assets/fonts-Poppins.css);
@import url(assets/fonts-Bethany.css);
* {
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  font-family: 'Poppins-Regular';
  list-style-type: none;
  scroll-behavior: smooth;
  font-style: normal;
  color: #FFFFFF;

}
.bethany{
  font-family: 'Bethany';
}
body {
  background-color: #4D4949;
}


</style>
