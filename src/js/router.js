import AddNewProduct from "./pages/AddNewProduct.js";

const body=document.querySelector("body")

const routes=[
    {path:"/public/index.html",view:()=>AddNewProduct},
    {path:"/public/index.html/addNewProduct",view:()=>AddNewProduct.addNewProductpage()},
    {path:"/public/index.html/inventoryControl",view:()=>AddNewProduct.addNewProductpage()}

];
class Router{
    constructor(){
      const newRoutes= routes.map(item=>{
            if(item.path===location.pathname){
                return {item,isLocated:true}
            }else{
                return {item,isLocated:false}
            }
        });
        console.log(newRoutes);
        const selectedRoute=newRoutes.find(item=>item.isLocated===true);
        selectedRoute.item.view();
    };
    
};
export default new Router();