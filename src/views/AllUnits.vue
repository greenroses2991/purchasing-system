  <template>
   <!-- <div class="d-flex left-content-center mr-auto px-4 py-2">
            
               
             <router-link :to="{ name: 'product.addunit' }" class="  items-center px-4 py-2 bg-gray-100 border ">
                    Create</router-link>
        
        </div>  -->
        <div id="create" class="d-flex left-content-center mr-auto px-4 py-2">
            
               
             <router-link :to="{ name: 'product.addunit' }" class=" text-uppercase items-center px-4 py-2 bg-gray-100 border create  ">
                    Create</router-link>
        
        </div> 
  <div class="d-flex justify-content-center mr-auto px-4 py-2">
       

        <table class="table table-success table-striped">
            <thead>
            <tr>
                <th class=" px-3 py-2 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-2 text-left text-gray-500 uppercase">ID</span>
                </th>
                <th class="px-3 py-2 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-2 text-left text-gray-500 uppercase">PRODUCT UNIT</span>
                </th>
                <th class="px-3 py-2 bg-gray-50">
                    <span
                        class="font-medium tracking-wider leading-2 text-left text-gray-500 uppercase">ACTION EDIT / DELETE</span>
                </th>
                
            </tr>
            </thead>

            <tbody class="table-striped inline-flex">
             <template v-for="item in units" :key="item.id">
            
                <tr class="bg-white ">
                    <td class="px-3 py-2 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                        {{ item.id }}
                    </td>
                    <td class="px-3 py-2 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                    {{ item.produnit }}
                    </td>
                    
                    <td class="px-3 py-2 text-sm leading-5 text-gray-500 whitespace-no-wrap" >
                        
                    <!-- <div class="block-flex justify-content-center" > -->
                      <!-- <div class="container-fluid"> -->
                           <!-- <BnT type="del" class="hov1"> -->
                         <router-link :to="{name: 'product.editunit', params: { id: item.id } }" class="items-center px-2 py-2 mx-1 my-1 border border-2 border-warning" style="background:black; border-radius:4px; "  >
                                        EDIT</router-link>
                                        
                                      <!-- </BnT> -->
                             <!-- </div> -->
                       
                        <!-- <router-link :to="{ name: 'companies.create' }" class="text-sm font-medium">Create company</router-link>
             -->
              
                        <BnT type="Del"  style="border-radius: 4px" @click="deleteUnit(item.id)">
                        Delete</BnT>
                                     <!-- </div> -->

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
const activeH=ref();





// function allbrands(){
const{ units,getUnits,deleUnit } = useProducts()
// console.log(getUnits())
onMounted(getUnits)

const deleteUnit=async(id) => {
             if (!window.confirm('Are you sure you want to delete '+ 'ID#: ' + id +'?')) {
                return Alert('Succesfully Deleted!')
            }
            await deleUnit(id);
            await getUnits(); 
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