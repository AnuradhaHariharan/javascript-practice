let accordianData=[
    {
        id:1,
        header:"accoridan 1",
        content:"content for accordian 1"
    },
    {
        id:2,
        header:"accoridan 2",
        content:"content for accordian 2"
    },
    {
        id:3,
        header:"accoridan 3",
        content:"content for accordian 3"
    }
]

window.addEventListener("DOMContentLoaded",()=>{

     let accordianContainer =document.querySelector(".accordian-container");
    

     accordianData.forEach((data)=>{
        let accordian =document.createElement("div");
        accordian.classList.add("accordian");

        let accordianHeader=document.createElement("div")
        accordianHeader.innerHTML=`<h3>${data.header}</h3>`
        accordianHeader.classList.add("accordian-header");

        let accordianContent=document.createElement("div")
        accordianContent.classList.add("accordian-content")
        accordianContent.innerHTML=`<p>${data.content}</p>`

        accordian.appendChild(accordianHeader);
        accordian.appendChild(accordianContent);

        accordianContainer.appendChild(accordian);
     })

     accordianContainer.addEventListener("click",(event)=>{
         let acordianHeader=event.target.closest(".accordian-header");
         console.log(acordianHeader)
         let accordian=event.target.closest(".accordian");
         let accordianContent=accordian.querySelector(".accordian-content")

         document.querySelectorAll(".accordian-content").forEach((el)=>el.classList.remove("active"))
         document.querySelectorAll(".accordian-header").forEach((el)=>el.classList.remove("active"))
          
         accordianContent.classList.add("active")
         acordianHeader.classList.add("active")

     })
     document.querySelector(".accordian-container").firstChild.querySelector(".accordian-header").classList.add("active")
     document.querySelector(".accordian-container").firstChild.querySelector(".accordian-content").classList.add("active")
})