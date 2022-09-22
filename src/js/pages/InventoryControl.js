const main=document.querySelector("main");
class InvetoryControl{
    constructor(){
        this.makeProducts();
    };

    makeProducts(){
        let statisticContainer=null;
        axios.get("http://localhost:4000/newProducts")
        .then(res=>{
            let wholeItemEnter=null;
            let wholeItemExit=null;
            const data=res.data;
            data.forEach(item => {
                axios.get(`http://localhost:4000/enter`)
                .then(res=>{
                    const filteredProductSpecification=res.data.filter(element=>{
                       return( element.selectedProductName==item.productName && element.selectedSpecification==item.productSpecification)
                    });
                  wholeItemEnter=filteredProductSpecification.reduce((acc, curr)=>{
                        return acc + curr.selectedNumber;
                    },0);
            })
            .catch(err=>console.log(err));

            axios.get(`http://localhost:4000/exit`)
                .then(res=>{
                    const filteredProductSpecification=res.data.filter(element=>{
                       return( element.selectedProductName==item.productName && element.selectedSpecification==item.productSpecification)
                    });
                  wholeItemExit=filteredProductSpecification.reduce((acc, curr)=>{
                        return acc + curr.selectedNumber;
                    },0);
                    console.log(wholeItemExit)
                    statisticContainer+=`
                <div class="flex justify-between items-center gap-2 p-2 drop-shadow-lg bg-blue-600 mb-3">
                    <p>${item.productName}</p>
                    <p>${item.productSpecification}</p>
                    <p>${item.measurementUnit}</p>
                    <p>${wholeItemEnter}</p>
                    <p>${wholeItemExit}</p>
                    <p>${wholeItemEnter - wholeItemExit}</p>
                </div>
                `
                main.innerHTML=statisticContainer;
            })
            .catch(err=>console.log(err));
        });
            })
        .catch(err=>console.log(err))
    }
};
export default InvetoryControl;