<template>

<!-- for refs -->
  <!-- <h1>my name is : {{name}}</h1>
  <h1>age : {{age}}</h1>

  <button @click="clickMe">click me</button>
  <input type="textd" v-model="name"> -->

  <!-- for reactive -->
  <!-- <h1>{{ ninOne.name }}</h1>
  <h1>{{ ninOne.age }}</h1>

   <h1>{{ ninTwo.name }}</h1>
  <h1>{{ ninTwo.age }}</h1>

  <button @click="upNinOne">hoy</button> -->

  <input type="text" v-model="search">

  <h1>search results: {{search}}</h1>
  <div v-for="name in matching" :key="name">
    <h1>{{name}}</h1>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed, watch } from '@vue/runtime-core'

export default {
  name: 'Home',

  // mounted() {
  //   console.log(this)
  // },

  //================== refs ============
  // setup(){
  //   const p = ref(null)
  //   console.log(this)

  //   const p = ref(null)
  //   const a = ref(null)

  //   const name = ref('mario')
  //   const age = ref(30)

  //   const clickMe = () => {
  //     name.value = 'hoy tanga'
  //     age.value = '69'
  //   }

  //     return{ name, age, clickMe}
  // }

  // ===================================================

  // ==================== reactive ===============

  // setup() {
  //   const ninOne = ref({name: 'ben', age: 69})
  //   const ninTwo = reactive({name: 'dover', age: 13})

  //   const upNinOne = () => {
  //     ninOne.value.age++
  //     ninTwo.age++

  //     ninTwo.name = 'ben dover'
  //   }


  //   return { ninOne, upNinOne, ninTwo }
  // }


  setup(){
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

    watch(search, () => {
      console.log('ohyao')
    })
    const matching = computed(() => {
      return names.value.filter((e) => e.includes(search.value))
    })


    return { names, search, matching }
  }

}
</script>
