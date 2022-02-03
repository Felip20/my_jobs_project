<template>
   <h1 >Jobs</h1>
   <div class="jobs" v-for="job in jobs" :key="job.id">
       <router-link :to="{name:'JobDetail',params:{id:job.title}}">
           <h1>{{job.title}}</h1>
       </router-link>
       
   </div>
</template>

<script>
export default {
    data(){
        return{
            jobs:[
                {id:"1", title:"project manager", detail:"creative coder project manager"},
                {id:"2", title:"team manager", detail:"creative coder team manager"},
                {id:"3", title:"designer", detail:"creative coder design manager"}
            ]
        }
    }
}
</script>

<style>
.jobs{
    color: red;
    
}
</style>