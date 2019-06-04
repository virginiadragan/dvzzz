<script>
  export default {
    name: 'Submit',
    methods: {
        createList: function(){
            let list = {name: this.$store.getters.getName, product:  this.$store.getters.getProduct}
            this.$store.commit('setList', list)
        } 
    }
  }
</script>

<template>
  <v-layout align-center>
    <v-flex xs12 sm4 text-xs-center>
      <div>
        <v-btn small color="primary" v-on:click="createList">Submit</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>