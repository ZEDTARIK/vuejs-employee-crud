<template lang="">
    <div>
            dispaly : {{ id }}
            Slug : {{ slug }}
    </div>
</template>
<script>
export default {
    props: ['id', 'slug'],
        data() {
            return {
               // id: this.$route.params.id,
            }
        },
}
</script>
<style lang="">
    
</style>