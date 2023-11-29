<template>

<!-- <div class="container mt-5"> -->
  <div class="d-flex justify-content-center mr-auto p-4">
   
    <form @submit.prevent>


       <div class="mb-3">
    <h2>PRODUCT PROFILE</h2>
    </div>
      <!-- Product Name -->
      <div class="form-floating mb-2">
      <TextInput type="text" class="form-control" v-model.lazy="form.productname" id="Prodname" placeholder="Prodname"/>
      <label>Product Name:</label>
        <!-- <input type="text" class="form-control" id="productName" v-model="productName" required> -->
       <div class="mb-1">
      <Alert id="alrt" v-if="errors.productname" :show="alertShow" :message="alertMessage.productname[0]" :typeFS="alertType" @update:show="UpdAlertShow" />
      <!-- <span class="blk text-danger px-1 py-1 mt-0 mb-0"  v-if="errors.productname">{{errors.productname[0]}}</span> -->
       
       </div>
      </div>

      <!-- Product Description -->
      <div class="form-floating mb-1">
        <TextInput type="text" class="form-control" v-model.lazy="form.desc"  id="prodBrand" placeholder="Description"/>
         <label>Product Description:</label>
        <!-- <textarea class="form-control" id="prodBrand" required></textarea>  -->
         <!-- <textarea class="form-control" id="productDescription" v-model="productDescription" required></textarea> -->
      
    <!-- <textarea class="form-control" id="productDescription" required></textarea>
            <label for="productDescription">Product Description</label> -->
            <!-- <span class="text-danger px-1 py-1 mt-0 mb-0"  v-if="errors.desc"> <Alert :show="alertShow" :message="alertMessage.desc[0]" :typeFS="alertType" @update:show="UpdAlertShow" /></span> -->
    
      </div>

       <!-- Product Unit -->
      <div class="mb-3">
        <Alert id="alrt" v-if="errors.desc" :show="alertShow" :message="alertMessage.desc[0]" :typeFS="alertType" @update:show="UpdAlertShow" />
        <!-- <label for="productUnit" >Product Unit</label> -->
        <!-- <select v-for="item in units" :key="item.id" class="form-select" aria-label="Default select example"> -->
       <select id="selectOptionUnit" v-model="selectOptionUnit" class="form-select mb-3" aria-label="Default select example">

        

 <!-- <select v-model=operation.operate class="px-2 px-3 mx-2 my-2">  
        <option v-for="process in operation" :value="process.operate">
        {{process.operate}}
        </option> -->
      
     <option selected>Select Unit</option>
      <!-- <option :value="item.id">{{item.produnit}}</option> -->
      <option v-for="item in units" :key="item.id" :value="item.id">{{ item.produnit }}</option>

      </select>
        <Alert id="alrt" v-if="errors.unitid" :show="alertShow" :message="alertMessage.unitid[0]" :typeFS="alertType" @update:show="UpdAlertShow" />
        <!-- <span class="text-danger px-1 py-1 mt-0 mb-0"  v-if="errors.produnit"> <Alert :show="alertShow" :message="alertMessage.item.produnit[0]" :typeFS="alertType" @update:show="UpdAlertShow" /></span> -->
      </div>

       <!-- Product Brand -->
      <!-- <div class="form-floating mb-2"> -->
        <div class="mb-3">
        <!-- <label for="productUnit" id="prodBrand" class="form-control">Product Brand</label> -->
     <select id="selectOption" class="form-select mb-3" aria-label="Default select example" v-model="selectOption">
     <option selected>Select Brand</option>
         <option v-for="item in brands" :key="item.id" :value="item.id">{{ item.prodbrand }}</option>
        <!-- <p>{{item.id}}</p> -->
         
      </select>
       <Alert id="alrt" v-if="errors.brandid" :show="alertShow" :message="alertMessage.brandid[0]" :typeFS="alertType" @update:show="UpdAlertShow" />
      </div>

      <!-- Image Upload -->
    <div class="form-floating mb-3">
        <!-- <label for="productImage" class="form-control">Product Image</label> -->
        <!-- <input type="file" class="form-control" id="productImage" accept="image/*"> -->
         <!-- <input type="file" class="form-control" id="productImage" @change="handleImageUpload" accept="image/*"> -->
    
       
       <UploadImage  @sendIdimg ="recievedId" />
        
      
          <Alert id="alrt" v-if="errors.imagepathid" :show="alertShow" :message="alertMessage.imagepathid[0]" :typeFS="alertType" @update:show="UpdAlertShow" />

      </div>
      
  
<!-- <div class="form-floating mb-3">
       
       <p>ID: {{idImg}}  </p>
        
      </div> -->




      <!-- Image Preview -->
      <!-- <div v-if="previewImage" class="mb-3">
        <label>Image Preview:</label>
        <img :src="previewImage" alt="Product Preview" class="img-thumbnail">
      </div> -->

      <!-- Submit Button -->

        <div class="mb-3">
     <Alert id="alrt" v-if="alrtSuccess" :show="alertShow" :message="alrtSuccess" :typeFS="alertType" @update:show="UpdAlertShow" />
      <Alert id="alrt" v-if="alrtmsgDataX" :show="alertShow" :message="alrtmsgDataX" :typeFS="alertType" @update:show="UpdAlertShow" />
      <!-- <Alert for ="(error, key) in errors" :key="key" :show="alertShow" :message="alertMessage" :typeFS="alertType" @update:show="UpdAlertShow" /> -->
      </div>

        <BnT type="primary" :processing="isSaving" @click="submitForm" @update:processing="updateIsSaving">
                Create
        </BnT> 
        

         <!-- <button @click="submitForm">Upload Image</button> -->
      <!-- <button type="submit" class="btn btn-primary">Save Product</button> -->
    </form>
    
  </div> 
</template>
<script setup>
// import BnT from '../components/buttons.vue'
import TextInput from '../components/TextInput.vue'
import UploadImage from '../components/UploadImage.vue'
// import InputLabel from '../components/InputLabel.vue'
import BnT from '../components/buttons.vue'
import Alert from '../components/alert.vue';
import useProducts from '../components/composables/product.js'
import {reactive, ref, watch,watchEffect} from 'vue';
import { onMounted } from 'vue';
// import Alert from '../components/alert.vue';

const selectOption=ref('');
const selectOptionUnit=ref('');
// const imgD=ref({
//   imageId:'',
//   imageName:'',

// });
const form = ref({
            productname: '',
            desc: '',

        });
const idImg=ref('');
// provide('idImg', idImg);

const{ errors,isSaving,alertType,alertMessage,alertShow,UpdAlertShow,updateIsSaving,units,getBrands,getUnits,brands,storePrd,imageId,receivedValueID,alrtSuccess,alrtmsgDataX } = useProducts()

onMounted(getUnits)
onMounted(getBrands)


const recievedId =(imageId,imageName)=>{
      console.log("Nadawat nku: ",imageId.value + " " + imageName.value)
      idImg.value=imageId.value;
      // receivedValueID.value=imageId.value
      // console.log("ImagesID-Res: ",receivedValueID.value)
      console.log("ImagesID-Res: ",idImg.value)
    } ;

const submitForm = async () => {

             
            //  console.log('Images R-ID 1:', receivedValueID.value);
             console.log('Product Name:', form.value.productname);
          console.log('Product Descr:', form.value.desc);
           console.log ("UNIt: ",selectOptionUnit.value)
           console.log ("Brand: ",selectOption.value)
          //  console.log('Images R-ID 2:', receivedValueID.value);
           console.log('Images R-ID 2:', idImg.value);
            console.log('Images R-ID 1:', idImg.value);
// await storePrd(form,selectOption,selectOptionUnit,receivedValueID);
await storePrd(form,selectOption,selectOptionUnit,idImg);

console.log("Error on prod",errors.value)
console.log("succes",alrtSuccess.value)


        console.log('Product Name:', form.value.productname);
          console.log('Product Descr:', form.value.desc);
           console.log ("UNIt: ",selectOptionUnit.value)
           console.log ("Brand: ",selectOption.value)
          //  console.log('Images R-ID 2:', receivedValueID.value);
           console.log('Images R-ID 2:', idImg.value);
//  await storeSupp(form,conT);
// onMounted(recievedId)
// console.log("ImagesID pag human click sa SUbmit: ",idImg.value)
// const imgId=await uploadImages(selectedImage.value);
//             // uploadedImageId.value = imgId;
          
//            console.log(imageName.value)
//         // console.log("Inside Upload Img type: ",alertType.value)
//          console.log("Inside ImagesID: ",imageId.value)
//           // console.log("Inside Upload Img: ",alertMessage.value)
  
        
       
        };
    

watchEffect(() => {
  console.log('Selected Option Brand:', selectOption.value);
  console.log('Selected Option Unit:', selectOptionUnit.value);
});
// const props = defineProps({
// show: {
//     type: Boolean,
//     // default: false,
//   },
//   message: {
//     type: String,
//   },
//   typeFS: {
//     type: String,
//   }
// });









// const form = reactive({
//             'prodbrand': '',
           
//         })

//         const {storeUnit,errors,isSaving,alertType,alertMessage,alertShow,UpdAlertShow,updateIsSaving } = useProducts()
//         onMounted(UpdAlertShow)
        
//         const saveUnit = async () => {
         
//             await storeUnit(form);
//         // console.log("Inside UNit: ",alertType.value)
//         console.log("Inside UNit type: ",alertType.value)
//           console.log("Inside UNit: ",props)
     
//         }

        




</script>
<style scoped>

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

  /* .form-group {
            position: relative;
            margin-bottom: 2rem;
        }

        label {
            position: absolute;
            top: 1rem;
            left: 1rem;
            transition: all 0.3s;
            pointer-events: none;
        }

        textarea:focus + label, textarea:valid + label {
            top: 0.2rem;
            left: 1rem;
            font-size: 0.8rem;
            background-color: white;
            padding: 0 5px;
        }

        textarea {
            height: 50px;
        } */
  #prodBrand,#Prodname,#selectOption,#selectOptionUnit,#upImg{
  /* height: 5px;
  width: 350px;
  padding: 5px 0px; */
  margin: 30px 0px 5px 0px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px; 
  width:450px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom:1px;
  padding-left:14px;
  height: 45px;
  }
  #alrt{
  margin: 15px 0px 10px 0px;
  border: 1px solid #ccc;
  border-radius: 2px;
  font-size: 14px; 
  width:450px;
  padding-top: 7px;
  padding-right: 7px;
  padding-bottom:1px;
  padding-left:14px;
  height: 35px;
 
}
</style>