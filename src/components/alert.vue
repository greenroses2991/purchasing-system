<template>
  <div v-if="show" :class="['alert',props.typeFS]">
    {{ message }}
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch,onMounted } from 'vue';
// import axios from "axios"
import { useRouter } from 'vue-router';
const router = useRouter();
// import router from 'vue';
// const alertClass = ref(`alert-${props.typeFS}`);
const alertClass = props.typeFS;

const emit = defineEmits(['update:show','update:typeFS']);
  

const props = defineProps({
  show: {
    type: Boolean,
    // default: false,
  },
  message: {
    type: String,
  },
  typeFS: {
    type: String,
    required: true,
    // default: 'alert-success',
  }
});

const hideAlrt = () =>{
  
  // const router = useRouter();
  // let typeVa=props.typeFS
  emit('update:show',false);
 
  // emit('update:typeFS',typeVa);
  // console.log("ALERTA from Alert:", typeVa)
  // return typeVa
 
}

// Watch for changes in the 'show' prop and auto-hide after 2 seconds
watch(() => ([props.show,props.typeFS]),(newValueS,newValueT) => {
  //const alertClass = props.typeFS;
  console.log(`Changes Using Watch: ${newValueS}  ${newValueT}`)
  console.log("Alerttypefromparenst:",props.typeFS )
   console.log("AlertypefromVaria:",alertClass)
if (newValueS,newValueT){
  // console.log(`Changes Using Watch2: ${newValue}`)
  setTimeout(() => {
 // Hide after 2 seconds
    
   console.log(`If State,${newValueS}`)
    hideAlrt();
 
   
  },2000);

}

});
// return {
//       alertClass,
//       hideAlert,
//     };
// return(alertClass,hideAlrt);
// export default {
//   props: {
//     show: Boolean,
//     message: String,
//     type: String, // 'success' or 'danger'
//   },
//   setup(props, { emit }) {
//     const alertClass = ref(`alert-${props.type}`);

    // const hideAlert = () => {
    //   emit('update:show', false);
    // };

    // // Watch for changes in the 'show' prop and auto-hide after 2 seconds
    // watch(() => props.show, (newValue) => {
    //   if (newValue) {
    //     setTimeout(() => {
    //       hideAlert();
    //     }, 2000); // Hide after 2 seconds
    //   }
    // });

    // return {
    //   alertClass,
    //   hideAlert,
    // };

</script>
<style scope>

/* @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
 .is-loading{color:transparent;}
.is-loading:before {

  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25px;
  height: 25px;
  margin-top: -145px;
  margin-left: -13px;
  border-radius: 50%;
  border: 1px solid #f6f;
  border-top-color: #0e0;
  border-right-color: #0dd;
  border-bottom-color: #f90;
  animation: spinner .6s linear infinite;

} */


div{
  text-align: center;
}
.alert{
  padding: 5px;
}
</style>
