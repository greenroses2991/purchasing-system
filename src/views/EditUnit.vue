<template>
<div class="d-flex justify-content-center mr-auto p-4">


    <form class="space-y-6" @submit.prevent="saveUnit">
        <div class="space-y-4 rounded-md shadow-sm">
            
       <div class="form-floating mb-2">
  <TextInput type="text" class="form-control" id="prodUnit" placeholder="prodUnit" v-model.lazy="unitID.produnit">
    </TextInput>
  <label for="prodUnit">Product Unit ID: {{unitID.id}}</label>
</div>

            
                            



            <!-- <Alert :message="alertMessage" :type="alertType" /> -->
        </div>
        <!-- <div class="alert alert-danger" role="alert"> Fuck U</div> -->
        <Alert :show="alertShow" :message="alertMessage" :typeFS="alertType" @update:show="UpdAlertShow" />
         <div class="d-flex justify-content-center">
      
        <BnT type="primary" :processing="isSaving" @update:processing="updateIsSaving">
            Update
        </BnT>
  
      
        <!-- class="inline-flex items-center mx-3 mt-3 px-2 py-2 text-xs font-semibold tracking-widest  uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25" -->
         </div>
     <!-- <div class="alert alert-success d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div>Sucessfully Updated</div>
</div> -->
<!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button> -->
    </form>




<!-- <BnT  :processing ="false">ADD</BnT> -->
<!-- <BnT  :processing ="false">Edit</BnT> -->
</div>
</template>
<script setup>
import BnT from '../components/buttons.vue';
import TextInput from '../components/TextInput.vue';
import InputLabel from '../components/InputLabel.vue';
import useProducts from '../components/composables/product';
import Alert from '../components/alert.vue';
import {reactive, ref} from 'vue';
import { onMounted } from 'vue';
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { emit } = defineEmits();
// const { show } = defineProps();

 
// const alertShow = ref(false);
//     const alertMessage = ref('');
//     const alertType = ref('');

const props = defineProps({
id: {
        type: String,
        // default: 1,
        required: true
    },
show: {
    type: Boolean,
    // default: false,
  },
  message: {
    type: String,
  },
  typeFS: {
    type: String,
  }
});

 const { unitID, getUnitId, updateUnit, errors,isSaving,alertType,alertMessage,alertShow,updateIsSaving,UpdAlertShow} = useProducts()
      //isSaving=ref(false)
 getUnitId(props.id)

 //onMounted(getUnitId)

//  console.log("PER ID:", getUnitId(props.id))
console.log(getUnitId)
//console.log("INSIDE UNIT:",unitID.value)

     

        const saveUnit = async () => {
          
          // const isSuccess = Math.random() < 0.5;
          // if(isSuccess) {
          //     await updateUnit(props.id)
          //      alertType.value = 'success';
          //     alertMessage.value = 'Data saved successfully!';
          //     console.log("API for update:",updateUnit(props.id))

          //     console.log(saveUnit)
              
          //     console.log('Msg: ',alertMessage.value)
             
          // } else {
          //   alertMessage.value = 'Failed to save data.';
          //   alertType.value = 'danger';
          // }
          //   alertShow.value = true;
         
        await updateUnit(props.id)

         console.log ('ALERT FROM EDIT:', alertType.value)
        
        // return alertType.value
      //  console.log("API for update:",updateUnit(props.id))
        console.log(saveUnit)
        // await router.push({name: 'product.unit'}) 
        };

    const updateAlertShow = (value) => {
      alertShow.value = value;
      // alertType.value=value;
      console.log ('ALERT updateshow', alertType.value)
      // return  alertType.value
    };


// const changeFirstL=(event)=>{
//   let  firstCapLtr = event.target.value[0].toUpperCase() + event.target.value.slice(1) ;
//   console.log(firstCapLtr)
//   return firstCapLtr
// }
// return{updateBooleanProp,myBooleanProps,}


     
</script>
<style>
/* @keyframes spinner {
  to {transform: rotate(360deg);}
}
 .is-loading{color:transparent;}
.is-loading:before {

  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -280px;
  margin-left: -50px;
  border-radius: 50%;
  border: 1px solid #f6f;
  border-top-color: #0e0;
  border-right-color: #0dd;
  border-bottom-color: #f90;
  animation: spinner .6s linear infinite;

} */
.center {
  border: 1px solid;
  margin: auto;
  width: 50%;
  padding: 10px;
}
.blk{
     /* display: inline; */
     /* display:inline-flex; */
     text-align: center;
     color: red;
  align-items: center;
   /* text-align: center; */
  /* border: 3px solid */
}
</style>