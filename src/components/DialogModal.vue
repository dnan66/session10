<template>
    <body>
    <!-- INSERT MODAL HTML CODE -->
    <div id="dmodal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <div class="modal-header">
                <span v-if="hasCloseFunction"  class="close">&times;</span>
                <h2>Dialog Form </h2>
            </div>
            <div class="modal-body">
                <h4>
                    <div class="input-container">
                        <i class="fa fa-shield icon"></i>
                        <input v-model="input_key" type="text" placeholder="Input Key" class="input-field">
                    </div>
                    <p style="font-size: 10px">Input Key should have 10 digits , current lenght: {{input_check}}</p>
                    <button class="button_check" v-on:click="$emit('check')" :disabled="input_check < 10 || input_check > 10" @click="verifyInputKey">
                        Check Key
                    </button> &nbsp;&nbsp;
                    <button class="button_check" :disabled="input_check < 10 || input_check > 10" v-on:click="$emit('set',input_key)">
                        Send Key
                    </button>
                    <br><br>
                    <!-- using v-model -->

                    <div class="input-container">
                        <i class="fa fa-exchange icon"></i>
                        <input v-bind:value="modelData" v-on:input="$emit('input',$event.target.value)" type="text" placeholder="....modelData" class="input-field">
                    </div>
                </h4>
                <h5>
                    Dialog test : parent child communication using props, events, v-model
                </h5>
            </div>
            <div class="modal-footer">
                <h3>@ Test components communication</h3>
            </div>
        </div>
    </div>
    </body>
</template>
<script>
    export default {
        name:'DialogModal',
        props: {
            show: Boolean,
            hasCloseFunction: Boolean,
            // using v-model in parent
            modelData:null,
        },
        data() {
            return {
                input_key: null,
            }
        },
        mounted() {
            // set close function if possible
            if(this.hasCloseFunction) {
                // get modal element
                let d_modal = document.getElementById('dmodal')
                // get close element
                let span = document.getElementsByClassName("close")[0];
                span.onclick = () => { // using arrow function :o)
                    d_modal.style.display = 'none'
                    // init input value
                    this.input_key = null
                }
            }
            if(this.show){
                this.showModal()
            }
        },
        methods: {
            closeModal(condition) {
                if( condition ) {
                    // close modal
                    let d_modal = document.getElementById('dmodal')
                    d_modal.style.display = 'none'
                } else {
                    // show an warning message
                    alert('Not ok ...cause Your Input Key isn\'t correct !')
                }
            },
            verifyInputKey() {
                alert('Child check....')
            },
            showModal() {
                let d_modal = document.getElementById('dmodal')
                // set close function
                if(this.hasCloseFunction) {
                    let span = document.getElementsByClassName("close")[0];
                    // add dynamic function on event : onclick attribute
                    span.onclick = () => d_modal.style.display = 'none'
                }
                // show the modal
                this.input_key = null // always init input key
                d_modal.style.display = 'block'
            }
        },
        computed: {
            input_check() {
                return !this.input_key ? 0 : this.input_key.length
            }
        }
    }
</script>
<style lang="scss" scoped>
    /* The Modal (background) */
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content */
    .modal-content {
        position: relative;
        background-color: #fefefe;
        margin: auto;
        padding: 0;
        border: 1px solid #888;
        width: 80%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        -webkit-animation-name: animatetop;
        -webkit-animation-duration: 0.4s;
        animation-name: animatetop;
        animation-duration: 0.4s
    }

    /* Add Animation */
    @-webkit-keyframes animatetop {
        from {top:-300px; opacity:0}
        to {top:0; opacity:1}
    }

    @keyframes animatetop {
        from {top:-300px; opacity:0}
        to {top:0; opacity:1}
    }

    /* The Close Button */
    .close {
        color: white;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }

    .modal-header {
        padding: 2px 16px;
        background-color: #1e90ff;
        color: white;
    }

    .modal-body {
        padding: 2px 16px;
        color:#000000;
    }

    .modal-footer {
        padding: 2px 16px;
        background-color: #1e90ff;
        color: white;
    }
    // ************************** INPUT access key
    .input-container {
        display: -ms-flexbox; /* IE10 */
        display: flex;
        width: 100%;
        margin-bottom: 15px;
    }
    .icon {
        padding: 10px;
        background: #dc143c;
        color: white;
        //min-width: 50px;
        text-align: center;
    }

    .input-field {
        width: 100%;
        padding: 10px;
        outline: none;
    }

    .input-field:focus {
        border: 2px solid #dc143c;
    }

    // ******************** round button
    .button_add {
        background-color: crimson;//#4CAF50;
        color: #ffffff;
        border: none;
        padding: 5px 5px;
        font-size: 12px;
        font-family: Raleway;
        cursor: pointer;
        border-radius: 30px;
    }
    .button_add:hover {
        opacity: 0.8;
    }
    .button_add[disabled] {
        background-color: #aaaaaa;
    }
    .button_check {
        @extend  .button_add;
        font-size: 17px;
        background-color: #4caf50;
    }
    /*
    .button_check[disabled] {
        background-color: #aaaaaa;
    }*/

    @media  screen and(max-width: 600px) {
        h2 {
            font-size: 13px;
        }
        h3 {
            font-size: 12px;
        }
        h5 {
            font-size: 9px;
        }
        .input-field {
            font-size: 10px;
        }
    }

</style>