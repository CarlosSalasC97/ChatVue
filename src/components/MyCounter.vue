<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
  </section>

  <div>
    <button class="btn"  @click="counter++">1+</button>
    <button class="btn" @click="counter--">1-</button>
  </div>
  <div>

  </div>
</template>

<script lang="ts" setup>

import {userCounter} from '../compables/useCounter'

const {counter, squareCounter} = userCounter()
// import { ref } from 'vue';

// interface Props {
//   value: number;
//   texto: string;
// }

// const props = defineProps<Props>();
// const counter = ref(props.value);
</script>

<style scoped>
.btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2
}
 


</style>
