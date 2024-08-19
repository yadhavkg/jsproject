async function getData(){
    try {
        const res=await fetch("https://dummyjson.com/products")  
        const products=await res.json()
        // console.log(products.products);
        str=``
        products.products.map((product)=>{
            str+=`<div class="card">
            <div class="pic"><img src="${product.thumbnail}" alt=""></div>
           
                <h4>${product.title}</h4>
                <h6>${product.price}</h6>
                <a href="./load.html"><button>BUY</button><a>
            </div>`


        })
        document.getElementById("rslt").innerHTML=str
 } catch (error) {
        console.log(error);  
    }
}

getData();

// search
document.getElementById("search").addEventListener ('keyup',async(e)=>{
    console.log(e.target.vlaue);
    try {
        const res=await fetch("https://dummyjson.com/products")  
        const products=await res.json()
        // console.log(products.products);
        str=``
        products.products.filter((product)=>product.title.toLowerCase().includes(e.target.value.toLowerCase())).map((product)=>{

            str+=`<div class="card">
            <div class="pic"><img src="${product.thumbnail}" alt=""></div>
           
                <h4>${product.title}</h4>
                <h6>${product.price}</h6>
                <a href="./load.html"><button>BUY</button><a>
            </div>`


        })
        document.getElementById("rslt").innerHTML=str
 } catch (error) {
        console.log(error);  
    }
    
})

