<template>
  <div class="w-full h-[100vh] flex gap-6">
   <SideBar
      class="bg-[#2E313F] transition-all ease-in-out duration-1000 "
      :class="{ 'side': !state }"
      />
    <div class="flex flex-1 flex-col h-screen">
      <div class="w-full flex justify-between items-center py-6 px-4">
        <div class="flex">
          <Button class="text-white" :pt="{
            icon:{
              class: 'text-[20px]'
            }
          }" @click="handToggle" icon="pi pi-bars"></Button>
        </div>
        <div class="flex gap-6 justify-center items-center">
          <Button class="text-white text-[5px] border-none"  icon="pi pi-search"></Button>
          <Button class="text-white border-none" icon="pi pi-bell" ></Button>
          <Button class="text-white border-none" icon="pi pi-comment"></Button>
          <Button class="text-white border-none" icon="pi pi-cog" ></Button>
          <Button class="text-white border-none" icon="pi pi-bars" ></Button>
          <Avatar image="https://res.cloudinary.com/dsbiugddk/image/upload/v1699288139/DATN/yyrvhos8d2kx2ko4n0ui.jpg" :pt="{
            image: {
              class: 'w-[35px] h-[33px] rounded-full '
            }
          }" class="" shape="circle" />
        </div>
      </div>
    <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import { ref}  from 'vue'
const state = ref(true);
const handToggle = () => {
  state.value = !state.value;
  console.log(state.value);
}
</script>
<style scoped>
*{
  font-family: "Inter var", sans-serif;
    font-feature-settings: "cv02", "cv03", "cv04", "cv11";
    font-variation-settings: normal;
    --font-family: "Inter var", sans-serif;
    --font-feature-settings: "cv02","cv03","cv04","cv11";
    background-color: #2E313F !important;
}
.side{
  margin-left: -400px;
}
/* .side-enter-active {
  transition: all 0.3s ease-out;
}

.side-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.side-enter-from,
.side-leave-to {
  transform: translateX(-400px);
  opacity: 0;
} */
</style>
