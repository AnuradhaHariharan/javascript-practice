window.addEventListener("DOMContentLoaded",()=>{
//https://dummyjson.com/products?result=100

let app= document.querySelector(".app");
const paginationContainer =document.createElement("div")
let page=1;
let productsArray=[];

const getData= async ()=>{
    try {
    let data= await fetch("https://dummyjson.com/products?limit=100");
    let jsonData= await data.json();

    if(jsonData && jsonData.products){
    productsArray=jsonData.products;
    render();
    }
    } catch (error) {
        console.log(error)
    }  
}

const render =()=>{
    let productContainer =document.createElement("div")
    paginationContainer.classList.add("pagination-container")
    productContainer.classList.add("product-container")

    if(productsArray.length>0){
        productsArray.slice(page*10-10,page*10).forEach((product)=>{
            let productBox =document.createElement("div")
            productBox.classList.add("product")
            productBox.innerHTML=`
            <img src="${product.thumbnail}"/>
            <p>${product.title}</p>
            <p>${product.description}</p>
            `
            productContainer.appendChild(productBox);
        })
       
        if(page>1){
            const prevButton =createPaginationButton("⏪")
            paginationContainer.appendChild(prevButton)
        }
        for(let i=0;i<=productsArray.length/10;i++){
            const pageButton=createPaginationButton(i+1)
            paginationContainer.appendChild(pageButton);
        }
        if(page<productsArray.length/10){
            const forwardButton =createPaginationButton("⏩")
            paginationContainer.appendChild(forwardButton);
        }
      

    }
    app.appendChild(productContainer)
    app.appendChild(paginationContainer)

}

const createPaginationButton=(text)=>{
   const button =document.createElement("button")
   button.textContent=text;
   button.classList.add("page-btn")
   if(text==="⏪"){
    button.setAttribute("id","backward")
   }
   else if(text==="⏩"){
    button.setAttribute("id","forward")
   }
   else {
   button.setAttribute("id",text)
   }
   return button;
}

paginationContainer.addEventListener("click",(event)=>{
    app.textContent="";
    paginationContainer.textContent=""
    if(event.target.matches("button")){
        const pageNumberButton =event.target
        if(pageNumberButton.textContent==="⏪" && page>1){
            page=page-1;
        }
        else if(pageNumberButton.textContent==="⏩" && page<productsArray.length/10){
           page=page+1
        }else{
           page= pageNumberButton.textContent;
        }
        render();
    }

})



getData();



})