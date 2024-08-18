<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ counter * counter }}</h3>
  </section>

  <div>
    <button @click="counter++">1+</button>
    <button @click="counter--">1-</button>
  </div>
  
</template>

<script lang="ts">
/* import { ref } from 'vue';

interface Props {
  value: number;
  texto: string;
}

const props = defineProps<Props>();

const counter = ref(props.value); */
import { ref, computed,defineComponent } from 'vue';

export default defineComponent({
  props: {
    value:{type: Number, required: true },
    
},
  setup( props ) {
    const counter = ref(props.value);
    const squareCounter = computed(() => counter.value * counter.value);

    return {
      counter: counter,
      squareCounter:squareCounter,
    };
  },
});
</script>
