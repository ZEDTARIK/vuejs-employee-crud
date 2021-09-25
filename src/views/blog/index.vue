<template lang="">

    <div class="col-md-6" v-for="post in Posts" :key="post.id">
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


</template>
<script>
    export default {
        data() {
            return {
                Posts: [
                    {
                        id: 1,
                        title: "Learn Angular",
                        slug: "learn-angular",
                        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, deserunt."
                    },
                    {
                        id: 2,
                        title: "Learn JavaScript",
                        slug: "learn-javascript",
                        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, deserunt."
                    }
                ],
            }
        },
    };
</script>
<style lang="">
</style>