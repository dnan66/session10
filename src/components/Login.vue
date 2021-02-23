<template>
    <body>
    <div class="lcontainer">
        <p style="color: white">Input credentials</p>
        <input type="text" v-model="name" placeholder="login name">
        <br>
        <input type="password" v-model="passw" placeholder="type password">
        <hr>
        <button @click="sendCredentials">Send</button>
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
            }
        },
        methods: {
            sendCredentials() {
                alert('Credentials received ...')
                this.$router.push('/',()=>{
                    console.log('go to home page')
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .lcontainer {
        padding-top:20px;
        height:200px;
        width:200px;
        background-color: crimson;
    }

</style>