export const enter=`
<div class="p-2 drop-shadow-lg bg-gray-700 rounded-md">
    <form class="flex flex-col justify-center items-center gap-y-5 p-2 drop-shadow-md container max-w-sm mx-auto">
        <div class="w-full">
        <label for="productNameInput">product name</label>
            <input id="productNameInput" list="productNameDataList" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black w-full">
            <datalist id="productNameDataList" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black"></datalist> 
        </div>
        <div class="w-full">
        <label for="productSpecification">product specification</label>
            <select id="productSpecification" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black w-full" disabled></select>
        </div>
        <div class="w-full flex justify-center items-center gap-2">
            <div class="flex-1 flex flex-col justify-start items-start gap-2">
                <label for="dateInput" class="">date of enter</label>
                <input id="dateInput" type="date" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black flex-1"/>
            </div>
            <div class="flex-1 flex flex-col justify-start items-start gap-2">
                <label for="numberOfProductInput">number of enter</label>
                <input id="numberOfProductInput" type="number" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black flex-1"/>
            </div>
        </div>
        <div class="w-full">
        <label for="selectedRecipentSelectInput">supplier</label>
            <input id="selectedSupplierSelectInput" list="selectedSupplierDataList" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black w-full">
            <datalist id="selectedSupplierDataList" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black"></datalist>
        </div>
        <div class="flex flex-col gap-2 justify-start items-start w-full p-2 ring-1 ring-blue-600 rounded-md">
            <label for="selectedDeliveredCheckbox">delivery guy</label>
            <div id="selectedDeliveredCheckbox" class="flex flex-col justify-center items-center "></div>
        </div>
        <div class="flex flex-col gap-2 justify-start items-start w-full">
            <label for="selectedTransfreeInputSelect">transferee</label>
            <input id="selectedTransfreeInputSelect" list="selectedTransfreeDataList" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black w-full">
            <datalist id="selectedTransfreeDataList" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black"></datalist> 
        </div>
            <button id="addDataButton" class="px-4 py-2 bg-blue-500 rounded-sm drop-shadow-lg hover:bg-blue-400 w-full">Add product</button>
    </form>
`