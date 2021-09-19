<template lang="">
    <div class="row mt-2">
        <div class="col-md-4" v-for="(employee, index) in employees" :key=index>

            <div class="card mt-2">
                <img class="card-img-top" :src="employee.image" :alt="employee.title">
                <div class="card-body">
                    <h5 class="card-title"> {{ employee.title }} </h5>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus corrupti exercitationem ullam accusantium! Velit delectus natus neque sequi corporis.
                    </p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-sm btn-danger">Delete</button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "List Employees",
            employees: [
                { id: 1, title: "Learn Angular", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/nrOHB2iQTIiGe7hHX9O0"},
                { id: 2, title: "Learn Laravel", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/aL2OXWSpTguVo0azLaPb"},
                { id: 3, title: "Learn JavaScript", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/H9QyEOsSLG05qNb2kC0V"},
                { id: 4, title: "Learn Spring Boot", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/5miGPBu8RbCSc4hCzN39"},
            ]
        }
    },
}
</script>
<style lang="">
    
</style>