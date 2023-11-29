

import axios from "axios"
import { ref } from "vue"
import { useRouter } from 'vue-router'
import { BASE_URL } from "../../baseurl"

export default function useSupplier(){

    const supps=ref([])
    const supp=ref([])
    const errors = ref('')
    const unitID=ref([])
    const units=ref([])
    
//------->for Units <-------


    // const errors2 = ref('')
    const router = useRouter()

const getSupps=async()=>{
let response =await axios.get(BASE_URL + '/api/supplier/suppliers')
supps.value=response.data
console.log(response.data)
}

const getSupp = async(id)=>{
let response = await axios.get(BASE_URL + '/api/supplier/getSuppId/' + id)
brand.value=response.data;
console.log("Brand Data per ID: ",response.data)
    
 }

const storeSupp = async (conT,form) => {
    errors.value = ''
    //errors2.value = ''
    console.log("Conatct2: ",conT.value)
    console.log("Suuplier: ",form.value.suppliername)
    console.log("Asddd: ",form.value.address)
    console.log("Asddd: ",form.value.contactperson)

    const formData = new FormData();
    formData.append('suppliername', form.value.suppliername);
    formData.append('address', form.value.address);
    formData.append('contactperson', form.value.contactperson);
    formData.append('contactnum', conT.value);
    // suppliername
    // console.log("Conatct2: ",form.value)
    // let test=sessionStorage.getItem(imgesI)

    try {
       let response= await axios.post(BASE_URL + '/api/supplier/savesupplier', formData)
        console.log("Save:",response)
        // console.log(test)

        errors.value=response.data
        // console.log("Conatct2: ",conT.value)
    //    errors2.value=response.data.message

        if(response.data.code===222)
        {
            errors.value = response.data.message;
            console.log("SAMEDATA:",errors.value);
           //alert(errors2.value.message)
           return errors.value.message
        }

            await router.push({name: 'supplier.suppliers'})
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

    

return{supp,supps,getSupps,getSupp,storeSupp,errors}
}
