
     export const addNewProductvisual=
      `<div class="p-2 drop-shadow-lg bg-gray-700 rounded-md">
        <form class="flex flex-col justify-center items-center gap-y-4 p-1">
           <div class="flex flex-col justify-center items-start gap-2 w-2/4">
            <label for="productName" class="w-full">product name</label>
            <input type="text" " class="rounded-md w-full text-black" id="productName"/>
           </div>
           <div class="flex flex-col justify-center items-start gap-2 w-2/4">
            <label for="productSpecification" class="w-full">product specification</label>
            <input type="text" class="rounded-md w-full text-black" id="productSpecification"/>
           </div>
           <label  class="w-2/4">unit of measurement</label>
           <div class="flex flex-col justify-center items-start gap-1 drop-shadow-md shadow-md p-2 rounded-md bg-slate-700 w-2/4">
           
                <div>
                    <input type="radio" id="kg" name="unit" value="kg" class="cursor-pointe">
                    <label for="kg">kg</label><br>
                </div>
                
                <div>
                    <input type="radio" id="number" name="unit" value="number" class="cursor-pointer">
                    <label for="number">Number</label><br>
                </div>
                <div>
                    <input type="radio" id="role" name="unit" value="role" class="cursor-pointer">
                    <label for="role">role</label>
                </div>
                <div>
                    <input type="radio" id="sheet" name="unit" value="sheet" class="cursor-pointer">
                    <label for="sheet">sheet</label>
                </div>
                <div>
                    <input type="radio" id="shakheh" name="unit" value="shakheh" class="cursor-pointer">
                    <label for="shakheh">shakkeh</label>
                </div>
           </div>

           <button class="px-4 py-2 bg-blue-600 rounded-md w-2/4 hover:bg-blue-500" id="addNewProduct">Add</button>
            
        </form>
    </div>
        `