<template>
    <body>
    <div class="square">
        <span style="font-style: italic;font-weight: bold;font-size: 12px">User login name: {{loginName}}</span>
        <hr>
        <button @click="goto">goto</button>
        <br>
        <br>
        <input type="checkbox" id="enableback" v-model="eback">
        <label id="ennableback">enable back</label>
        <button @click="backto" :disabled="!eback">back</button>
        <h5>use Router or
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API" target="_blank" >Browser history API</a>
        </h5>
    </div>
    </body>
</template>
<script>
    export default {
        name:'Session',
        data() {
            return {
                prog_sid:23,
                eback:false,
                loginName:null
            }
        },
        mounted() {
           this.loginName = localStorage.getItem('login_name')
        },
        methods:{
            goto() {
                this.$router.push({path:'/'})                   //****** using object
                //this.$router.push({path:'/session/2'})                 //****** using object path
                /*
                this.$router.push({name:'Session' , params: {sid:3}}, () => {
                    console.log('route not found...') // using onAbort call
                    this.$router.push('/session')
                })  //****** using object name & params
                */
                // ***** think about /session/4?client=ametras
                //this.$router.push({path:'/session/4', query: { client: 'ametras' }})
                //this.$router.push({path:`/session/${this.prog_sid}`})
            },
            backto() {
                this.$router.go(-1)
                //window.history.go(-1)
            }

        }
    }
</script>
<style lang="scss" scoped>
    .square {
        height: 200px;
        width: 200px;
        background-color: orange;
    }
</style>