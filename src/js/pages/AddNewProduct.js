import { addNewProductvisual } from "../visualPages/AddNewProductVisual.js";
const main=document.querySelector("main")


class AddNewProduct{
    constructor(){
        main.innerHTML=addNewProductvisual;
        this.newProduct={productName:"",productSpecification:"",measurementUnit:""};
        //beacuse this add just by js to dom you can not add this two element at top of the this code
        this.productName=document.querySelector("#productName");
        this.productSpecification=document.querySelector("#productSpecification");
        this.unit=document.getElementsByName("unit");
        this.productName.addEventListener("change",(e)=>this.newProduct.productName=e.target.value);
        this.productSpecification.addEventListener("change",(e)=>this.newProduct.productSpecification=e.target.value);
       [...this.unit].forEach(item=>item.addEventListener("change",(e)=>{
        [...this.unit].forEach(item=>item.removeAttribute("checked"));
        item===e.target && item.setAttribute("checked",'');
        this.newProduct.measurementUnit=item.value;
    }));
    this.addNewProduct=document.querySelector("#addNewProduct");
        console.log(this.addNewProduct)
        this.addNewProduct.addEventListener("click",(e)=>{
            e.preventDefault();
            console.log(this.newProduct);
            this.productName.value="";
            this.productSpecification.value="";
            [...this.unit].forEach(item=>item.value="");
        })

      
      
    };
    changeHandler(e){
        console.log(e.target.value)
    };
    









}
export default new AddNewProduct();