const config =[
    {
        color:"red",
        width:"33%"
    },
    {
        color:"green",
        width:"33%"
    },
    {
        color:"blue",
        width:"33%"
    },
    {
        color:"yellow",
        width:"50%"
    },
    {
        color:"orange",
        width:"50%"
    },
    {
        color:"purple",
        width:"70%"
    },
    {
        color:"pink",
        width:"30%"
    }

]

let container =document.createElement("div")
container.classList.add("container")

let createBox=()=>{
config.forEach((config)=>{
   let box =document.createElement("div")
   box.classList.add("box");
   box.style.width=config.width;
   box.style.backgroundColor=config.color

   container.appendChild(box);
})
}
container.addEventListener("click",(event)=>{
    if(event.target.matches(".box")){
        let index =Array.from(container.children).indexOf(event.target)
        let box=config[index];
        alert(`Box no.${index+1} is ${box.color}`)
    }
})
const input=()=>{

let inputBox=document.createElement("div");

let inputBoxColor= document.createElement("input")
inputBoxColor.type="text"
inputBoxColor.placeholder="give your color of choice"

let inputBoxWidth= document.createElement("input")
inputBoxWidth.type="text"
inputBoxWidth.placeholder="give your width of choice"

let submit = document.createElement("button");
submit.type="submit"
submit.textContent="Submit"

inputBox.appendChild(inputBoxColor);
inputBox.appendChild(inputBoxWidth);
inputBox.appendChild(submit)
container.appendChild(inputBox);

submit.addEventListener("click",()=>{
   let data={
      color:inputBoxColor.value,
      width:inputBoxWidth.value
   }
   console.log(inputBoxColor.value)
   config.push(data)
    container.textContent="";
   createBox();
   input();
   console.log(config)
})
}

createBox();
input();


document.body.appendChild(container)