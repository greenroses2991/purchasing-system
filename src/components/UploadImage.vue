<template>


<!-- <form class="space-y-6" @submit.prevent="saveImage"> -->
 <div class="space-y-4 rounded-md shadow-sm">


  <div class="upImg">
    <input class="intCf" type="file"  @change="handleFileUpload" id="img_path" accept="image/*">
    <button id="btnUp" :disabled="isDisabled" @click="saveImage">Upload Image</button>
  </div>

  <div class="mb-3">
   <!-- <p>{{imageId}}</p> -->
     <Alert id="alrt" :show="alertShow" :message="alertMessage" :typeFS="alertType" @update:show="UpdAlertShow" />
   
  </div>


    </div>
       
  
    <!-- </form> -->
</template>

<script setup>
import { ref,defineEmits,defineProps,reactive, onMounted } from 'vue';
import axios from 'axios';
import Alert from '../components/alert.vue';
import useProducts from '../components/composables/product';

//const processing = ref(true);
const emits = defineEmits(['sendIdimg']);

// const imgId = defineProps({
//   imageId: {
//     type: Number,
//     // default: false,
//   },
//   imageName: {
//     type: String,
//     // default: false,
//   },
// });

//let selectedImage = null;
// const imageId = ref('Id');
const selectedImage = ref(null);
const uploadedImageId = ref(null);
// const fileInput = ref(null);
// const imgD=ref({
//   imageId:'',
//   imageName:'',

// });

// const handleFileUpload = () => {
//   const file = fileInput.value.files[0];
//   // Handle file upload logic here, e.g., preview the image or validate the file type.
//   // You can also store the file in a ref to use it for saving later.
// };


// const FormData = reactive({
//             'image': '',
           
//         })
        
  const {uploadImages,errors,isSaving,alertType,alertMessage,alertShow,UpdAlertShow,updateIsSaving,imageId,updateIsDisabled,isDisabled,imageName }  = useProducts()

const handleFileUpload = (event) => {

  selectedImage.value = event.target.files[0];
  isDisabled.value=false;
// imageName.value=selectedImage
};
const saveImage = async () => {

// console.log("from upload image Components: ",selectedImage);
console.log("Inside ImagesID b4re upload: ",imageId.value)
const imgId=await uploadImages(selectedImage.value);
            // uploadedImageId.value = imgId;
          //  console.log('Uploaded Images ID:', imgId);
           console.log ("Is disalbe: ",isDisabled.value)
           console.log(imageName.value)
        // console.log("Inside Upload Img type: ",alertType.value)
         console.log("Inside ImagesID: ",imageId.value)


        // sessionStorage.setItem("imgesI",imageId.value);


          // console.log("Inside Upload Img: ",alertMessage.value)
     
     
        emits('sendIdimg',imageId,imageName);
    
        
       
        }

// const saveImage = () => {
//   const formData = new FormData();
//   formData.append('image', fileInput.value.files[0]);

//   axios.post('/api/upload', formData)
//     .then(response => {
//       const imageId = response.data.id;
//       // Now you have the image ID, you can emit it or use it as needed
//     })
//     .catch(error => {
//       console.error('Error uploading image:', error);
//     });
// };


</script>
<style scoped>
.upImg{
  display: flex;
  align-items: center;
  /* margin: 30px 0px 5px 0px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px; 
  width:450px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom:1px;
  padding-left:14px;
  height: 45px; */
  }
  #img_path,#btnUp{
     margin: 10px 2px;
     border: 2px solid #ccc;

      
  /* border-radius: 3px 0px 5px 0px; */

  }

#alrt {
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