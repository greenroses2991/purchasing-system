

import axios from "axios"
import { toRefs, ref, reactive,provide } from "vue"
import { useRouter } from 'vue-router'
import { BASE_URL } from "../../baseurl"

export default function useProducts(){

    const brands=ref([])
    const brand=ref([])
    const errors = ref([null])
    const unitID=ref([])
    const units=ref([])
    const isSaving=ref(false)
    const alertShow = ref(false);
    const alertMessage = ref('');
    const alrtSuccess = ref('');
    const alrtmsgDataX = ref('');
    //const typeFS=ref('');
   // const { show } = toRefs(props)
    //const show = ref('');
     const alertType = ref('');
    const alertData=reactive({aleType:''});
    // const alertData=ref({
    //     aleType:''
    // });
    const {aleType} = toRefs(alertData);
    const imageId=ref('');
    const imageName=ref('');
    const isDisabled = ref(true);
    const receivedValueID = ref('');
    // const FormData = reactive({
    //     'img_path': '',
       
    // })


//------->for Units <-------
    const router = useRouter()

const getBrands=async()=>{
let response =await axios.get(BASE_URL + '/api/brands/brands')
brands.value=response.data
// console.log(response.data)
}

const getBrand = async(id)=>{
let response = await axios.get(BASE_URL + '/api/brands/ShowbrandById/' + id)
brand.value=response.data;
// console.log("Brand Data per ID: ",response.data)
    
 }

const storeBrand = async (form) => {
    errors.value = ''
 
    try {
        await new Promise(response => setTimeout(response, 1500));
        let response= await axios.post(BASE_URL + '/api/brands/save', form)
        console.log("Save:",response)


        console.log("Update:",response.data)
        console.log("Res err: ", response.data.code)
        errors.value=response.data
        isSaving.value=false;


   

        if(response.data.code===222)
        {
        //     errors.value = response.data.message;
        //     console.log("SAMEDATA:",errors.value);
        //    //alert(errors2.value.message)
        //    return errors.value.message

        alertData.aleType = "alert-danger";
        alertShow.value = true;
        errors.value = response.data.message;
        alertMessage.value = errors.value;
        isSaving.value=false;
        console.log("SAMEDATA:",errors.value);
        // alert("Succesfully Updated Save")
       return errors.value.message

        }
        else {
                
            alertMessage.value = response.data.message;

            alertData.aleType = "alert-success"
            alertShow.value = true;
            setTimeout(async() => {
                alertShow.value = false
               await router.push({name: 'product.brand'})   
              }, 1500)
              
        }

        //     await router.push({name: 'product.brand'})
        //  alert("Succesfully Added Save")
   
    } catch (e) {
        if (e.response.status === 404 || e.response.status === 422) {
            // errors.value = e.response.data.errors.message
            // console.log("Type of Err:",e.response)
            errors.value=e.response.data.message;
            console.log("Type of Error1: ",errors.value)
            // alert(errors.value)
            
            alertMessage.value = errors.value;
            alertData.aleType = "alert-danger";
            // Pwd pd ni aleType.value="alert-danger"
            alertShow.value = true;
            isSaving.value=false;
            console.log("Inside Prod JS: ",alertType.value)
            setTimeout(async() => {
                alertShow.value = false
             //  await router.push({name: 'product.brand'})   
              }, 3000)
        }
    }
}

const updateBrand = async (id) => {
    errors.value = ''
    try {
        await new Promise(response => setTimeout(response, 1500));
        let response = await axios.put(BASE_URL + '/api/brands/update/ ' + id, brand.value)
        errors.value=response.data
        isSaving.value=false;

        if(response.data.code===222)
        {
        alertData.aleType = "alert-danger";
        alertShow.value = true;
        errors.value = response.data.message;
        alertMessage.value = errors.value;
        isSaving.value=false;
       
       return errors.value.message
           
        } else {

            alertMessage.value = response.data;
            console.log("Updated: ",response.data)
            alertData.aleType = "alert-success"
            alertShow.value = true;
            
        
              setTimeout(async() => {
                alertShow.value = false
               await router.push({name: 'product.brand'})   
              }, 1500)
              
        }

        
        
    } catch (e) {
        if (e.response.status === 404 || e.response.status === 422) {
            // console.log("Type of Err:",e.response)
            errors.value=e.response.data.message;
            console.log("Type of Error: ",errors.value)
            alertMessage.value = errors.value;
            alertData.aleType = "alert-danger";
            alertShow.value = true;
            isSaving.value=false;
        }
    }
    
}

const destroyBrand  = async(id) => {
    await axios.delete(BASE_URL+'/api/brands/delete/' + id)
    await router.push({name: 'product.brand'})
       

        
     }
//----------->For Units<------------

    const getUnits=async()=>{
    let response =await axios.get(BASE_URL + '/api/units/units');
    units.value=response.data;
    // console.log(response.data);
    }
    
    const getUnitId=async(id)=>{
        let response = await axios.get(BASE_URL + '/api/units/getUnitById/' + id)
        //let response = await axios.get(BASE_URL + '/api/brands/ShowbrandById/' + id)
        unitID.value=response.data;
        // console.log("Display Error",response.data);
        
        console.log( "Unit Data per Unit ID:",unitID.value)
    }


    const storeUnit = async (form) => {
        errors.value = ''
        try {
            await new Promise(response => setTimeout(response, 2000));
           let response= await axios.post(BASE_URL + '/api/units/saveUnit', form)
            console.log("Update:",response.data)
            console.log("Res err: ", response.data.code)
            errors.value=response.data
            isSaving.value=false;

            if(response.data.code===222)
            {
                alertType.value = "alert-danger";
                alertShow.value = true;
                errors.value = response.data.message;
                alertMessage.value = errors.value;
                isSaving.value=false;
                console.log("SAMEDATA:",errors.value);
               return errors.value.message
               
            } else {
                
                alertMessage.value = response.data.message;
                alertType.value = 'alert-success';
                alertShow.value = true;
                setTimeout(async() => {
                    alertShow.value = false
                    await router.push({name: 'product.unit'})   
                  }, 2000)
                  
            }
    
       
        }catch (e) {
            if (e.response.status === 404 || e.response.status === 422) {
                errors.value=e.response.data.message;
                // console.log("Type of Error: ",e.response.data.errors.produnit[0]) using$vali=Validator::make($request->all(), [ and return response()->json(['errors' => $vali->errors()], 422);
                console.log("Type of Error: ", errors.value)
                alertMessage.value =   errors.value;
                alertType.value = "alert-danger";
                alertShow.value = true;
                isSaving.value=false;

            }
           
            
        }
    }
   
    

    const updateUnit = async (id) => {
  
        // errors.value = ''
        try {
            await new Promise(response => setTimeout(response, 2000));
            let response = await axios.put(BASE_URL + '/api/units/updUnit/ ' + id, unitID.value);
            isSaving.value=false;
            console.log('Pagkahuman og save:',isSaving.value)
            errors.value=response.data
            if(response.data.code===222)
            {

                console.log("Code:",errors.value);
                alertType.value = "alert-danger";
                alertShow.value = true;
                errors.value = response.data.message;
                alertMessage.value = errors.value;
                console.log("SAMEDATA:",errors.value);
            //    console.log('kung same:',isSaving.value)
            //    console.log('alertype2:',alertType.value)
            //    console.log('AlertMsg2: ',alertMessage.value)
               return errors.value.message
            }
            errors.value=response.data
            alertMessage.value = response.data;
            alertType.value = 'alert-success';
            alertShow.value = true;
            console.log('alertype1:',alertType.value)
            console.log('AlertMsg1: ',alertMessage.value)
            console.log("Success-DAta msg: ",errors.value)
            setTimeout(async() => {
                alertShow.value = false
                await router.push({name: 'product.unit'})   
              }, 2000)

        } catch (e) {
            console.log("List Of Err:",e.response.data)
            if (e.response.status === 404 || e.response.status === 422) {
                errors.value=e.response.data.message;
                console.log("Type of Error: ",errors.value)
                alertMessage.value = errors.value;
                alertType.value = "alert-danger";
                alertShow.value = true;
            }
            isSaving.value=false;
        } finally { 
           console.log('ISaving in Composition: ',isSaving.value)

        }
        
        
    }
   const deleUnit=async(id)=>{
        let delme = await axios.delete(BASE_URL + '/api/units/delU/' + id)
        console.log("Deleted: ", delme)
        alert('Data is Sucessfully Deleted!: '+ id)
        await router.push({name: 'product.unit'})

        // const destroyBrand  = async(id) => {
        //     await axios.delete(BASE_URL+'/api/brands/delete/' + id)
        //     await router.push({name: 'product.brand'})
       

   }


        //FOR SAVING IMAGE (11/03/2023)

        const uploadImages = async (selectedImage) => {
            try {

            //  console.log("File in Composable: ",selectedImage)
              const formData = new FormData();
              formData.append('image', selectedImage);
              let response= await axios.post(BASE_URL + '/api/images/imagUpd', formData)

              console.log(response)
              alertMessage.value = response.data.message;
            // alertMessage.value = "Success";
            //   console.log("AlertMsg",alertMessage.value)
              imageId.value=response.data.id;
              imageName.value=response.data.fileName
            //   console.log("Images Id Value ",imageId.value)
              //return response.data.id; // Assuming the server responds with an image ID
              alertType.value = 'alert-success';
              alertShow.value = true;
              isDisabled.value = true;
              setTimeout(async() => {
              alertShow.value = false
               // await router.push({name: 'product.unit'})   
              }, 2000)
              return response.data.id[0]; // Assuming the server responds with an image ID

            } catch (error) {  
                //console.log(error)
                console.log("Res :", error.response)

                if (error.response.status === 413) {
                   errors.value=error.response.statusText;
                    // console.log("Type of Error: ",e.response.data.errors.produnit[0]) using$vali=Validator::make($request->all(), [ and return response()->json(['errors' => $vali->errors()], 422);
                    console.log("Type of Error: ", errors.value)
                    alertMessage.value =   errors.value;
                    alertType.value = "alert-danger";
                    alertShow.value = true;
                    isDisabled.value = true
                    throw error;
                } else {
                
                errors.value=error.response.data.errors.image[0];
            // console.log("Type of Error: ",e.response.data.errors.produnit[0]) using$vali=Validator::make($request->all(), [ and return response()->json(['errors' => $vali->errors()], 422);
            console.log("Type of Error: ", errors.value)
            alertMessage.value =   errors.value;
            alertType.value = "alert-danger";
            alertShow.value = true;
            isDisabled.value = true
            //console.log('Processing NewValue : ',isDisabled.value)
            //isSaving.value=false;
            //console.log('ERRe : ',error)
             //console.error('Error uploading image:', errors.value);
              throw error;
                }
            }
            
        }



    provide('myComposable', {
        receivedValueID,

    });

   const storePrd = async (form,selectOptionUnit,selectOption,idImg) => {
    errors.value = ''



    // Injecting the data from the parent component
//  idImg = inject('idImg', ref(''));

// You can use the parentData in your component or composable
// const idImg2 = ref(`Received from Parent: ${idImg.value}`);

// console.log('Product Name:',idImg2.value);

    console.log('Product Name:',form.value.productname);
    console.log('Product Descr:',form.value.desc);
    console.log ("UNIt: ",selectOptionUnit.value)
    console.log ("Brand: ",selectOption.value)
    // console.log('Images R-ID Js:',receivedValueID.value);
    console.log('Images R-ID Js:',idImg.value);


    const formData = new FormData();
    formData.append('productname', form.value.productname);
    console.log('after append',form.value.productname)
  formData.append('desc', form.value.desc);
    formData.append('unitid', selectOptionUnit.value);
    formData.append('brandid', selectOption.value);
    formData.append('imagepathid',idImg.value);
    console.log('after app ImgID::',idImg.value);
    // try {
    //     // let response= await axios.post(BASE_URL + '/api/supplier/savesupplier', formData)
    //     const response= await axios.post(BASE_URL + '/api/productprof/saveprod',formData)
    //      console.log("Save:",response)
    //      // console.log(test)
 
    //      errors.value=response.data
    //      // console.log("Conatct2: ",conT.value)
    //  //    errors2.value=response.data.message
 
    //      if(response.data.code===222)
    //      {
    //          errors.value = response.data.message;
    //          console.log("SAMEDATA:",errors.value);
    //         //alert(errors2.value.message)
    //         return errors.value.message
    //      }
 
    //         //  await router.push({name: 'supplier.suppliers'})
    // // alert("Succesfully Added Save")
    
    //  } catch (e) {
    //     console.log(e)
    //      if (e.response.status === 422) {
    //          errors.value = e.response.data.errors
    //          console.log("array 422:",e.response)
    //      }
       
    //  }

    try {
        await new Promise(response => setTimeout(response, 2000));
       let response= await axios.post(BASE_URL + '/api/productprof/saveprod',formData)
      
        console.log("Response.Data:",response.data)
        console.log("Response.data.code: ", response.data.code)
        errors.value=response.data
        isSaving.value=false;
        console.log('Pagkahuman og save js:',isSaving.value)
        console.log('Images R-ID Js2:',idImg.value);

        if(response.data.code===222)
        {
            alertType.value = "alert-danger";
            alertShow.value = true;
            alrtmsgDataX.value = response.data.message;
            // alrtmsgDataX.value = errors.value;
            isSaving.value=false;
            console.log("SAMEDATA:",alrtmsgDataX.value);
            setTimeout(async() => {
                alertShow.value = false
    
              }, 2000)
           return errors.value.message
           
        } else {
            
            alrtSuccess.value = response.data.message;
            imageId.value=response.data.id;
            console.log("Err :",alrtSuccess.value)
            alertType.value = 'alert-success';
            alertShow.value = true;
            setTimeout(async() => {
                alertShow.value = false
               // alrtSuccess.value = ''
            //    await router.push({name: 'product.unit'})   
              }, 2000)
            //   await router.push({name: 'product.brand'})
              
        }

   
    }catch (e) {
        if (e.response.status === 404 || e.response.status === 422) {
            console.log('Status : ',e.response.status)
            errors.value=e.response.data.errors
            // errors.value=e.response
            // console.log('e : ',e.response.data.errors.productname[0])
            // console.log("Type of Error: ",e.response.data.errors.produnit[0]) using$vali=Validator::make($request->all(), [ and return response()->json(['errors' => $vali->errors()], 422);
            console.log("Type of Error: ", errors)
            alertMessage.value = errors.value;
            alertType.value = "alert-danger";
            alertShow.value = true;
            
            isSaving.value=false;
            setTimeout(async() => {
                alertShow.value = false
               // await router.push({name: 'product.unit'})   
              }, 2000)

        }
       
        
    }
}

            

   const UpdAlertShow = (value) => {
    alertShow.value = value;
    console.log ('ALERT updateshow', alertType.value)
  };
  const updateIsSaving = (newValB) => {
    isSaving.value = newValB;
    console.log('isSaving NewValue : ',newValB)
  
  };
  const updateIsDisabled = () => {
    isDisabled.value = false;
    console.log('Disable NewValue : ',isDisabled.value)
  
  };

//   const UsingTor = (value) => {
//     show.value = value;
//     // alertType.value=value;
//     console.log ('ALERT updateshow Using Torefs: ', show.value)
//     // return  alertType.value
//   };
    

return{ getBrands,brands,getBrand,storeBrand,errors,brand,updateBrand,destroyBrand,getUnits,getUnitId,units,unitID,storeUnit,imageName,alrtSuccess,alrtmsgDataX,
    updateUnit,deleUnit,isSaving,alertType,alertMessage,alertShow,UpdAlertShow,updateIsSaving,alertData,imageId,uploadImages,updateIsDisabled,isDisabled,storePrd,receivedValueID}
}
