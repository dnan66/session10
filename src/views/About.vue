<template>
  <div class="about">
    <h1>This is an About page for TEST </h1>
    <button style="background-color: crimson;font-size: medium;color: white" v-on:click="showDModal">Open</button>
    <!-- CALL CHILD component using bind value for props-->
    <dialog-modal :show="show_on" v-bind:hasCloseFunction="true" v-on:check="countChecks" v-on:set="setKey" v-model="modelData"> <!-- v-model="modelData"-->

    </dialog-modal>
    <!---- PARENT using v-model --->
    <label for="email" style="color: crimson;font-weight: bold">Email </label>
    <input type="email" v-model="email" id="email">
    <br><br>

    <!-- without v-model , using *VALUE* bind and *INPUT* event-->
    <label for="name" style="color: green;font-weight: bold">Nume </label>
    <input type="text" id="name" v-bind:value="name" v-on:input="usingInputEvent($event)"> <!--"name=$event.target.value" -->
    <hr>
    <button @click="setData"> Set </button>
    <!-- v-model and component -->
  </div>
</template>
<script>
  import DialogModal from '../components/DialogModal.vue'
  export default {
      name:'About',
      data() {
         return {
             counter:0,
             email:null,
             name:null,
             /* dynamic prop */
             show_on: false,
             /* using v-model to communicate */
             modelData:null,
         }
      },
      components: {
          DialogModal
      },
      methods: {
          usingInputEvent(event){
              console.log('nnnn')
              this.name = event.target.value
          },
          setData() {
              alert('Data set -> email:' +this.email + ' and name:' + this.name)
          },
          showDModal() {
              let d_modal = document.getElementById('dmodal')
              d_modal.style.display = 'block'
          },
          countChecks() {
              this.counter++
              alert('I get a check message... counter :' + this.counter)
          },
          setKey(key) {
              //alert('Parent : You have set the Key:' + key)
              // now check v-model data
              alert('Parent : You have set the Key:' + key + '\n and v-model store :' + this.modelData)
          }
      }
  }
</script>
