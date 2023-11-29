<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import navlnk from './components/navlnk.vue'
</script>

<template>
 <header>
   
    <navlnk />

   
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header> 

  <RouterView />
</template>

