import { computed, ref } from "vue";

export const userCounter = (initalValue: number  = 10) => {

    const counter = ref(initalValue);
   
    
    return{
        counter,
        //Read-ONLY
        squareCounter: computed(() => counter.value * counter.value),
    }
}