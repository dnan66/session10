<template>
  <div id="hellow">
    <p>....HelloWord...component</p>
    <h2 style="color: crimson">{{ msg }} </h2>
    <hr>
    <!-- EXPRESSION -->
    <h4>Interpolation, moustache expression `{{}}`</h4>
    <h2> ID sesiune {{id > 14 ? 'greater than 14' : 'less than 14' }}</h2>
    <hr>
    <h4>Attribute binding v-bind: </h4>
    <a style="color: orange" :href="link" target="_blank">{{description}}</a>
    <!--
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    -->
    <hr>
    <h4> Conditional v-if , v-if-else , v-else , v-show</h4>
    {{time}} -> This value shows a specific msg:
    <!-- ************************************************************************** USING V_SHOW-->
    <h2 v-show="time<90" style="color: green">In progress session {{id}}</h2>
    <h2 v-show="time>=90" style="color: red"> End session {{ id }}</h2>
    <hr>
    <!--********************************************************************** SPECIAL CASE img attribute -->
    <h4>Binding an image ....</h4>
    <div>
      <img  height="100" width="100" :src="require(`@/assets/${my_image}`)" alt="default_image"> <!-- require(`@/assets/${my_image}`) -->
    </div>
    <hr>
    <!--******************************** LIST rendering -->
    <h4>LIST/array rendering</h4>
    <div class="fig">
      <li style="font-weight: bold" v-for="f in figures" :key="f"> {{f}} </li> <!-- use index (f,index) -->
    </div>
    <br>
    <hr>
    <h3>Class binding, { object syntax } , [ array syntax ] , v-bind: | : </h3>
    <p class="cbind_classic" v-bind:class="{cbind:on}">css class binding</p>
    <p v-bind:class="[active_class]">css class binding</p>  <!--both forms co-exist class and v-bind:class -->
    <hr>
    <h4>Style binding , objects rendering , v-on:click | @click</h4>
    <!--****************************  OBJECTS rendering -->
    <h5>Counter : {{time}}</h5>
    <ul>
      <li v-for="btn in buttons" :key="btn.index" class="color-box"
          :style="{'background-color':btn.color}"> <!-- kebab-case and camelCase: backgroundColor -->
        <button v-if="btn.name === 'plus'" v-on:click="plusTime" class="fig">{{btn.name}}</button> <!-- use @ for the short form -->
          <button v-else v-on:click="minusTime" class="fig">{{btn.name}}
        </button>
        <!-- classwork : How to bind different functions to handle events? -->
      </li>
    </ul>
    <hr>
    <h4>Events binding  v-on:mouseover | @mouseover </h4>
    Text background color: <span style="color: white;" :style="{backgroundColor: text}">{{text}}</span>
    <div class="color-box" style="background-color: red" v-on:mouseover="setText(1)">  <!-- long form v-on:mouseover -->
    </div>
    <div class="color-box" style="background-color: blue" @mouseover="setText(2)">
    </div>
    <hr>
    <h4> Events binding , Input data , @click  | v-on:click </h4>
      <p>Nume <input id="n" type="text"  min="1" max="10" ></p>
      <p>Prenume <input id="p" type="text" min="1" max="10"></p>
    &nbsp;&nbsp;<button style="background-color: limegreen" @click="setNumeIntrodus">Set & Send </button>
    <h5>nume complet : {{nume_introdus}} </h5>
    <hr>
    <h4> Events binding, check valid data ,  v-on:keyup | @keyup  </h4>
    <p>Nume <input id="n1" type="text"  min="1" max="10" @keyup="setN">  {{n_typed}} </p>
    <p>Prenume <input id="p1" type="text" min="1" max="10" @keyup="setP">  {{p_typed}}</p>
    &nbsp;&nbsp;<button style="background-color: limegreen" :disabled="(n_typed <5)||(p_typed<5)">Send data</button>  <!-- use :disabled -->
    <hr>
    <h4> Computed properties | computed by interpolation</h4>
    <p style="color: blue;"><b>interpolation -> </b> {{ msg }} for session id: <b>{{id}}</b></p>
    <hr>
    <h4> Computed properties | computed by property</h4>
    <p style="color: orangered;">new computed property -> {{computed_msg}}</p>
    <br>
    <hr>
    <h4>Computed data | cached data  </h4>
    <div class="color-box" style="background-color: red" v-on:mouseover="setText(1)">  <!-- long form v-on:mouseover -->
    </div>
    <div class="color-box" style="background-color: blue" @mouseover="setText(2)">
    </div>
    <span style="color: deepskyblue;" :style="{backgroundColor: text}">{{c_text}}</span>
    <hr>
    <h4> v-model directive : value property/input event | text,  textarea </h4>
    <br>
    <p>Nume: <input type="text" v-model="vm_nume" min="1" max="10"> {{vm_nume}}</p> <!-- 2ways data bindings -->
    <p>Prenume: <input type="text" v-model="vm_prenume" min="1" max="10"></p>
    <p>Rol: <textarea v-model="desc_rol" placeholder="Descriere rol...."></textarea>{{desc_rol}}</p>
    <br>
    &nbsp;&nbsp;<button style="background-color: deepskyblue" :disabled="!vm_nume || !vm_prenume">Send data</button>
    <hr>
    <h4> v-model directive : checked property/change event | checkbox, radio, select  </h4>
    <input type="checkbox" id="arole" v-model="adm_role">
    <label style="color: indigo;font-weight: bold" for="arole">Admin Role: {{ adm_role }}</label>
    <br>
    <br>
    <!-- multi checkbox -->
    <input type="checkbox" id="dread" value="read" v-model="doc_properties">
    <label for="dread">Read</label>
    <input type="checkbox" id="dupdate" value="update" v-model="doc_properties">
    <label for="dupdate">Update</label>
    <input type="checkbox" id="ddelete" value="delete" v-model="doc_properties">
    <label for="ddelete">Deleted</label>
    <br>
    <span style="color: green;font-weight: bold">Document: {{ doc_properties }}</span>
    <br>
    <br>
    <h4> init selection  >> 2ways binding</h4>
    <!-- radio -->
    <input type="radio" id="admin" value="Admin" v-model="picked_role">
    <label for="admin">Admin</label>
    <input type="radio" id="dev" value="Dev" v-model="picked_role">
    <label for="dev">Dev</label>
    <br>
    <span style="color: crimson;font-weight: bold">Role: {{ picked_role }}</span>
    <br>
    <br>
    <!-- dynamic select -->
    DocumentContent
    <select v-model="element_selected">
      <option disabled value="">Please select one</option>
      <option v-for="(el,index) in doc_elements" v-bind:key="el.index">
        {{ el.type }}
        {{ el.id }}
        {{index}}
      </option>
    </select>
    <span style="color: orangered;font-weight: bold">  {{ element_selected }}</span>
    <hr>
    <h4> Bind value in v-model</h4>
    <input type="radio" id="wr" v-bind:value="adm_role" v-model="picked_rights">
    <label for="wr">Create rights</label>
    <input type="radio" id="rr" value="read" v-model="picked_rights">
    <label for="rr">Read rights</label>
    <br>
    <span style="color: dimgray;font-weight: bold">Rights: {{ picked_rights }}</span>
    <br>
    <hr>
    <h4>apply modifiers | e.g. number </h4>
    <input  id="fn" type="number" v-model.number="fnumber">
    <label for="fn"> (Number x 2):</label>{{fnumber*2}}
    <br>Input typeof: <span style="color: crimson;">{{typeof(fnumber)}}</span>
    <hr>
    <h4> v-model directive : value property/input event | Watched property </h4>
    <br>
    <p>Nume <input type="text" v-model="wobject.wnume" min="1" max="10"></p>
    <p>Prenume <input type="text" v-model="wobject.wprenume" min="1" max="10"></p>
    <span style="color: dodgerblue;font-weight: bold">Nume complet : {{ wobject.wcomplet}}</span>
    <br>
    &nbsp;&nbsp;<button style="background-color: deepskyblue" :disabled="!wobject.wnume || !wobject.wprenume">Send data</button>
    <hr>
    <h4> v-model directive | Computed property</h4>
    <br>
    <p>Nume <input type="text" v-model="nume" min="1" max="10"> {{countNChars}}</p>
    <p>Prenume <input type="text" v-model="prenume" min="1" max="10"></p>
    <span style="color: orangered;font-weight: bold">Nume complet : {{ numeComplet}}</span>
    <br>
    &nbsp;&nbsp;<button style="background-color: deepskyblue" :disabled="!nume || !prenume">Send data</button>
    <hr>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    data() {   // or use the classic form  data : function() {}
      return {
          id: 15,
          description: 'Dani\'s web site',
          link:'https://www.google.com',
          my_image: 'moov.jpg',
          time: 88,
          figures: ['circle','caret','triangle','point', 'rectangle'],
          on: false,
          active_class: 'cbind_arr',
          buttons: [ {id:1,name:'plus',color: 'green'},{id:2,name:'minus',color:'black'},{id:2,name:'minus',color:'black'}],
          text:'',
          nume_introdus:'no set',
          vm_nume:null,
          vm_prenume:null,
          desc_rol:null,
          fnumber: null,
          /* watch */
          wobject: {
              wnume:'editeaza nume',
              wprenume:null,
              wcomplet:null,
          },
          adm_role: false,
          doc_properties: [],
          picked_role:'Dev',
          doc_elements: [
              {
                  id:0,
                  type: 'header',
                  numbers: 4,
              },
              {
                  id:1,
                  type: 'title',
                  numbers: 1,
              },
              {
                  id:3,
                  type: 'footer',
                  numbers:1,
              }
          ],
          element_selected:null,
          picked_rights:null,
          /* computed */
          nume: null,
          prenume: null,
          n_typed:0,
          p_typed:0,
          btn_disable:true,
      }
    },
    methods: {
      minusTime: function () {
          this.time--
      },
      plusTime: function() {   // arrow function NOT WORKING here
          this.time++
      },
        setText(color) {
          if(color === 1) {
              this.text= 'red'
          } else {
              this.text= 'blue'
          }
        },
        setN() {
          let n1 = document.getElementById('n1')
          this.n_typed = (n1.value).length
        },
        setP() {
            let p1 = document.getElementById('p1')
            this.p_typed = (p1.value).length
        },
        setNumeIntrodus() {
            let n = document.getElementById('n')
            let p = document.getElementById('p')
            if((n=== null) || (p=== null)) {
                this.nume_introdus = ' no set '
            }else {
                this.nume_introdus = n.value + ' ' + p.value
                //console.log(n.value)
            }
        },
    },
    watch: {
      'wobject.wnume': function(value) {
          /* 2 ways data binding*/

          this.wobject.wcomplet = value + ' ' + this.wobject.wprenume
      },
        'wobject.wprenume': function(value) {
          this.wobject.wcomplet = this.wobject.wnume + ' ' + value
        }
    },
    computed: {
        computed_msg() {
            return this.msg + ' for id - ' + this.id
        },
        c_text() {  // or use computed_txt()
          //let d = Date.now()
          return this.text//d.getFullYear() + '/' +d.getHours()  + '-' + d.getMinutes() // -->add a reactive data to used computed : this.text
        },
        mycheck() {
            if((this.n_typed.length > 10) && (this.p_typed.length > 5)) {
                return false
            } else {
                return true
            }
        },
        numeComplet() {
            return this.nume + ' ' + this.prenume
        },
        countNChars() {
            return this.nume ? this.nume.length : 0
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .fig {
    font-size: 20px;
    color: orangered;
    float:left
  }
  .color-box {
    height: 50px;
    width: 100px;
    margin-top:10px;
    color: darkblue;
  }
  .cbind {
    font-size: 15px;
    font-style: oblique;
    color: deeppink;
  }
  .cbind_arr {
    background-color: yellowgreen;
  }
  .cbind_classic {
    background-color: lightskyblue;
  }
</style>
