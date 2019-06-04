<script>
  export default {
    name: 'Reset',
    methods: {
        clearList: function(){
            this.$store.commit('clearList')
        } 
    }
  }
</script>

<template>
  <v-layout align-center>
    <v-flex xs12 sm4 text-xs-center>
      <div>
        <v-btn small color="primary" v-on:click="clearList">Reset</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>