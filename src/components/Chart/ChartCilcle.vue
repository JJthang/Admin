<template>
    <div class="w-full flex flex-col justify-center items-center bg-[#ffffff0d] p-3 rounded-md">
        <div class="w-full flex justify-start items-start">
            <h1 class="text-white">Country distrubutions</h1>
        </div>
        <div class="flex justify-center items-center">
            <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-[500px] h-[450px] flex justify-center items-center md:w-30rem" :pt="{
                root: {
                    class: 'text-white'
                },
                canvas: {
                    class: 'text-white p-5'
                },
                hooks: {
                    class: 'text-white'
                }

            }" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from 'primevue/chart';

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref(null);
console.log(chartData);
const setChartData = () => {
    const documentStyle = getComputedStyle(document.body);  
    return {
        labels: ['RUS', 'IND', 'AUS', 'JPN', 'USA', 'Other'],
        datasets: [
            {
                data: [540, 325, 702, 544, 222, 100],
                backgroundColor: [documentStyle.getPropertyValue('--blue-500'),
                documentStyle.getPropertyValue('--yellow-500'), 
                documentStyle.getPropertyValue('--green-500'),
                documentStyle.getPropertyValue('--red-400'), 
                documentStyle.getPropertyValue('--gray-500'), 
                documentStyle.getPropertyValue('--purple-500')
            ],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), 
                documentStyle.getPropertyValue('--yellow-400'),
                 documentStyle.getPropertyValue('--green-400'), 
                 documentStyle.getPropertyValue('--red-300'), 
                 documentStyle.getPropertyValue('--gray-400'), 
                 documentStyle.getPropertyValue('--purple-400')]
            }
        ]
    };
}
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    return {
        plugins: {
            legend: {
                labels: {
                    cutout: '60%',
                    color: textColor
                }
            }
        }
    };
};
</script>
