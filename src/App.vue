<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
  <router-view/>
    <button @click="redirect">Redirect</button>

    <button @click="goForward">Go forward</button>

    <button @click="goBack">Go back</button>
</template>
  <script>
    export default{
      methods:{
        goBack(){
            this.$router.go(-1)
        },
        goForward(){
          this.$router.go(1)
        },
        redirect(){
          this.$router.push({name:'Home'})
        }
      }
    }
  </script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  border-radius: 10px;
  text-decoration: none;
}

#nav .router-link-exact-active { 
  background: crimson;
  color: white;
  padding: 10px;
}
button{
  color: white;
  background: black;
  border-radius: 5px;
}
</style>
