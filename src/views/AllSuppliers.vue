  <template>
   <div class="d-flex left-content-center mr-auto px-4 py-2">
            
               
             <router-link :to="{ name: 'supplier.addsupp' }" class="  items-center px-4 py-2 bg-gray-100 border ">
                    Create</router-link>
        
        </div> 
  <div class="d-flex justify-content-center mr-auto px-4 py-2">
       

        <table class="table table-success table-striped table-sm">
            <thead>
            <tr>
                <th class=" px-4 py-2 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-2 text-left text-gray-500 uppercase fw-bold">ID</span>
                </th>
                <th class="px-4 py-2 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-2 text-left text-gray-500 uppercase fw-bold">SUPPLIER NAME</span>
                </th>
                <th class="px-4 py-2 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-2 text-left text-gray-500 uppercase fw-bold">ADDRESS</span>
                </th>
                <th class="px-4 py-2 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-2 text-left text-gray-500 uppercase fw-bold">CONTACT PERSON</span>
                </th>
                <th class="px-4 py-2 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-2 text-left text-gray-500 uppercase fw-bold">CONTACT NUMBER</span>
                </th>
                
            </tr>
            </thead>

            <tbody class="table-striped ">
             <template v-for="item in supps" :key="item.id">
            
                <tr class="bg-white">
                    <td class="px-4 py-2 text-sm leading-5 text-gray-500 whitespace-no-wrap xx-small">
                        {{ item.id }}
                    </td>
                    <td class="px-4 py-2 text-sm leading-5 text-gray-500 whitespace-no-wrap xx-small">
                    {{ item.suppliername }}
                    </td>
                     <td class="px-4 py-2 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                    {{ item.address }}
                    </td>
                     <td class="px-4 py-2 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                    {{ item.contactperson }}
                    </td>
                     <td class="px-4 py-2 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                    {{ item.contactnum }}
                    </td>

                    <!-- <td class="px-4 py-2 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                        
                  <BnT type="Del" class="items-center px-1 py-1 bg-gray-100 mx-1 my-1 border-transparent">  <router-link :to="{ name: 'product.editbrand', params: { id: item.id } }"
                                    >
                            Edit
                        </router-link></BnT>
                        
                        <BnT type="Del" @click="deleteCompany(item.id)"
                               class="items-center px-1 py-1 bg-gray-100 mx-1 my-1 border-transparent">
                        Delete</BnT>
                    </td> -->
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
import {ref} from 'vue';
import { onMounted } from 'vue'
import useSupplier from '../components/composables/supplier';

// function allSupps(){
const{ supps,getSupps } = useSupplier()

onMounted(getSupps)

// return{getBrands,brands}
// }




// const deleteCompany=async(id) => {
//              if (!window.confirm('Are you sure you want to delete '+ 'ID#: ' + id +'?')) {
//                 return
//             }
//             await destroyBrand(id);
//             await getBrands(); 
//          }



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
@keyframes spinner {
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

}
.center {
  border: 1px solid;
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>