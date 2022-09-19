export const enter=`
<div class="p-2 drop-shadow-lg bg-gray-700 rounded-md">
    <form class="flex flex-col justify-center items-center gap-y-5 p-2 drop-shadow-md container max-w-sm mx-auto">
        <div class="w-full">
            <input list="productName" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black w-full">
            <datalist id="productName" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black">
                <option value="Internet Explorer">
                <option value="Firefox">
                <option value="Chrome">
                <option value="Opera">
                <option value="Safari">
            </datalist> 
        </div>
        <div class="w-full">
            <select class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black w-full">
                <option>door15</option>
                <option>door25</option>
                <option>door30</option>
            </select>
        </div>
        <div class="w-full flex justify-center items-center gap-2">
            <input type="date" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black flex-1"/>
            <input type="number" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black flex-1"/>
        </div>
        <div class="w-full">
            <input list="brow" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black w-full">
        </div>
        <div class="w-full">
            <datalist id="brow" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none text-black">
                <option value="Internet Explorer">
                <option value="Firefox">
                <option value="Chrome">
                <option value="Opera">
                <option value="Safari">
            </datalist>
        </div>
            <div class="flex flex-col justify-center items-center ">
                <div class="w-full">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none">
                    <label for="vehicle1"> I have a bike</label>
                </div>
                <div class="w-full">
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none">
                    <label for="vehicle2"> I have a car</label>
                </div>
                <div class="w-full">
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" class="ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none">
                    <label for="vehicle3"> I have a boat</label>
                </div>
            </div>
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