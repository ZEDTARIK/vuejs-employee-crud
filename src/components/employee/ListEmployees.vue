<template lang="">
    <div class="row mt-2">
           <DetailEmployee  v-for="employee in Employees" :key="employee.id"
                            :employee="employee"
                            @delete="deletedEmployee($event)"
            />
    </div>
</template>
<script>

import DetailEmployee from './DetailEmployee.vue';

export default {
    components: {
        DetailEmployee,
    },
    data() {
        return {
            title: "List Employees",
            Employees: [
                { id: 1, title: "Learn Angular", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/nrOHB2iQTIiGe7hHX9O0"},
                { id: 2, title: "Learn Laravel", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/aL2OXWSpTguVo0azLaPb"},
                { id: 3, title: "Learn JavaScript", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/H9QyEOsSLG05qNb2kC0V"},
                { id: 4, title: "Learn Spring Boot", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/5miGPBu8RbCSc4hCzN39"},
            ]
        }
    },
    methods: {
        deletedEmployee(id) {
            this.Employees = this.Employees.filter(employee => employee.id != id);
        }
    },
}
</script>
<style lang="">
    
</style>