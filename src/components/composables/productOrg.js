

import axios from "axios"
import { ref } from "vue"
import { useRouter } from 'vue-router'
import { BASE_URL } from "../../baseurl"

export default function useProducts(){

    const brands=ref([])
    const brand=ref([])
    const errors = ref('')
    const unitID=ref([])
    const units=ref([])
    
//------->for Units <-------


    // const errors2 = ref('')
    const router = useRouter()

const getBrands=async()=>{
let response =await axios.get(BASE_URL + '/api/brands/brands')
brands.value=response.data
console.log(response.data)
}

const getBrand = async(id)=>{
let response = await axios.get(BASE_URL + '/api/brands/ShowbrandById/' + id)
brand.value=response.data;
console.log("Brand Data per ID: ",response.data)
    
 }

const storeBrand = async (form) => {
    errors.value = ''
    //errors2.value = ''
    try {
       let response= await axios.post(BASE_URL + '/api/brands/save', form)
        console.log("Save:",response)

        errors.value=response.data
    //    errors2.value=response.data.message

        if(response.data.code===222)
        {
            errors.value = response.data.message;
            console.log("SAMEDATA:",errors.value);
           //alert(errors2.value.message)
           return errors.value.message
        }

            await router.push({name: 'product.brand'})
   alert("Succesfully Added Save")
   
    } catch (e) {
        if (e.response.status === 422) {
            errors.value = e.response.data.errors
            console.log("array 422:",e.response)
        }
        // if (e.response.data.code===222)
        // {
        //     // errors.value=e.response.data.errors
        //     alert('222')
        //     console.log("array 222:",e.response.data.errors)
        // }
        // elseif (sv.data.code === 222)
        // {
        //     errors2.value = sv.data.errors
        //     console.log("Error2:" ,errors2.value)
        //     alert(errors2.value)
        // }
    }
}

const updateBrand = async (id) => {
    errors.value = ''
    try {
        let response = await axios.put(BASE_URL + '/api/brands/update/ ' + id, brand.value)
  
        errors.value=response.data
        if(response.data.code===222)
        {
            errors.value = response.data.message;
            console.log("SAMEDATA:",errors.value);
           //alert(errors2.value.message)
           return errors.value.message
        }

        await router.push({name: 'product.brand'})
        alert('Succesfully Updated!')
        
        
    } catch (e) {
        if (e.response.status === 422) {
            errors.value = e.response.data.errors
            
            console.log(errors.value)
        }
    }
    
}

const destroyBrand  = async(id) => {
    await axios.delete(BASE_URL+'/api/brands/delete/' + id)
    await router.push({name: 'product.brand'})
       
    //    console.log(res)
        
     }
//----------->For Units<------------

    const getUnits=async()=>{
    let response =await axios.get(BASE_URL + '/api/units/units');
    units.value=response.data;
    console.log(response.data);
    }
    
    const getUnitId=async(id)=>{
        // console.log("sampleid:",id);
        let response = await axios.get(BASE_URL + '/api/units/getUnitById/' + id)
        //let response = await axios.get(BASE_URL + '/api/brands/ShowbrandById/' + id)
        unitID.value=response.data;
        console.log(response.data);
        
        console.log( "Unit Data per Unit ID:",unitID.value)
    }


    const storeUnit = async (form) => {
        errors.value = ''
        try {
           let response= await axios.post(BASE_URL + '/api/units/saveUnit', form)
            console.log("Update:",response)
            errors.value=response.data
            if(response.data.code===222)
            {
                errors.value = response.data.message;
                console.log("SAMEDATA:",errors.value);
               return errors.value.message
            }
    
                await router.push({name: 'product.unit'})
              alert("Succesfully Updated Save")
       
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
                console.log("array 422:",e.response)
            }
        }
    }

   
    

    const updateUnit = async (id) => {
        console.log("sampleid:",id);
        errors.value = ''
        try {
            let response = await axios.put(BASE_URL + '/api/units/updUnit/ ' + id, unitID.value);
         // let response = await axios.put(BASE_URL + '/api/brands/update/ ' + id, brand.value)
      
            errors.value=response.data
            if(response.data.code===222)
            {
                errors.value = response.data.message;
                console.log("SAMEDATA:",errors.value);
               //alert(errors2.value.message)
               return errors.value.message
            }
    
            await router.push({name: 'product.unit'})
            alert('Succesfully Updated!')
            
            
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
                
                console.log(errors.value)
            }
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
   
    

return{ getBrands,brands,getBrand,storeBrand,errors,brand,updateBrand,destroyBrand,getUnits,getUnitId,units,unitID,storeUnit,updateUnit,deleUnit}
}
