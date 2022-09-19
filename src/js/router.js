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
        //make links for <a> tags
        const a= document.querySelectorAll("a");
        [...a].forEach(item=>{
            console.log(item.getAttribute("href"))
           item.addEventListener("click",(e)=>{
            e.preventDefault();
            history.pushState(null,null,e.target.getAttribute("href"));
           })
        })
    };
    
};
export default new Router();