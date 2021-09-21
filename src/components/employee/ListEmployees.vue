<template lang="">

    <div class="row mt-2" v-if="showForm">
        <AddEmployee @add="addEmployee($event)" />        
    </div>
    <div class="row mt-2">
        <div class="col-md-12">
            <button @click="displayForm()" 
            class="btn btn-sm "
            :class="{'btn-dark': showForm, 
                     'btn-success': !showForm}"
            >
            {{ showForm ? 'Closed' : 'New'}}
        </button>
        </div>
    </div>
    <div class="row mt-2">
           <DetailEmployee  v-for="employee in Employees" :key="employee.id"
                            :employee="employee"
                            @delete="deletedEmployee($event)"
            />
    </div>
</template>
<script>

import DetailEmployee from './DetailEmployee.vue';
import AddEmployee from './AddEmployee.vue';

export default {
    components: {
        DetailEmployee,
        AddEmployee,
    },
    data() {
        return {
            showForm: false,
            title: "List Employees",
            Employees: [
                { id: 1, title: "Team work IT", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo6JfE0uf91zIK4f4npXtxmgWxs6X7DRLQMw&usqp=CAU"},
                { id: 2, title: "Learn Laravel", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/aL2OXWSpTguVo0azLaPb"},
                { id: 3, title: "Learn JavaScript", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/H9QyEOsSLG05qNb2kC0V"},
                { id: 4, title: "Learn Spring Boot", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/5miGPBu8RbCSc4hCzN39"},
            ]
        }
    },
    methods: {
        deletedEmployee(id) {
            this.Employees = this.Employees.filter(employee => employee.id != id);
        },
        addEmployee(employee) {
            this.Employees = [employee, ...this.Employees];
            this.showForm = false;
        },
        displayForm() {
            this.showForm = !this.showForm;
        }
    },
}
</script>
<style lang="">
    
</style>