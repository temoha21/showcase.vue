<template>
  <div id="app">
    <transition name="custom-classes-transition"
                enter-active-class="animated fadeInDown">
      <div v-if="ready">
        <header-menu></header-menu>
      </div>
    </transition>
    <transition name="custom-classes-transition"
                  enter-active-class="animated slideInLeft">
      <router-view></router-view>
    </transition>
    <transition name="custom-classes-transition"
                enter-active-class="animated fadeInUp">
      <footer-menu v-if="ready"></footer-menu>
    </transition>
  </div>
</template>

<script>
  import headerMenu from './components/layouts/header.vue'
  import footerMenu from './components/layouts/footer.vue'
export default {
    name: 'app',
    components: {
      headerMenu,
      footerMenu
    },
    data () {
      return {
        ready: false
      }
    },
    mounted () {
      setTimeout(this.setReady, 100)
    },
    methods: {
      setReady () {
        this.ready = !this.ready
      }
    }
}
</script>
<style scoped lang="sass">
  @import "./assets/css/bootstrap.min.css";
  @import "./assets/css/style.css";
</style>
