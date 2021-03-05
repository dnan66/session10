<template>
    <div>
        <h2>{{typeProfile}} Profile </h2>
        {{profile_val}}
        <hr>
        <label for="profile">New profile</label> &nbsp;&nbsp;
        <input type="text" id="profile" v-model="nprofile">
        <hr>
        <button @click="goto">Go to</button>

    </div>
</template>
<script>
    export default {
        name: 'Profile',
        data() {
            return {
                typeProfile : null,
                nprofile:null
            }
        },
        mounted(){
            this.typeProfile = 'BackEnd'
            console.log('mounted component Profile  ')
        },
        created() {
            console.log('created component Profile')
        },
        computed: {
            profile_val() {
                return this.$route.params.value
            }
        },
        beforeRouteEnter (to, from, next) {
            // called before the route that renders this component is confirmed.
            // NO access to `this` component instance,
            console.log('Component route guard : beforeRouteEnter activated profile')
            next()
        },
        beforeRouteUpdate (to,from,next) {
            // called when the route that renders this component has changed.
            // This component being reused (by using an explicit `key`) in the new route
            // For example, for a route with dynamic params `/profile/:value`, when we
            // navigate between `/profile/dev` and `/profile/manager`, the same `Profile` component instance
            // has access to `this` component instance.
            console.log('Component route guard : beforeRouteUpdate activated, change to:'+to.path)
            next()
        },
        beforeRouteLeave (to, from, next) {
            // called when navigated away from.
            // has access to `this` component instance.
            console.log('Component route guard : beforeRouteLeave activated'+ ' quite profile:' + this.profile)
            next()
        },
        methods: {
            goto() {
                this.$router.push({path: `/profile/${this.nprofile}`})
            }
        }
    }
</script>