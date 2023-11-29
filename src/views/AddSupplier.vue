<template>
   <form class="space-y-6" @submit.prevent="saveSupp">
    <!-- Grid row -->
    <!-- {{errors}} -->
    <div class="row py-2 px-2 mb-0">
        <!-- Grid column -->
        <div class="col-md-6">
    
            <label for="suppliername" class="block text-sm font-medium text-gray-700 mb-1">Supplier Name:</label>
            <!-- Material input -->
            <div class="input-group mb-3">
               <TextInput 
                                id="suppliername"
                                name="suppliername"
                                type="text"
                                class="form-control px-2 xl:w-1/2 w:1/2 focus:ring-yellow-500 active:ring-yellow-500"
                                v-model="form.suppliername" 
                                placeholder="suppliername">
                                </TextInput>
                                
            </div>
                               <span class="text-danger px-1 py-1 mt-0 mb-0"  v-if="errors.suppliername">{{errors.suppliername[0]}}</span>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-6">
            <p class="mb-1">Address:</p>
            
            <!-- Material input -->
            <div class="input-group mb-3">
                <TextInput 
                                id="address"
                                name="address"
                                type="text"
                                class="form-control px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                v-model="form.address" 
                                placeholder="address">
                                </TextInput>
            </div>
             <span class="text-danger px-1 py-1 mt-0 mb-0"  v-if="errors.address">{{errors.address[0]}}</span>
        </div>
        <!-- Grid column -->
    </div>
    <!-- Grid row -->

    <!-- Grid row -->
    <div class="row py-2 px-2 mt-0">
        <!-- Grid column -->
        <div class="col-md-6">
            <p class="mb-1">Contact Person:</p>
            <!-- Material input -->
            <div class="input-group mb-4">
                <TextInput 
                                id="contactperson"
                                name="contactperson"
                                type="text"
                                class="form-control px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                v-model="form.contactperson" 
                                placeholder="Contact Person">
                                </TextInput>
            </div>
            <span class="text-danger px-1 py-1 mt-0 mb-0"  v-if="errors.contactperson">{{errors.contactperson[0]}}</span>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-6">
            <p class="mb-1">Contact Numbers:</p>
            <!-- Material input -->
            <div class="input-group mb-4">
               <TextInput 
                                id="Cn"
                                name="contactnumber"
                                type="text"
                                class=" form-control px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                             
                                placeholder="Contact Number">
                                </TextInput>
                                   <!-- v-model="form.contactnum"  -->
            </div>
            <span class="text-danger px-1 py-1 mt-0 mb-0 text-sm"  v-if="errors.contactnum">{{errors.form.value.contactnum[0]}}</span>
        </div>
        <!-- Grid column -->
         <!-- <span v-show="errors" v-for="(v, k) in errors" :key="k" class="blk">
  {{ v[0] }}
  </span> -->
    </div>
    <!-- Grid row -->

    <div>
  
 
 
  <!-- <span v-show="errors2" >
      {{ errors2 }}
      </span> -->
</div>
    <div class="d-flex justify-content-center">
      
        <BnT type="primary"
                class="inline-flex items-center mx-3 mt-0 px-2 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Create
        </BnT>
    </div>
</form>




<!-- <div class="d-flex justify-content-center mr-auto p-4">
    <form class="space-y-6" @submit.prevent="saveSupp">
        <div class="space-y-4 rounded-md shadow-sm">
            




            <div>
                <label for="suppliername" class="block text-sm font-medium text-gray-700">Supplier Name:</label>
                <div class="mt-1 ">
                  
                    <TextInput 
                                id="suppliername"
                                name="suppliername"
                                type="text"
                                class="form-control px-2 xl:w-1/2 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                v-model="form.suppliername" 
                                placeholder="suppliername">
                                </TextInput>

                                
                                <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">Address:</label> 
                    <div class="mt-1">
                        <TextInput 
                                id="address"
                                name="address"
                                type="text"
                                class="form-control px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                v-model="form.address" 
                                placeholder="address">
                                </TextInput>
                       </div>
                      </div>
                      <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">Contact Person:</label> 
                    <div class="mt-1">
                        <TextInput 
                                id="contactperson"
                                name="contactperson"
                                type="text"
                                class="form-control px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                v-model="form.contactperson" 
                                placeholder="Contact Person">
                                </TextInput>
                       </div>
                      </div>
                      <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">Contact Number:</label> 
                    <div class="mt-1">
                        <TextInput 
                                id="Cn"
                                name="contactnumber"
                                type="text"
                                class=" form-control px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500 "
                                v-model="form.contactnum" 
                                placeholder="Contact Number">
                                </TextInput>
                       </div>
                      </div>
                                
                </div>
            </div>
            -->
            


            
<!-- <div>
  
  <span v-show="errors" v-for="(v, k) in errors" :key="k" class="blk">
  {{ v[0] }}
  </span>
 

</div> -->









            
        <!-- </div> -->
        
<!-- 
        <BnT type="primary"
                class="inline-flex items-center mx-3 mt-3 px-2 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Create
        </BnT>
        
    </form> -->

<!-- </div> -->


<!-- <BnT  :processing ="false">ADD</BnT> -->
<!-- <BnT  :processing ="false">Edit</BnT> -->

</template>
<script setup>
import BnT from '../components/buttons.vue'
import TextInput from '../components/TextInput.vue'
import InputLabel from '../components/InputLabel.vue'
import useSupplier from '../components/composables/supplier'
import {reactive, ref} from 'vue';
import { onMounted } from 'vue'


const form = ref({
            suppliername: '',
            address: '',
            contactperson: '',
           // contactnum: '12131312',
            // conT:'1213141212'
           
        });
       const conT=ref("32341333")

        const {storeSupp,errors } = useSupplier()

        const saveSupp = async () => {
         
             
             console.log("Values of ref",form.value.suppliername)
             console.log("Contact1",conT.value)
            await storeSupp(conT,form);
            console.log("Error on supp",errors.value.suppliername)
            //console.log(errors)
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