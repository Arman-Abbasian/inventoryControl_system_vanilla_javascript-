const main=document.querySelector('main');
import { enter } from "../visualPages/Enter.js";
class Enter{
    constructor(){
        //make the content of this page
        main.innerHTML=enter;
        this.productOptions=[];
        this.supplierOption=[];
        //inital container
        this.enterData={selectedProductName:"",selectedSpecification:"",selectedDate:"",selectedNumber:null,selectedSupplier:"",selectedDelivered:[],transfree:""};
        //get the element
        this.productNameInput=document.querySelector("#productNameInput");
        this.productNameDataList=document.querySelector("#productNameDataList");
        this.productSpecification=document.querySelector("#productSpecification");
        this.dateInput=document.querySelector("#dateInput");
        this.numberOfProductInput=document.querySelector("#numberOfProductInput");
        this.selectedSupplierSelectInput=document.querySelector("#selectedSupplierSelectInput");
        this.selectedSupplierDataList=document.querySelector("#selectedSupplierDataList");
        this.selectedDeliveredCheckbox=document.querySelector("#selectedDeliveredCheckbox");
        this.selectedTransfreeInputSelect=document.querySelector("#selectedTransfreeInputSelect");
        this.selectedTransfreeDataList=document.querySelector("#selectedTransfreeDataList");
        this.addDataButton=document.querySelector("#addDataButton");
        //event for tags
        this.productNameInput.addEventListener("change",(e)=>this.productNameInputHandler(e));
        this.productSpecification.addEventListener("change",(e)=>this.productSpecificationSelectHandler(e));
        this.dateInput.addEventListener("change",(e)=>this.dateInputHandler(e));
        this.numberOfProductInput.addEventListener("change",(e)=>this.numberOfProductInputHandler(e));
        this.selectedSupplierSelectInput.addEventListener("change",(e)=>this.selectedSupplierSelectInputHandler(e));
        this.selectedTransfreeInputSelect.addEventListener("change",(e)=>this.selectedTransfreeInputSelectHandler(e))
        this.addDataButton.addEventListener("click",(e)=>this.addDataButtonHandler(e));
        this.fillProductOption();
        this.fillSupplier();
        this.makeselectedDeliveredCheckbox(); 
        this.fillTransfreeOptions(); 
    }

    fillProductOption(){
        axios.get("http://localhost:4000/newProducts")
        .then(res=>{
            const productNameOptions=res.data.map(item=>item.productName);
            const uniqueProductNameOptions = productNameOptions.filter((c, index) => {
                return productNameOptions.indexOf(c) === index;
            });
            this.productOptions=uniqueProductNameOptions;
            let productOptionsContainer="";
            this.productOptions.forEach(item=>{
                productOptionsContainer+=`<option value='${item}'>`
            });
            this.productNameDataList.innerHTML=productOptionsContainer;
        })
        .catch(err=>console.log(err))
    };

    fillSupplier(){
        axios.get("http://localhost:4000/suppliers")
        .then(res=>{
            const supplierOptions=res.data.map(item=>item.name);
            const uniqueSupplierOptions = supplierOptions.filter((c, index) => {
                return supplierOptions.indexOf(c) === index;
            });
            this.supplierOptions=uniqueSupplierOptions;
            let supplierOptionsContainer="";
            this.supplierOptions.forEach(item=>{
                supplierOptionsContainer+=`<option value='${item}'>`
            });
            this.selectedSupplierDataList.innerHTML=supplierOptionsContainer;
            console.log(this.selectedSupplierDataList)
            console.log(this.supplierOptions)
        })
        .catch(err=>console.log(err))

    };

    makeselectedDeliveredCheckbox(){
        let storePersonnelContainer="";
        axios.get("http://localhost:4000/storePersonnel")
        .then(res=>{
            const data=res.data;
            data.forEach(item=>{
                storePersonnelContainer+=`
                <div class="w-full">
                    <input type="checkbox" id=${item.id} name='${item.name}' value='${item.name}' class="sotrePersonnelCheckbox ring-1 ring-blue-500 rounded-sm p-2 focus:outline-none">
                    <label for=${item.id}>${item.name}</label>
                </div>
                `
            });
            this.selectedDeliveredCheckbox.innerHTML=storePersonnelContainer;
            const wholeCheckBoxes=document.querySelectorAll(".sotrePersonnelCheckbox");
            const wholeCheckBoxesArray=[...wholeCheckBoxes]
            const initialAyyar=null;
            wholeCheckBoxes.forEach(item=>{
                item.addEventListener("change",()=>{
                    this.enterData.selectedDelivered=[];
                   const checkedItems= wholeCheckBoxesArray.filter(item=>item.checked===true);
                   checkedItems.forEach(item=>this.enterData.selectedDelivered.push(item.value));
                });
            })
        })
        .catch(err=>console.log(err));
    };

    fillTransfreeOptions(){
        axios.get("http://localhost:4000/transfree")
        .then(res=>{
            const data=res.data;
            let transfreeContainer="";
            data.forEach(item => {
                transfreeContainer+=`<option value='${item.name}'>${item.name}</option>`
            });
            this.selectedTransfreeDataList.innerHTML= transfreeContainer;
            console.log(this.selectedTransfreeDataList);
        })
        .catch(err=>console.log(err))
    };


    productNameInputHandler(e){
        this.enterData.selectedProductName=e.target.value;
        if(this.enterData.selectedProductName!==""){
            this.productSpecification.removeAttribute("disabled");
            axios.get("http://localhost:4000/newProducts")
            .then(res=>{
                const data=res.data;
                const filterdCustomer=data.filter(item=>item.productName===this.enterData.selectedProductName);
                let specificationOptionsContainer=""
                filterdCustomer.forEach(item=>{
                    specificationOptionsContainer+=`<option value='${item.productSpecification}'>${item.productSpecification}</option>`
                });
                this.productSpecification.innerHTML=specificationOptionsContainer;
                this.enterData.selectedSpecification=this.productSpecification.value;
            })
            .catch(err=>console.log(err))
        };
    };

    productSpecificationSelectHandler(e){
        this.enterData.selectedSpecification=e.target.value
    };
    dateInputHandler(e){
       const date= (e.target.value);
       const dateString=new Date(date).toISOString();
       this.enterData.selectedDate=dateString;   
    };

    numberOfProductInputHandler(e){
        this.enterData.selectedNumber=parseInt(e.target.value);
    };

    selectedSupplierSelectInputHandler(e){
        this.enterData.selectedSupplier=e.target.value;
    };

    selectedTransfreeInputSelectHandler(e){
        this.enterData.transfree=e.target.value;
    };
    
    addDataButtonHandler(e){
        e.preventDefault();
        axios.post("http://localhost:4000/enter",this.enterData);
        console.log(this.enterData)
        this.enterData={selectedProductName:"",selectedSpecification:"",selectedDate:"",selectedNumber:null,selectedRecipent:"",selectedDelivered:[]};

    };
};
export default Enter;