<template>

<!-- <div class="form-floating mb-2">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>

<div class=" input-group w-50 mb-3 py-2 px-3">
  <input type="text" id="form12" class="form-control col-md-4 py-2 px-3" placeholder="text"  />
  <label class="floatingInput " for="form12">Example label</label>
</div> -->


<div class="d-flex w-auto justify-content-center p-3">
   

    <form class="space-y-6" @submit.prevent="saveUnit">
        <div class="space-y-4 rounded-md shadow-sm">
            

            <!-- <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Unit</label>
                <div class="mt-1 justify-content-center">
                    <TextInput 
                                id="prodUnit"
                                name="prodUnit"
                                type="text"
                                class="form-control px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 size-100"
                                v-model="form.produnit"
                               
                                >
                            
                                </TextInput>
                </div>
            </div>
            -->
             <div class="form-floating mb-2">
  <TextInput type="text" class="form-control" id="prodUnit" placeholder="Unit" v-model.lazy="form.produnit">
    </TextInput>
  <label for="prodBrand">Product Unit:</label>
</div>
<div>
  
  <!-- <span v-show="errors" v-for="(v, k) in errors" :key="k" class="blk">
  {{ v[0] }}
  </span> -->
        <Alert :show="alertShow" :message="alertMessage" :typeFS="alertType" @update:show="UpdAlertShow" />
 
</div>









            
        </div>
        <div class="d-flex justify-content-center">

        <!-- <BnT type="primary" -->
          <BnT type="primary" :processing="isSaving" @update:processing="updateIsSaving">
            Save
        </BnT>
        </div>
        <!-- <Alert :typeFS="alertType" @update:show="UpdAlertShow" /> -->
  
    </form>




<!-- <BnT  :processing ="false">ADD</BnT> -->
<!-- <BnT  :processing ="false">Edit</BnT> -->
</div>
</template>
<script setup>
import BnT from '../components/buttons.vue'
import TextInput from '../components/TextInput.vue'
import InputLabel from '../components/InputLabel.vue'
import useProducts from '../components/composables/product.js'
import {reactive, ref} from 'vue';
import { onMounted } from 'vue';
import Alert from '../components/alert.vue';

const props = defineProps({
show: {
    type: Boolean,
    // default: false,
  },
  // message: {
  //   type: String,
  // },
  // typeFS: {
  //   type: String,
  // }
});

const form = reactive({
            'prodbrand': '',
           
        })

        const {storeUnit,errors,isSaving,alertType,alertMessage,alertShow,UpdAlertShow,updateIsSaving } = useProducts()
        //onMounted(UpdAlertShow)
        
        const saveUnit = async () => {
         
            await storeUnit(form);
        // console.log("Inside UNit: ",alertType.value)
        console.log("Inside UNit type: ",alertType.value)
          console.log("Inside UNit: ",props)
     
        }

        




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
  
  word-wrap: break-all;
}
</style>