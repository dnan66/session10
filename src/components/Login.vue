<template>
    <body>
    <div class="lcontainer">
        <p style="color: white">Input credentials</p>
        <input type="text" v-model="name" placeholder="login name">
        <br>
        <input type="password" v-model="passw" placeholder="type password">
        <hr>
        <button @click="sendCredentials">Login</button>
        <br>
        <br>
        <label for="roles" style="color: white">Roles </label>
       <select id="roles" v-model="role_selected">
           <option disabled value="">Please select one</option>
           <option v-for="r in roles " :key="r.index">{{r}}</option>
       </select>
        <br><br>
        <span style="color: white;font-family: 'American Typewriter';font-weight: bold">{{ role_selected }}</span>

        <br><span style="color: yellow">Level:{{level}}</span>
    </div>
    </body>
</template>
<script>
    export default {
        name:'Login',
        data() {
            return {
                name:null,
                passw: null,
                auth:false,
                roles:[],
                role_selected:null,
            }
        },
        mounted() {
            this.roles = this.$store.getters.getRoles

        },
        computed: {
            level() {
                let level = 0

                if(!this.role_selected) return 0

                if (this.role_selected.match('SalesManager')) {
                    this.$store.commit('setLevel',1)
                    level =1
                } else {
                    this.$store.commit('setLevel',0)
                }
                return level
            }
        },
        methods: {
            sendCredentials() {
                alert('Credentials stored ...')
                localStorage.setItem('login_name',this.name)
                localStorage.setItem('passw',this.passw)
                console.log('jump from :',this.$route.path)
                this.$router.push('/login',() => {  // e.g. of using arrow function for on complete
                    console.log('landing on page : ',this.$route.path)
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .lcontainer {
        padding-top:20px;
        height:250px;
        width:200px;
        background-color: crimson;
    }

</style>