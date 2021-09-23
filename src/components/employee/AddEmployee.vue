<template lang="">
    <div class="col-md-6 mx-auto">
        <div class="card">
            <div class="card-header">
                Add New Employee
            </div>
            <div class="card-body">

                <div class="form-group">
                    <label for="">Title</label>
                    <input ref="title" type="text" class="form-control" placeholder="Title">
                </div>

                <div class="form-group">
                    <label for="">URL Image</label>
                    <input ref="image" type="text" class="form-control" placeholder="Title">
                </div>

                <div class="form-group">
                    <label for="">Department</label>
                    <input v-model="dapartement" type="text" class="form-control" placeholder="department">
                </div>


                <div class="form-group">
                    <button @click="addNewEmployee()" class="btn btn-sm btn-block btn-success">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dapartement: '',
            }
        },
        methods: {
            addNewEmployee() {
                let title = this.$refs.title.value;
                let image = this.$refs.image.value;

                if (title == "" || image == "") {
                    return;
                }

                const employee = {
                    title,
                    image,
                    dapartement: this.dapartement,
                }

                this.$emit("add", employee);
                this.$refs.title.value = "";
                this.$refs.image.value= "";
            }
        },
    }
</script>
<style lang="">

</style>