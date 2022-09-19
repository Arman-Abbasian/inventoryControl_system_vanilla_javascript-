import { addNewProductvisual } from "../visualPages/AddNewProductVisual.js";
const main=document.querySelector("main")


class AddNewProduct{
    constructor(){
        main.innerHTML=addNewProductvisual;
        this.newProduct={productName:"",productSpecification:"",measurementUnit:""};
        //get elements
        //beacuse this add just by js to dom you can not add this two element at top of the this code
        this.productName=document.querySelector("#productName");
        this.productSpecification=document.querySelector("#productSpecification");
        this.unit=document.getElementsByName("unit");
        this.addNewProduct=document.querySelector("#addNewProduct");
        //add events to elements
        this.productName.addEventListener("change",(e)=>this.productNameInputHandler(e));
        this.productSpecification.addEventListener("change",(e)=>this.productSpecificationHandler(e));
        [...this.unit].forEach(item=>item.addEventListener("change",(e)=>this.unitHandler(e)));
        this.addNewProduct.addEventListener("click",(e)=>this.addNewProductHandler(e))  
    };


    
    productNameInputHandler(e){
        this.newProduct.productName=e.target.value
    };

    productSpecificationHandler(e){
        this.newProduct.productSpecification=e.target.value
    };

    unitHandler(e){
        [...this.unit].forEach(item=>{
            item.removeAttribute("checked");
            if(item.value===e.target.value){
                item.setAttribute("checked",'');
                this.newProduct.measurementUnit=item.value;
            }
        });
    };

    addNewProductHandler(e){
        e.preventDefault();
        axios.post("http://localhost:4000/newProducts",this.newProduct)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
        this.productName.value="";
        this.productSpecification.value="";
        [...this.unit].forEach(item=>{
            item.removeAttribute("checked");
            item.checked=false;
        });
        this.newProduct={productName:"",productSpecification:"",measurementUnit:""};
        console.log(this.newProduct)
    };


    };
export default new AddNewProduct();