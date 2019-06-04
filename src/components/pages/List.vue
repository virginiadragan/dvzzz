<script>
export default {
    name: 'List',
    data () {
        return {
            headers: [
                { text: 'Nume', value: 'nume' },
                { text: 'Product', value: 'product' }
            ]
        }
    },
    computed: {
        listFromStore () {
            return this.$store.getters.getList
        }
    }
}
</script>

<template>  
    <v-data-table
    :headers="headers"
    :items="listFromStore"
    class="elevation-1"
  >
    <template v-slot:items="pr">
        <td>{{ pr.item.name }}</td>
        <td class="text-xs-right">{{ pr.item.product }}</td>  
    </template>
  </v-data-table>
</template>