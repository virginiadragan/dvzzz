<script>
  export default {
    name: 'Select',
    data: () => ({
        selected: '',
        items: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }),
    watch: {
        selected: function (val) {
            this.$store.commit('setProduct', val)
        }
    }
  }
</script>

<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="items"
          v-model="selected"
          label="Select item"
          solo
        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>