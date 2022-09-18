import  { visual } from "../visualPages/AddNewProductVisual.js";

const main=document.querySelector("main")
class AddNewProduct{
    constructor(){
        main.innerHTML=visual;
        this.newProduct={productName:"",productSpecification:"",measurmentUnit:""}
    };
}
export default new AddNewProduct();