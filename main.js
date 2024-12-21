

const body=document.querySelector("body")

const input = document.querySelector("input")

const form=document.querySelector("form")

const ul=document.querySelector("ul")


form.addEventListener("submit", todo )

function todo(e){
    e.preventDefault()
    
    
    const list = document.createElement("li")
    list.classList="list-group m-2 p-2  flaot-end"
    
    list.style.border="0.2em solid black"
    list.innerText= input.value
   
    ul.appendChild(list)


const icon=document.createElement("button")
icon.className="btn btn-dark  flod-end  ri-delete-bin-6-fill bg-danger"
icon.style.fontSize="1em"
// icon.className="ri-delete-bin-6-fill" 


list.append(icon)


form.reset()

}


ul.addEventListener("click", dltTodo)


function dltTodo(e){

if(e.target.className.includes("btn-dark")){
    let li=e.target.parentElement
    li.remove()
}

}



