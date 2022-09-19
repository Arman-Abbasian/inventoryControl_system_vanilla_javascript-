import AddNewProduct from "./pages/AddNewProduct.js";
import Enter from './pages/Enter.js';
import Exit from './pages/Exit.js';
import InvetoryControl from './pages/InventoryControl.js';

const body=document.querySelector("body")

const routes=[
    {path:"/public/index.html",view:()=>new AddNewProduct()},
    {path:"/public/index.html/addNewProduct",view:()=>new AddNewProduct()},
    {path:"/public/index.html/enter",view:()=>new Enter()},
    {path:"/public/index.html/exit",view:()=>new Exit()},
    {path:"/public/index.html/invetoryControl",view:()=>new InvetoryControl()}

];
class Router{
    constructor(){
     this.makeLinks()   
    };


    makeLinks(){
        //make links for <a> tags
        const a= document.querySelectorAll("a");
        [...a].forEach(item=>{
           item.addEventListener("click",(e)=>{
            e.preventDefault();
            history.pushState(null,null,e.target.getAttribute("href"));
            //decide to show component
            this.router()
           })
        })
    };

    //decide to show which component
    router(){
        const newRoutes= routes.map(item=>{
            if(item.path===location.pathname){
                return {item,isLocated:true}
            }else{
                return {item,isLocated:false}
            }
        });
        console.log(newRoutes);
        const selectedRoute=newRoutes.find(item=>item.isLocated===true);
        console.log(selectedRoute)
        selectedRoute.item.view();
    }
    


};
export default new Router();