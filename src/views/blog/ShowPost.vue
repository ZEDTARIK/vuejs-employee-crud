<template lang="">
    <div v-if="post" class="col-md-12">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"> {{ post.title }} </h5>
                <p class="card-text">
                    {{ post.content }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['id', 'slug'],
        data() {
            return {
               post: null,
            }
        },
        mounted() {
            fetch(`http://localhost:5000/posts/${this.id}`)
            .then(res => res.json())
            .then(data => this.post = data)
            .catch(err => console.log(err));
        }
}
</script>
<style lang="">
    
</style>