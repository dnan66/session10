<template>
    <div class="zone">
        <h4>Show Date</h4>
        <h5>{{ c_date }}</h5>
        <br>
    </div>
</template>
<script>
    export default {
        name:'Calendar',
        data() {
            return {
                c_date:null,
            }
        },
        mounted() {
            this.c_date = new Date()
            console.log('mounted component Calendar')
        },
        created() {
            console.log('created component Calendar')
        }
    }
</script>
<style lang="scss" scoped>

    .zone {
        background-color: lightsalmon;
        color:black;
    }

</style>