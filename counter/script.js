document.addEventListener("DOMContentLoaded",()=>{

  
    const value =document.querySelector(".counter");
    console.log(value);

    const counterContainer= document.querySelector(".container");

    counterContainer.addEventListener("click", (event) => {
     const eventTarget= event.target;

      if(eventTarget.classList.contains("increment")){
        value.textContent= parseInt(value.textContent)+1;
      }
      else if(eventTarget.classList.contains("decrement")){
        if(parseInt(value.textContent)>0){
        value.textContent= parseInt(value.textContent)-1;
        }
      }


      });

})