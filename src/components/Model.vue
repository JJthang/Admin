
<template>
    <div class="card flex justify-center ">
        <Button icon="pi pi-plus" @click="store.handToggModel(true)" />
    </div>
</template>

<script setup>
import { useSideBarStore } from '../stores/sideBar';

const store = useSideBarStore();

</script>

<style lang="scss" scoped>
.p-sidebar-left{
    background-color: red;
}
</style>