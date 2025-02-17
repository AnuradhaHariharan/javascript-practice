let tabData=[
    {
        id:1,
        title:"tab1",
        content:"content for tab 1"
    },
    {
        id:2,
        title:"tab2",
        content:"content for tab 2"
    },
    {
        id:3,
        title:"tab3",
        content:"content for tab 3"
    }
]

document.addEventListener("DOMContentLoaded",()=>{
    let activeTab=tabData[0].id;
    let tabButton= document.querySelector(".tab-buttons")
    let tabContents=document.querySelector(".tab-contents")
    tabData.forEach((tabs)=>{
        let tab= document.createElement("button")
        tab.setAttribute("class","tab-links")
        tab.textContent=tabs.title;
        tab.setAttribute("data-key",tabs.id)
        tabButton.appendChild(tab);

        let tabContent=document.createElement("div");
        tabContent.setAttribute("class","contents")
        tabContent.innerHTML=`<h3>this is content for ${tabs.title}</h3><p>${tabs.content}</p>`
        tabContent.setAttribute("id",tabs.id)
        tabContents.appendChild(tabContent);
    
    })

    tabButton.addEventListener("click",(event)=>{
        if(event.target.matches(".tab-links")){
        const tabId=event.target.getAttribute("data-key");
         
          if(tabId!==activeTab){
            openTab(tabId);
            activeTab=tabId;
          }
        }
    })
    let openTab=(tabId)=>{
        let tabLinks=document.querySelectorAll(".tab-links")
        let tabContents= document.querySelectorAll(".contents")

        tabContents.forEach((content)=>{
            content.classList.remove("active")
        })
        tabLinks.forEach((content)=>{
            content.classList.remove("active")
        })
        document.getElementById(tabId).classList.add("active")
        document.querySelector(`button[data-key="${tabId}"]`).classList.add("active")
    }
   document.querySelector(`button[data-key="${activeTab}"]`).classList.add("active")
   document.getElementById(activeTab).classList.add("active")

})