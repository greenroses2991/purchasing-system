  <template>
    <div id="create" class="d-flex left-content-center mr-auto px-4 py-2">
               
             <router-link :to="{ name: 'product.addbrand' }" class=" text-uppercase items-center px-4 py-2 bg-gray-100 border ">
                    Create</router-link>
        
        </div> 
  <div class="d-flex justify-content-center mr-auto px-4 py-2">
       

        <table class="table table-success table-striped">
            <thead>
            <tr>
                <th class=" px-4 py-2 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-2 text-left text-gray-500 uppercase">ID</span>
                </th>
                <th class="px-4 py-2 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-2 text-left text-gray-500 uppercase">PRODUCT BRAND</span>
                </th>
                <th class="px-4 py-2 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-2 text-left text-gray-500 uppercase">ACTION EDIT / DELETE</span>
                </th>
                
            </tr>
            </thead>

            <tbody class="table-striped">
             <template v-for="item in brands" :key="item.id">
            
                <tr class="bg-white">
                    <td class="px-4 py-3 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                        {{ item.id }}
                    </td>
                    <td class="px-4 py-3 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                    {{ item.prodbrand }}
                    </td>
                    
                    <td class="px-4 py-2 text-sm leading-5 text-gray-500 whitespace-no-wrap">

                    
                        <router-link :to="{name: 'product.editbrand', params: { id: item.id } }" class="items-center px-2 py-2 mx-1 my-1 border border-2 border-warning" style="background:black; border-radius:4px; "  >
                                        EDIT</router-link>
                        <!-- <router-link :to="{ name: 'companies.create' }" class="text-sm font-medium">Create company</router-link>
             -->
                        <BnT type="Del" @click="deleteCompany(item.id)"
                               class="border-radius: 4px">
                        Delete</BnT>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import BnT from '../components/buttons.vue';
// import TextInput from '../components/TextInput.vue'
// import InputLabel from '../components/InputLabel.vue'
import useProducts from '../components/composables/product';
import {ref} from 'vue';
import { onMounted } from 'vue'

// function allbrands(){
const{ getBrands,brands,destroyBrand } = useProducts()

onMounted(getBrands)

// return{getBrands,brands}
// }




const deleteCompany=async(id) => {
             if (!window.confirm('Are you sure you want to delete '+ 'ID#: ' + id +'?')) {
                return
            }
            await destroyBrand(id);
            await getBrands(); 
         }



// const{ getBrands } = useProducts() 

//   onMounted(getBrands)
 
        //  console.log(getCompanies)
         
        //  const deleteCompany=async(id) => {
        //      if (!window.confirm('Are you sure?')) {
        //         return
        //     }
        //     await destroyCompany(id);
        //     await getCompanies(); 
         
      

</script>
<style>

.center {
  border: 1px solid;
  margin: auto;
  width: 50%;
  padding: 10px
}
 .d-flex a:hover,.d-flex a:focus{
    font-size: 18px;
    border-bottom:5px solid pink;
    text-decoration: underline;
    transition: 0.8s;
    color:lime
}
d-flex a{
    font-size: 15px;
    border-bottom:5px solid pink;
    text-decoration: underline;
    transition: 0.8s;
    color: whitesmoke
}
a{
   color: whitesmoke
}
#create a:hover{
    font-size: 18px;
    border-bottom:5px solid;
    text-decoration: underline;
    transition: 0.8s;
    color:white
}
#create a{
    font-size: 15px;
    border-bottom:5px solid black;
    transition: 0.8s;
    background:green;
    color:whitesmoke;
    font-weight: bold;
    border:4px;
    border-radius: 10px;
}
</style>