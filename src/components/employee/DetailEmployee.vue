<template lang="">
<div class="col-md-4" >
    <div class="card mt-2">
                <img class="card-img-top" :src="employee.image" :alt="employee.title">
                <div class="card-body">
                    <h5 class="card-title"> {{ employee.title }} </h5>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus corrupti exercitationem ullam accusantium! Velit delectus natus neque sequi corporis.
                    </p>
                </div>
                <div class="card-footer">
                    <button @click="onDeleted(employee.id)" class="btn btn-sm btn-danger">Delete</button>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['employee'],
    data() {
        return {
            
        }
    },
    methods: {
        onDeleted(id) {
            this.$emit("delete", id);
        }
    }
}
</script>
<style lang="">
    
</style>