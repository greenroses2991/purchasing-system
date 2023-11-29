

<template>
    <input
        class="border-gray-300 rounded-md shadow-sm"
        :value="modelValue"
        @input="changeFltr"
        ref="input"
    />
</template>



<script setup>
import { onMounted, ref } from 'vue';

 defineProps(['modelValue']);

const emit = defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });


const changeFltr =(event)=>{
    try {
let  firstCapLtr = event.target.value[0].toUpperCase() + event.target.value.slice(1) ;
emit('update:modelValue',firstCapLtr)
// console.log("EVENT: ",firstCapLtr)
    }
    catch(event){
        return
       
    }
}

// const firstCapLtr =()=>{
//     const whlLtr=Event.targ et.value[0].toUpperCase
// }
</script>

