export const enter=`
<div class="p-2 drop-shadow-lg bg-gray-700 rounded-md">
    <form class="flex flex-col justify-center items-center gap-y-5 p-2 drop-shadow-md container max-w-sm mx-auto">
        <div class="w-full">
            <input id="productNameInput" list="productNameDataList" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black w-full">
            <datalist id="productNameDataList" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black"></datalist> 
        </div>
        <div class="w-full">
            <select id="productSpecification" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black w-full" disabled></select>
        </div>
        <div class="w-full flex justify-center items-center gap-2">
            <input id="dateInput" type="date" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black flex-1"/>
            <input id="numberOfProductInput" type="number" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black flex-1"/>
        </div>
        <div class="w-full">
            <input id="selectedRecipentSelectInput" list="selectedRecipentDataList" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black w-full">
            <datalist id="selectedRecipentDataList" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black"></datalist>
        </div>
        <div id="selectedDeliveredCheckbox" class="flex flex-col justify-center items-center "></div>
        <div>
                <datalist id="brow">
                    <option value="Internet Explorer">
                    <option value="Firefox">
                    <option value="Chrome">
                    <option value="Opera">
                    <option value="Safari">
                </datalist>
        </div>
            <button class="px-4 py-2 bg-blue-500 rounded-sm drop-shadow-lg hover:bg-blue-400 w-full">Add product</button>
    </form>
`