<template>
    <div class="w-full px-3">
        <div class="w-full grid grid-rows-1 grid-flow-col gap-10">
            <div class="rounded-md flex justify-between linerChart">
                <div class="flex flex-col gap-1">
                    <h3 class="text-white text-[13px]">CONVERSATION RATE</h3>
                    <div class="flex justify-start items-center gap-5 py-2">
                        <Button :pt="{
                            icon: {
                                class: 'pr-1 text-[15px]'
                            }
                        }" icon="pi pi-arrow-down" class="py-1 px-1 text-[15px] text-white boxShadow rounded-md border-none" label="0.61%" icon-pos="left"></Button>
                        <span class="text-2xl text-white">0.81%</span>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <Image src="../../../../src/assets/images/rate.svg" alt="Image"/>
                </div>
            </div>
            <div class="rounded-md flex justify-between linerChart">
                <div class="flex flex-col gap-1">
                    <h3 class="text-white text-[13px]">CONVERSATION RATE</h3>
                    <div class="flex justify-start items-center gap-5 py-2">
                        <Button :pt="{
                            icon: {
                                class: 'pr-1 text-[15px]'
                            }
                        }" icon="pi pi-arrow-up" class="py-1 px-1 text-[15px] text-white boxShadowGreen rounded-md border-none" label="4,2%" icon-pos="left"></Button>
                        <span class="text-2xl text-white">$306.2</span>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <Image src="../../../../src/assets/images/value.svg" alt="Image" />
                </div>
            </div>
            <div class="rounded-md flex justify-between linerChart">
                <div class="flex flex-col gap-1">
                    <h3 class="text-white text-[13px]">CONVERSATION RATE</h3>
                    <div class="flex justify-start items-center gap-5 py-2">
                        <Button :pt="{
                            icon: {
                                class: 'pr-1 text-[15px]'
                            }
                        }" icon="pi pi-minus" class="py-1 px-1 text-[15px] text-white boxShadowBlue rounded-md border-none" label="1,720" icon-pos="left"></Button>
                        <span class="text-2xl text-white">0.81%</span>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <Image src="../../../../src/assets/images/quantity.svg" alt="Image"/>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-between mt-10">
            <div class="w-[31%] rounded-md">
                <ChartCilcle />
            </div>
            <div class="w-[66%] rounded-md">
                <ChartWave />
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from 'primevue/button';
import Image from 'primevue/image';
import ChartCilcle from '../../../components/Chart/ChartCilcle.vue';
import ChartWave from '../../../components/Chart/ChartWave.vue';

</script>

<style lang="scss" scoped>
.boxShadow{
    background-color: #fc6161;
    box-shadow: 0px 6px 20px rgba(252, 97, 97, 0.3);
}
.boxShadowGreen{
    background-color: #0bd18a;
    box-shadow: 0px 6px 20px rgba(11, 209, 138, 0.3);
}
.boxShadowBlue{
    background-color: #00d0de;
    box-shadow: 0px 6px 20px rgba(0, 208, 222, 0.3);
}

.linerChart{
    padding: 10px;
   background-image: linear-gradient(to left, #ffffff0d, #ffffff0d);
}
</style>