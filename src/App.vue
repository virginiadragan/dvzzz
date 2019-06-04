<template>
  <v-app>
      <Menu></Menu>
      <router-view/>    
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import Menu from './components/blocks/Menu'
export default {
  name: 'App',
  components: {
    Menu
  },
  data () {
    return {
      //
    }
  }
}
</script>
