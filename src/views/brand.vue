<template>
<div class="d-flex justify-content-center mr-auto p-4">
   

    <form class="space-y-6" @submit.prevent="saveBrand">
        <div class="space-y-4 rounded-md shadow-sm">
            

            <!-- <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Brand</label>
                <div class="mt-1 justify-content-center ">
                    <TextInput 
                                id="prodBrand"
                                name="prodBrand"
                                type="text"
                                class="form-control px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                v-model="form.prodbrand"
                                
                                placeholder="Brand"
                                >
                            
                                </TextInput>
                </div>
            </div> -->




            <div class="form-floating mb-2">
  <TextInput type="text" class="form-control" id="prodBrand" placeholder="sample" v-model.lazy="form.prodbrand">
    </TextInput>
  <label for="prodBrand">Brand Name:</label>
</div>
<!-- <div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div> -->
           
            
<!-- <div class ="blk" v-show="errors2">
  <span v-show="errors2"  class="blk">
      {{ errors2 }}
      
  </span>
</div> -->

            
<div>
  
  <!-- <span v-show="errors" v-for="(v, k) in errors" :key="k" class="blk">
  {{ v[0] }}
  </span> -->
 
  <span>
     <Alert2 :show="alertShow" :message="alertMessage" :aleType="alertData.aleType" @update:show="UsingTor" />
      </span>
</div>

            
        </div>
        

        <div class="d-flex justify-content-center">
      
        <BnT type="primary" :processing="isSaving" @update:processing="updateIsSaving">
                
            Create
        </BnT>
    </div>
        
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
import Alert2 from '../components/alert2.vue';
import {reactive, ref, toRefs} from 'vue';
import { onMounted } from 'vue'


const props = defineProps({
 show: {
    type: Boolean,
    // default: false,
  },
  message: {
    type: String,
  }
  // typeFS: {
  //   type: String,
  // }
});



// onMounted(()=>{
//   alertType.value
//   console.log(alertType.value)
//       onMounted(()=>{
  
//   console.log("From Br ",alerts.value)

// })

 
    
// })
const form = reactive({
            'prodbrand': '',
           
        })

        const {storeBrand,errors, isSaving,alertMessage,alertShow,UpdAlertShow,updateIsSaving,alertData,aleType} = useProducts()

        const saveBrand = async () => {
     
            await storeBrand(form);
            //console.log(errors)
          //  console.log("Inside Brand1: ",alertType.value)
          //  console.log("Inside Brand: ",props)
        }
//const typeFS = ref({alertType:'alert-danger'});
  //const alerts = ref({
 // typeFS: '',
  //show:'',
  // message: 'This is a success message.',
//});
const UsingTor = (value) => {
    // alerta.value.typeFS = value;

    
    alertShow.value=value;
    //alertData.value.aleType=va2
    // typeFS.value.alertType=alertType
    //alerts.value.typeFS=va2
    console.log ('ALERT updateshow UsingTor: ', alertShow.value)

  // console.log ('ALERT updateshow Using Torefs1: ', va2)
    // return  alertType.value

  };


// const { alertType } = toRefs(typeFS);

</script>
<style>
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