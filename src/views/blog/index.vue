<template lang="">

    <div v-if="Posts.length > 0" class="col-md-6" v-for="post in Posts" :key="post.id">
        <div class="card border-success mb-3">
            <div class="card-header text-center">{{ post.title }}</div>
            <div class="card-body">
                {{ post.content }}
            </div>
            <div class="card-footer">
                <router-link 
                    :to="{ name: 'Show-Post', 
                           params: { id: post.id , slug: post.slug }}"
                    class="btn bt-sm btn-dark">Detail
                </router-link>
            </div>
        </div>
    </div>
    <div v-else class="text-center">
        ...looding 
    </div>


</template>
<script>
    export default {
        data() {
            return {
                Posts: [],
            }
        },
        mounted() {
                fetch(`http://localhost:5000/posts`)
                    .then(res => res.json())
                    .then(data => this.Posts = data)
                    .catch(err => console.log(err));
           
        },
    };
</script>
<style lang="">
</style>