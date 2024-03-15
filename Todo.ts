
const Storagebox:string[]=[]
let Addtask = document.getElementById("Addtask")  as HTMLInputElement
    let tasklist = document.getElementById("tasklist") as HTMLOListElement
    let sub = document.getElementById("sub") as HTMLButtonElement


sub.addEventListener("click",(e)=>{  
    if (Addtask.value.length >0){
        Storagebox.push(Addtask.value)
        Addtask.value=''
        displayTask()

    }
})
    
    const displayTask =()=> {
        let listHTML:string = ''

        for (let i: number = 0; 
            i < Storagebox.length; 
            i++) {
            listHTML += `<li>${Storagebox[i]}<br><button>Edit</button> 
            <button onclick='deleteTask(${i}'>Completed</button></li>`
            
        }
        tasklist.innerHTML = listHTML
    }
    const deleteTask = (index:number) =>{
        Storagebox.splice(index, 1)
        displayTask()
    }

    const EditTask = (index:number)=>{
        let Edit = prompt("enter a new name")
        if (Edit!==''){
            Storagebox.splice(index, 1, `${Edit}`)
            displayTask()
        }

    }
        
    









    // let li = document.createElement("li")
    // li.innerText = Addtask.value
    // tasklist.appendChild(li)
    // e.preventDefault()

    



    

