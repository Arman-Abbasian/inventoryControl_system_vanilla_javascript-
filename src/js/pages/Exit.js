const main=document.querySelector('main');
import { exit } from "../visualPages/Exit.js";
class Exit{
    constructor(){
        //make the content of this page
        main.innerHTML=exit;
        //inital container
        this.exitData={selectedProductName:"",selectedSpecification:"",selectedDate:"",selectedNumber:null,selectedRecipent:"",selectedDelivered:[]};
        //get the element
        this.productNameInput=document.querySelector("#productNameInput");
        this.productNameDataList=document.querySelector("#productNameDataList");
        this.productSpecification=document.querySelector("#productSpecification");
        this.dateInput=document.querySelector("#dateInput");
        this.numberOfProductInput=document.querySelector("#numberOfProductInput");
        this.selectedRecipentSelectInput=document.querySelector("#selectedRecipentSelectInput");
        this.selectedRecipentDataList=document.querySelector("#selectedRecipentDataList");
        this.selectedDeliveredCheckbox=document.querySelector("#selectedDeliveredCheckbox");
        this.addDataButton=document.querySelector("#addDataButton");
        //event for tags
        this.productNameInput.addEventListener("change",(e)=>this.productNameInputHandler(e));
        this.productSpecification.addEventListener("change",(e)=>this.productSpecificationSelectHandler(e));
        this.dateInput.addEventListener("change",(e)=>this.dateInputHandler(e));
        this.numberOfProductInput.addEventListener("change",(e)=>this.numberOfProductInputHandler(e));
        this.selectedRecipentSelectInput.addEventListener("change",(e)=>this.selectedRecipentSelectInputHandler(e));
        this.addDataButton.addEventListener("click",(e)=>this.addDataButtonHandler(e));
        this.fillProductOption()
        this.fillPersonnelRecipentOptions();
        this.makeselectedDeliveredCheckbox();
        this.productOptions=[];
        
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

    fillPersonnelRecipentOptions(){
        let personnelContainer="";
        axios.get("http://localhost:4000/personnel")
        .then(res=>{
            const data=res.data;
            data.forEach(item => {
                personnelContainer+=`<option value='${item.name}'>${item.name}</option>`
            });
            this.selectedRecipentDataList.innerHTML=personnelContainer;
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
                    this.exitData.selectedDelivered=[];
                   const checkedItems= wholeCheckBoxesArray.filter(item=>item.checked===true);
                   checkedItems.forEach(item=>this.exitData.selectedDelivered.push(item.value));
                });
            })
        })
        .catch(err=>console.log(err));
    }



    productNameInputHandler(e){
        this.exitData.selectedProductName=e.target.value;
        if(this.exitData.selectedProductName!==""){
            this.productSpecification.removeAttribute("disabled");
            axios.get("http://localhost:4000/newProducts")
            .then(res=>{
                const data=res.data;
                const filterdCustomer=data.filter(item=>item.productName===this.exitData.selectedProductName);
                let specificationOptionsContainer=""
                filterdCustomer.forEach(item=>{
                    specificationOptionsContainer+=`<option value='${item.productSpecification}'>${item.productSpecification}</option>`
                });
                this.productSpecification.innerHTML=specificationOptionsContainer;
                this.exitData.selectedSpecification=this.productSpecification.value;
            })
            .catch(err=>console.log(err))
        };

    };

    productSpecificationSelectHandler(e){
        this.exitData.selectedSpecification=e.target.value
    };
    dateInputHandler(e){
       const date= (e.target.value);
       const dateString=new Date(date).toISOString();
       this.exitData.selectedDate=dateString;   
    };

    numberOfProductInputHandler(e){
        this.exitData.selectedNumber=parseInt(e.target.value);
    };

    selectedRecipentSelectInputHandler(e){
        this.exitData.selectedRecipent=e.target.value;
    };
    addDataButtonHandler(e){
        e.preventDefault();
        axios.post("http://localhost:4000/exit",this.exitData);
        e.preventDefault();
        this.exitData={selectedProductName:"",selectedSpecification:"",selectedDate:"",selectedNumber:null,selectedRecipent:"",selectedDelivered:[]};

    }
};
export default Exit;