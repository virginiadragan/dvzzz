<script>
  export default {
    name: 'Input',
    data: () => ({
        name: '',
        valid: false,
        firstname: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters'
        ]
    }),
    watch: {
        name: function (val) {
        this.$store.commit('setName', val)
        }
    }
  }
</script>
<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>