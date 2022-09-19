const main=document.querySelector('main');
import { enter } from "../visualPages/Enter.js";
class Enter{
    constructor(){
        main.innerHTML=enter;
        this.fillProductOption();
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
        })
        .catch(err=>console.log(err))
        this.productOptions
    }
};
export default  Enter;