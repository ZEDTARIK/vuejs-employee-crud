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
                    
                    <select v-model="dapartement" class="form-control" >
                        <option v-for="dep in Depatements" :key="dep.id"
                            :value="dep.id"> {{ dep.name }} </option>
                    </select>
                    
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
                Depatements: [
                    {id: 1, name: "IT"},
                    {id: 2, name: "RH"},
                    {id: 3, name: "Comptability"},
                    {id: 4, name: "Finance"},
                ],
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
                    dapartement: this.Depatements.find(dep => dep.id == this.dapartement).name,
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