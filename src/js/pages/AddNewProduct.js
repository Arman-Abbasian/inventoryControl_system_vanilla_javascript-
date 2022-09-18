import { addNewProductvisual } from "../visualPages/AddNewProductVisual.js";
import Notify from 'notifyjs';
const main=document.querySelector("main")


class AddNewProduct{
    constructor(){

        var myNotification = new Notify('Yo dawg!', {
            body: 'This is an awesome notification',
            notifyShow: onNotifyShow
        });
        
        function onNotifyShow() {
            console.log('notification was shown!');
        };
        myNotification.show();

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
            [...this.unit].forEach(item=>{
                item.removeAttribute("checked");
                item.checked=false;
            
            });
            this.newProduct={productName:"",productSpecification:"",measurementUnit:""};
            console.log(this.newProduct)
        })

      
      
    };
    changeHandler(e){
        console.log(e.target.value)
    };
    









}
export default new AddNewProduct();