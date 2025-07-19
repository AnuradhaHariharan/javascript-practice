document.addEventListener("DOMContentLoaded",()=>{
    const toggleOuter= document.querySelector(".toggle-outer");

    toggleOuter.addEventListener("click",()=>{
     
        toggleThumb= document.querySelector(".toggle-thumb");
        const box=document.querySelector(".box");

        if(toggleThumb.classList.contains("active")){
            toggleThumb.classList.remove("active");
            box.classList.remove("active");
        }
        else{
        toggleThumb.classList.add("active");
        box.classList.add("active");
        }
    })

})