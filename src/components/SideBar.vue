<template>
    <div class="w-[400px] h-screen">
        <div class="flex w-full px-10 py-5 mb-2  ">
            <div class="flex w-full justify-start items-center gap-5"><img src="../assets/images/logo-light.png" class="h-[2rem]" alt=""> <img class="h-[2rem]" src="../assets/images/appname-light.png" alt=""></div>
        </div>
        <div class="w-full overflow-y-scroll h-[calc(100vh-100px)]">
            <!-- overflow-hidden  -->
            <ul class="list-none px-[20px]">
                <li class="text-white px-[20px] m-0">Dashboards</li>
                <ul class="border-l-[10px] border-[#0F8BFD] rounded-lg mt-1">
                    <li class="bg-[#f5f7f823] py-1 rounded-r-lg">
                        <a href="/admin/dashboard" class="px-2">
                            <i class="pi pi-home text-white text-[14px] "></i>
                            <span class="text-white ml-3 text-[14px]">Dashboard</span>
                        </a>
                    </li>
                </ul>
            </ul>
            <div class="px-[20px] mt-3 w-full">
                <div class="px-3 py-2">
                    <h4 class="text-white font-medium text-[14px] ">Apps</h4>
                </div>
                <PanelMenu  :model="items" :pt="{
                    headerContent: {
                        class: 'border-none bg-[#2E313F] '
                    },
                    menuContent: {
                        class: 'bg-[#3D3F4C] border-none p-0'
                    },
                    header: {
                        class: 'border-none bg-[#2E313F]'
                    },
                    
                }" class="w-full md:w-20rem">
            <template #item="{ item }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple class="flex items-center hover:bg-[#3D3F4C] hover:opacity-90 cursor-pointer text-color px-3 py-2 text-white" :href="href" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2 text-color">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple class="flex align-items-center cursor-pointer text-color px-3 py-2 bg-[#2E313F]" :href="item.url" :target="item.target">
                    <span :class="item.icon" />
                    <span class="ml-2 text-white">{{ item.label }}</span>
                    <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto" />
                </a>
            </template>
            </PanelMenu  >
                <div class="px-3 py-2">
                    <h4 class="text-white font-medium text-[14px] ">UI Kit</h4>
                </div>
                <PanelMenu :model="itemsKit" :pt="{
                    headerContent: {
                        class: 'border-none bg-[#2E313F]'
                    },
                    menuContent: {
                        class: 'bg-[#383B48] border-none'
                    },
                    header: {
                        class: 'border-none bg-[#2E313F]'
                    },
                    action: {
                        class: 'hover:bg-[#3D3F4C] hover:opacity-90'
                    },
                    headerAction: {
                        class: 'border-none focus:bg-[#414350] text-white'
                    },
                    menu: {
                        class: 'bg-[#383B48]'
                    },
                    icon:{
                        class: 'text-white'
                    },
                    label: {
                        class: 'text-white'
                    }
                }" />
                <div class="px-3 py-2">
                    <h4 class="text-white font-medium text-[14px]">Prime Blocks</h4>
                </div>
                <PanelMenu :model="itemsBlocks" :pt="{
                    headerContent: {
                        class: 'border-none bg-[#2E313F]'
                    },
                    header: {
                        class: 'border-none bg-[#2E313F]'
                    },
                    headerAction: {
                        class: 'border-none bg-[#2E313F] text-white'
                    }
                }" />
                <div class="px-3 py-2">
                    <h4 class="text-white font-medium text-[14px]">Utilities</h4>
                </div>
                <PanelMenu :model="itemsUtilities" :pt="{
                    headerContent: {
                        class: 'border-none bg-[#2E313F]'
                    },
                    header: {
                        class: 'border-none bg-[#2E313F]'
                    },
                    headerAction: {
                        class: 'border-none bg-[#2E313F] text-white'
                    }
                }" />
                <div class="px-3 py-2">
                    <h4 class="text-white font-medium text-[14px]">Utilities</h4>
                </div>
                <PanelMenu :model="itemsUtilities" :pt="{
                    headerContent: {
                        class: 'border-none bg-[#2E313F] aa'
                    },
                    header: {
                        class: 'border-none bg-[#2E313F] aa'
                    },
                    headerAction: {
                        class: 'border-none bg-[#2E313F] text-white'
                    }
                }" />
            </div>
            <div class="flex justify-between items-center"></div>
        </div>
    </div>
</template>

<script setup>
import PanelMenu from 'primevue/panelmenu';
import { ref } from "vue";
const itemsUtilities = ref([
    {
        label: 'Color',
        icon: 'pi pi-palette',
    },
    {
        label: 'Figma',
        icon: 'pi pi-pencil',
    },
    {
        label: 'PrimeIcons',
        icon: 'pi pi-prime',
    },
    {
        label: 'PrimeFlex',
        icon: 'pi pi-desktop',
    },
]);
const itemsBlocks = ref([
    {
        label: 'Free Blocks',
        icon: 'pi pi-eye',
    },
    {
        label: 'All Blocks',
        icon: 'pi pi-globe',
    },
]);
const items = ref([
    {
        label: 'File',
        icon: 'pi pi-file',
        items: [
            {
                label: 'CRUD',
                icon: 'pi pi-plus',
                route: '/admin/product'
            }
        ]
    },
]);
const itemsKit = ref([
    {
        label: 'File',
        icon: 'pi pi-file',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus',
            },
            {
                label: 'Open',
                icon: 'pi pi-folder-open',

            },
            {
                label: 'Print',
                icon: 'pi pi-print',
            }
        ]
    },
    {
        label: 'Product',
        icon: 'pi pi-file-edit',
        items: [
            {
                label: 'Add Product',
                icon: 'pi pi-copy'
            },
            {
                label: 'Lists Product',
                icon: 'pi pi-list'
            },
            {
                label: 'Delete Product',
                icon: 'pi pi-times'
            }
        ]
    },
    {
        label: 'Email',
        icon: 'pi pi-envelope',
    },
    {
        label: 'Calendar',
        icon: 'pi pi-calendar',
    }
    ,
    {
        label: 'Blog',
        icon: 'pi pi-comment',
    },
    {
        label: 'Button',
        icon: 'pi pi-box',
    },
    {
        label: 'Table',
        icon: 'pi pi-table',
    },
    {
        label: 'List',
        icon: 'pi pi-list',
    },
    {
        label: 'Tree',
        icon: 'pi pi-share-alt',
    },
    {
        label: 'Misc',
        icon: 'pi pi-circle-off',
    },
    {
        label: 'Chart',
        icon: 'pi pi-chart-bar',
    }
]);



</script>
<style scoped lang="css">
/* Define the styles for the scrollbar */
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
  -webkit-box-shadow: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: gray;
}
.custom-panel-menu .p-panelmenu-content {
  background: #2E313F !important;
}

.custom-panel-menu .p-panelmenu-header .p-panelmenu-header-content {
  background: #2E313F !important;
}

.custom-panel-menu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action {
  background-color: red !important;
}
.p-menuitem{
    background: #2E313F !important;
}
</style>