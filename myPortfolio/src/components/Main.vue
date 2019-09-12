<template>
  <div id="main" class="mainText">
    <vue-typer id="title" :text='["Welcome!!","Thanks for coming"]'></vue-typer>
    <p id="comment">{{ msg }}</p>
    <Navigation></Navigation>
    <a href="#about"><div class="arrow"></div></a>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  components: {
    Navigation
  },
  name: 'Main',
  data () {
    return {
      msg: "creator's by Miyuki Takekawa"
    }
  }
}
</script>
