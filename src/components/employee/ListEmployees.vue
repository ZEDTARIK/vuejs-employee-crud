<template lang="">

  <div class="row">
      <div class="col-md-6 mx-auto">
        <teleport to='#alertMsg' v-if="alertMsgDeleted">
        
            <div class="alert alert-danger">
                Employee Deleted !!                
            </div>
        </teleport >

        <teleport to='#alertMsg' v-if="alertMsgAdd">
        
            <div class="alert alert-success">
                Employee Add SuccessFully !!                
            </div>
        </teleport >

      </div>
  </div>

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
            alertMsgDeleted: false,
            alertMsgAdd: false,
            showForm: false,
            title: "List Employees",
            Employees: [
                { id: 2, dapartement: "IT", title: "Learn Laravel", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/aL2OXWSpTguVo0azLaPb"},
                { id: 3, dapartement: "IT", title: "Learn JavaScript", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/H9QyEOsSLG05qNb2kC0V"},
                { id: 4, dapartement: "IT", title: "Learn Spring Boot", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/5miGPBu8RbCSc4hCzN39"},
            ]
        }
    },
    methods: {
        deletedEmployee(id) {
            this.Employees = this.Employees.filter(employee => employee.id != id);
            this.alertMsgDeleted = true;
            setTimeout(() => {
                    this.alertMsgDeleted = false;
            }, 3000);
        },
        addEmployee(employee) {
            this.Employees = [employee, ...this.Employees];
            this.showForm = false;
            this.alertMsgAdd = true;
            setTimeout(() => {
                    this.alertMsgAdd = false;
            }, 3000);
        },
        displayForm() {
            this.showForm = !this.showForm;
        }
    },
}
</script>
<style lang="">
    
</style>