<template>
    <button
       :class="{'inline-flex items-center  px-1 py-1 mx-1 my-1 text-xs text-uppercase rounded-md border border-transparent ':true,
      'btn btn-success text-warning px-3 py-2 border-2 border-warning primary overflow-hidden':type==='primary',
        'bg-purple-600 hover: bg-purple-600':type==='secondary',
        'btn btn-outline-success text-black':type==='submit',
        'bg-warning border border-2 border-dark delt' :type==='Del',
        'is-loading' :processing
       }"
    
       
       :disabled="processing"
       @click="changeState"
       >
        <slot />
    </button>
</template>


<script setup>

import { ref } from 'vue';
import { defineProps,defineEmits} from 'vue';


// const Act = ref('false');
const emit = defineEmits (['update:processing']);

const props = defineProps({
    type: {
        type: String,
        default: 'primary'
    },
     processing: {
        
        type: Boolean,
        default: false,
        //required:true,
        
        
          
    }
}); 


const changeState = ()=> {


    try {
        setTimeout(() => {
            let newValB = !props.processing
            emit('update:processing',newValB);
        },1000);
    } catch (error) {
        console.error('Error toggling booleanProp:', error); 
        alert(error)
    }
//         setTimeout(() => {
//   try {
// let newValB = !props.processing
// //console.log("newvalue:", newValB)
// emit('update:processing',newValB);
// //console.log('after a 0.5s',newValB)
//     }
//     catch(error){
//        console.error('Error toggling booleanProp:', error); 
//     }  }, 1000);
    }
   
</script>
<style scope>
/* button:hover{
    color: white;
} */
.delt:hover{
    font-size: 18px;
    border-bottom:5px solid red;
    color:red;
    text-decoration:solid line-through black;
    transition: 0.8s;
}
.primary:hover {
    font-size: 18px;
    border-bottom:5px solid black;
    transition: 0.8s;
    background:green;
    color:whitesmoke;
    font-weight: bold;
}
.primary{
     font-size: 15px;
    border-bottom:5px solid black;
    transition: 0.8s;
    background:green;
    color:whitesmoke;
    font-weight: bold;
    border-radius: yellow;
    outline-color:black;
    outline-style: solid;
    outline-width: 1px;
    box-shadow: 3px 3px rgba(67, 67, 63, 0.853);
}
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
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.overflow-hidden{
  /* padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
   */
   position: relative;
   overflow: hidden;
}


.is-loading {
  background-color: #ccc;
  cursor: not-allowed;
}

@keyframes spin {
  /* to { transform: rotate(360deg); } */
    0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

 .is-loading{color:transparent;}
.is-loading:before {
  content: '';
  top: 50%;
  left: 50%;
  align-items: center;
  width: 20px;
  height: 20px;
 position: absolute;
  border: 5px solid #f6f;
  border-top-color: #0e0;
  border-right-color: #0dd;
  border-bottom-color: #f90;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;

  



   /* content: '';
  position: absolute;
    display: flex;
  justify-content: center;
  top: 20px;
  left: 20px; 
  transform: translate(-50%, -50%);
  border: 3px solid rgba(203, 12, 98, 0.3);
  border-top: 3px solid rgb(224, 231, 17);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin-left: 20px; */

}
</style>


