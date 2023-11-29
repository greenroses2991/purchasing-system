<template>
  <!-- <div v-if="show" :class="alertClass"> -->
    <div v-if="show" :class="['alert',aleType]">
      <!-- <div v-if="show" :class="['alert',props.typeFS]"> -->
    {{ message }}
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch,onMounted,toRefs } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({

  show: {
    type: Boolean,
    // default: false,
  },
  message: {
    type: String,
      // required: true,
  },
 
  aleType: {
    type: String,
      // required: true,
 },
});
//const { aleType } = toRefs(props.alertData);
//let alertClass =props.aleType
// const{ alertClass }=toRefs(props)
// const { alertData } = props;
const emit  = defineEmits(['update:show']);
const router = useRouter();


     
//const alertClass = alertData;


const hideAlert = () => {
 //console.log("Inside Alert2 using Var2 :",alertClass)
  emit('update:show', false);
  // console.log("Inside Alert1 :",typeFS.value)
  //router.push({name: 'product.unit'})
};

// Watch for changes in 'isVisible' prop and trigger router push if it's successful
watch(() => ([props.show,props.aleType]), (newValue,newValue2) => {
  console.log("ShowM: ",newValue,newValue2)
  let alertClass=props.aleType;
  if ( props.show ==='true' && props.aleType === 'alert-success') {
    setTimeout(async() => {
      //console.log("Inside Alert2Props :",props.typeFS)
     console.log("Inside Alert2Object :",aleType)
     // console.log("Inside Alert2-toref :",alertData.aleType)
      hideAlert()
        await router.push({name: 'product.brand'}) 
    }, 2000); // Delayed router push after 2 seconds
  }
  else{
  //hideAlert()
  //console.log("Inside Alert2 using Var1 :",alertData.aleType.value)
console.log("Inside Alert2 using Var1 :",alertClass)
//console.log("Inside Alert2 :",props.typeFS)
console.log("Inside Alert2-toref :",props.aleType)
setTimeout(() => {
      // console.log("Inside Alert2 Else :",props.typeFS)
     console.log("Inside Alert2 Else :",props.aleType)
     // console.log("Inside Alert2-toref :",alertData.aleType)
      hideAlert()
      //emit('hide'); // Hide the alert
      //router.push('/product/brand'); // Replace with your success route path
    }, 1500); // Delayed router push after 2 seconds
// console.log(props)

  }
}

);

// Watch for changes in props.classProp and update dynamicClass when it changes
// onMounted(() => {
//   watch(() => ([props.show,props.typeFS]), (newValue,newValue2) => {
    
//     if (newValue2 && props.typeFS === 'alert-success') {
//     setTimeout(() => {
//       console.log("Inside Alert1 :",props.typeFS)
//       hideAlert()
//       //emit('hide'); // Hide the alert
//       router.push('/product.brand'); // Replace with your success route path
//     }, 2000); // Delayed router push after 2 seconds
//   }
//   else{
  
// console.log("Inside Alert2 using Var :",alertClass.value)
// console.log("Inside Alert2 :",props.typeFS)
// console.log(props)
//   }

//   });
// });

</script>


<style scoped>
div{
  text-align: center;
}
.alert{
  padding: 5px;
}
</style>