<template>
<div class="d-flex justify-content-center mr-auto p-4">


    <form class="space-y-6" @submit.prevent="saveUBrand">
 <div class="space-y-4 rounded-md shadow-sm">
         <div class="form-floating mb-2">
        <TextInput type="text" class="form-control" id="prodBrand" placeholder="prodBrand" v-model.lazy="brand.prodbrand">
         </TextInput>
          <label for="prodBrand">Product Brand: {{brand.id}}</label>
</div>

<div>
  <span> <Alert2 :show="alertShow" :message="alertMessage" :aleType="alertData.aleType" @update:show="UpdAlertShow" /></span>
</div>

 </div>
 <div class="d-flex justify-content-center">
         <BnT type="primary" :processing="isSaving" @update:processing="updateIsSaving">
            Update
        </BnT>
         </div>

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
import Alert2 from '../components/alert2.vue';
import {reactive, ref} from 'vue';
import { onMounted } from 'vue';
import { defineProps } from 'vue';


const props = defineProps({
id: {
        type: String,
        required: true
    },
show: {
    type: Boolean,
    // default: false,
  },
  message: {
    type: String,
  }
});

 const { brand, getBrand, updateBrand,errors,isSaving,alertType,alertMessage,alertShow,updateIsSaving,UpdAlertShow,alertData,aleType } = useProducts()

      
 getBrand(props.id)
//  console.log(props.id)
   console.log("Per ID:",getBrand(props.id))
    // console.log("BRAND INSIDE:",brand.value)

        const saveUBrand = async () => {
        await updateBrand(props.id)
        console.log(saveUBrand)
       
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
}
</style>