<template>
        <div class="w-full h-[80%] flex justify-center items-center ">
            <Toast />
            <div class="w-[99%] h-[95%] overflow-y-scroll bg-[#ffffff0d] p-5 rounded-lg">
                <Toolbar class="mb-4 flex justify-between px-4 bg-[#393C49] border-[#ffffff26]">
                <template  #start >
                    <div class="w-full h-full flex justify-center items-center ">
                        <Button label="New" icon="pi pi-plus mr-1" severity="success" class="mr-2 px-2 py-[5px] bg-[#0BD18A] text-white rounded-md font-medium" @click="openNew" />
                        <Button label="Delete" icon="pi pi-trash mr-1" severity="danger" class="mr-2 px-2 py-[5px] bg-[#FC6161] text-white rounded-md font-medium" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
                    </div>
                </template>

                <template #end>
                    <div class="w-full h-full flex justify-center items-center">
                        <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 px-2 py-[5px] inline-block" />
                        <Button label="Export" icon="pi pi-upload" severity="help" class="px-2 py-[5px]" @click="exportCSV($event)"  />
                    </div>
                </template>
            </Toolbar>

            <DataTable ref="dt" :value="data" :selection="selectedProducts" dataKey="id" 
                :paginator="true" :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
                <template #header>
                    <div class="flex flex-wrap gap-2 items-center justify-between">
                        <h4 class="m-0 text-[#868C9B] rounded-md">Manage Products</h4>
						<span class="p-input-icon-left p-2 rounded-md">
                            <i class="pi pi-search pr-2 pl-2" />
                            <InputText v-model="filters['global'].value" class="outline-none text-[15px] border-none bg-[#4a4e5c]" placeholder="Search..." />
                        </span>
					</div>
                </template>

                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column field="code" header="Code" sortable style="min-width:12rem"></Column>
                <Column field="name" header="Name" sortable style="min-width:16rem"></Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <img :src="`${slotProps.data.image}`" :alt="slotProps.data.image" class="shadow-2 rounded-md " />
                    </template>
                </Column>
                <Column field="price" header="Price" sortable style="min-width:8rem">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </Column>
                <Column field="category" header="Category" sortable style="min-width:10rem"></Column>
                <Column field="rating" header="Reviews" sortable style="min-width:12rem">
                    <template #body="slotProps">
                        <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                    </template>
                </Column>
                <Column field="inventoryStatus" header="Status" sortable style="min-width:12rem">
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getStatusLabel(slotProps.data.inventoryStatus)" />
                    </template>
                </Column>
                <Column :exportable="false" style="min-width:8rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
            </div>
        </div>

        <Dialog v-model:visible="productDialog" :style="{width: '450px'}" header="Product Details" :modal="true" class="p-fluid">
            <!-- https://primefaces.org/cdn/primevue/images/product/ -->
            <img v-if="product.image" :src="`${product.image}`" :alt="product.image" class="block m-auto pb-3" />
            <div class="field">
                <label for="name">Name</label>
                <InputText id="name" v-model.trim="product.name" required="true" autofocus :class="{'p-invalid': submitted && !product.name}" />
                <small class="p-error" v-if="submitted && !product.name">Name is required.</small>
            </div>
            <div class="field">
                <label for="description">Description</label>
                <Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" />
            </div>

            <div class="field">
				<label for="inventoryStatus" class="mb-3">Inventory Status</label>
				<Dropdown id="inventoryStatus" v-model="product.inventoryStatus" :options="statuses" optionLabel="label" placeholder="Select a Status">
					<template #value="slotProps">
						<div v-if="slotProps.value && slotProps.value.value">
                            <Tag :value="slotProps.value.value" :severity="getStatusLabel(slotProps.value.label)" />
                        </div>
                        <div v-else-if="slotProps.value && !slotProps.value.value">
                            <Tag :value="slotProps.value" :severity="getStatusLabel(slotProps.value)" />
                        </div>
						<span v-else>
							{{slotProps.placeholder}}
						</span>
					</template>
				</Dropdown>
			</div>

            <div class="field">
                <label class="mb-3">Category</label>
                <div class="formgrid grid">
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category1" name="category" value="Accessories" v-model="product.category" />
                        <label for="category1">Accessories</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category2" name="category" value="Clothing" v-model="product.category" />
                        <label for="category2">Clothing</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category3" name="category" value="Electronics" v-model="product.category" />
                        <label for="category3">Electronics</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category4" name="category" value="Fitness" v-model="product.category" />
                        <label for="category4">Fitness</label>
                    </div>
                </div>
            </div>

            <div class="formgrid grid">
                <div class="field col">
                    <label for="price">Price</label>
                    <InputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" />
                </div>
                <div class="field col">
                    <label for="quantity">Quantity</label>
                    <InputNumber id="quantity" v-model="product.quantity" integeronly />
                </div>
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" text @click="hideDialog"/>
                <Button label="Save" icon="pi pi-check" text @click="saveProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete <b>{{product.name}}</b>?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times " text @click="deleteProductDialog = false"/>
                <Button label="Yes" icon="pi pi-check" text @click="deleteProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete the selected products?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductsDialog = false"/>
                <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedProducts" />
            </template>
        </Dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { useToast } from 'primevue/usetoast';
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";


const toast = useToast();
const dt = ref();
const products = ref([]);
const productDialog = ref(false);
const deleteProductDialog = ref(false);
const deleteProductsDialog = ref(false);
const product = ref({});
const selectedProducts = ref();
import { postAPI, putAPI, deleteAPI, getAPI } from "../../../api/product";
const queryClient = useQueryClient();

const filters = ref({
    'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
});


const submitted = ref(false);
const statuses = ref([
    {label: 'INSTOCK', value: 'instock'},
    {label: 'LOWSTOCK', value: 'lowstock'},
    {label: 'OUTOFSTOCK', value: 'outofstock'}
]);

const {mutateAsync} = useMutation({
    mutationFn: (newTodo) => postAPI(newTodo),
    onSuccess : () => {
        queryClient.invalidateQueries('productList')
    }
})
const {mutate : updateProduct} = useMutation({
    mutationFn: (newTodo) => putAPI(newTodo),
    onSuccess: (data) => {
        queryClient.setQueryData(['productList', data.data.id], data.data)
    }
})
const {mutateAsync : deleteMutate} = useMutation({
    mutationFn: (newTodo) => {
        console.log(newTodo);
        return deleteAPI(newTodo)
    }
})
const {data, refetch} = useQuery({
    queryKey: ['productList'],
    queryFn: () => getAPI(),
    select: (data) => {
        return data.data
    }
})
const formatCurrency = (value) => {
    if(value)
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    return;
};
const openNew = () => {
    product.value = {};
    submitted.value = false;
    productDialog.value = true;
};
const hideDialog = () => {
    productDialog.value = false;
    submitted.value = false;
};
const saveProduct = async () => {
    submitted.value = true;

    if (product.value.name.trim()) {
        if (product.value.id) {
            updateProduct(product.value)
            toast.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
            console.log('Chạy vào update');
        }
        else {
            console.log('Chạy vào add', product.value);
            // product.value.id = createId();
            // product.value.code = createId();
            // product.value.image = 'product-placeholder.svg';
            product.value.inventoryStatus = product.value.inventoryStatus ? product.value.inventoryStatus.value : 'INSTOCK';
            // products.value.push(product.value);
            await mutateAsync(product.value)
            toast.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        }
        productDialog.value = false;
        product.value = {};
    }
};
const editProduct = (prod) => {
    if (product.value) {
        console.log("mới click đã chạy vào đây");
        product.value = {...prod};
        productDialog.value = true;
    }
};
const confirmDeleteProduct = (prod) => {
    product.value = prod;
    deleteProductDialog.value = true;
};
const deleteProduct = async () => {
    deleteProductDialog.value = false;
    await deleteMutate(product.value.id);
    refetch(data)
    toast.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
};

onMounted(() => {
    products.value = data;
});

const findIndexById = (id) => {
    let index = -1;
    for (let i = 0; i < products.value.length; i++) {
        if (products.value[i].id === id) {
            index = i;
            break;
        }
    }
    return index;
};
const createId = () => {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}
const exportCSV = () => {
    dt.value.exportCSV();
};
const confirmDeleteSelected = () => {
    deleteProductsDialog.value = true;
};
const deleteSelectedProducts = () => {
    products.value = products.value.filter(val => !selectedProducts.value.includes(val));
    deleteProductsDialog.value = false;
    selectedProducts.value = null;
    toast.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
};

const getStatusLabel = (status) => {
    switch (status.label) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

</script>



<style lang="css">

#pv_id_13 {
    display: flex;
    gap: 5px;
    background-color: #393C49 !important;
}
.p-paginator .p-dropdown .p-dropdown-label {
    color: white;
}
.p-datatable .p-datatable-header {
    background-color: #393C49 !important;
    border: 1px solid #ffffff26;
    border-width: 0 0 1px 0;
    padding: 0;
}

.p-datatable-table {
    background-color: #393C49 !important;
}
.p-paginator{
    background-color: #393C49 !important;
}
.p-datatable-tbody{
    background-color: #393C49 !important;
}
.p-datatable .p-paginator-bottom{
    border: none !important;
}
.p-datatable .p-datatable-tbody > tr{
    background-color: #393C49 !important;
}
.p-datatable .p-datatable-tbody > tr > td{
    color: white;
    border: none !important;
    /* display: flex; */
}
.p-datatable .p-datatable-thead > tr > th{
    color: white;
    background-color: #393C49 !important;
}
.p-datatable .p-datatable-thead > tr > th{
    border: 1px solid #ffffff26;
    border-width: 0 0 1px 0;
}

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

</style>