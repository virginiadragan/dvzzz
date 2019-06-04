<script>
import Input from '@/components/blocks/Input'
import Select from '@/components/blocks/Select'
import Submit from '@/components/blocks/Submit'
import Reset from '@/components/blocks/Reset'
  export default {
    name: 'Form',
    components: {
        Input,
        Select,
        Submit,
        Reset
    },
  }
</script>

<template>
    <div>
        <Input/>
        <Select/>
        <Submit/>
        <Reset/>
    </div>
</template>