import { mainPage } from "../visualPages/Main";
const main=document.querySelector("main");

class MainPage{
    constructor(){
        main.innerHTML=mainPage;
    }
};
export default MainPage;