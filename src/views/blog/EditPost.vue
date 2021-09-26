<template lang="">
    <div class="row my-3">
        <div class="col-md-6 mx-auto">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Title</h4>

                    <form @submit.prevent="updatePost()">

                        <div class="form-group">
                            <label for="title">title</label>
                            <input v-model="post.title" id="title" type="text" class="form-control" placeholder="Title">
                        </div>

                        <div class="form-group">
                            <label for="content">content</label>
                            <textarea v-model="post.content" class="form-control" id="content" cols="5"
                                rows="2"></textarea>
                        </div>

                        <div class="form-group">
                            <button class="btn btn-warning btn-block">Update</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['id'],
        data() {
            return {
                url: `http://localhost:5000/posts/${this.id}`,

                post: {
                    title: '',
                    content: '',
                }
            }
        },
        mounted() {
            fetch(this.url)
                .then(res => res.json())
                .then(data => {
                    this.post = data
                })
                .catch(err => console.log(err.message));
        },
        methods: {
            updatePost() {
                fetch(this.url,
                    {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(this.post)
                    })
                    .then(res => this.$router.push('/blog') )
                    .catch(err => console.log(err.message));
            }
        },
    }
</script>
<style lang="">

</style>