let userInput = document.getElementById("task")
let submit = document.getElementById("btn-1")
let ul = document.getElementById("ul")

let completeUl = document.getElementById("completed-task")


let itemList = JSON.parse(localStorage.getItem("itemList")) || [];
let completedList = JSON.parse(localStorage.getItem("completedList")) || [];
let clearBtb = document.getElementById("clear")

submit.addEventListener("click", () => {
    if(userInput.value) {
        itemList.push(userInput.value)
        localStorage.setItem("itemList", JSON.stringify(itemList))

        ul.innerHTML = ""
        render(itemList, "itemList")

        
    }

    userInput.value = ""
    
})

const remove = (e, listName) => {
    let index = Number(e.target.id);

    if(listName == "itemList") {
        itemList.splice(index, 1)
        localStorage.setItem("itemList", JSON.stringify(itemList));

        ul.innerHTML = "";
        render(itemList, "itemList")

    } else {
        itemList.splice(index, 1)
        localStorage.setItem("completedList", JSON.stringify(itemList));

        completeUl.innerHTML = "";
        render(completedList, "completedList")

    }


    
}

let parentLi = ul
let isEdit = false
let index

const edit = (e) => {
    index = Number(e.target.id)
    parentLi = e.target.parentElement.parentElement;
    isEdit = !isEdit

    parentLi.children[0].setAttribute("contenteditable", isEdit);

    parentLi.children[0].focus();

    if (isEdit == false) {
        let newValue = parentLi.children[0].textContent
        itemList[index] = newValue

        localStorage.setItem("itemlist", JSON.stringify(itemList))
        parentLi = undefined
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        isEdit = false
        parentLi.children[0].setAttribute("contenteditable", isEdit);

        let newValue = parentLi.children[0].textContent;
        itemList[index] = newValue

        localStorage.setItem("itemList", JSON.stringify(itemList))

        parentLi = undefined
    }

   
})

const complete = (e) => {
    let index = Number(e.target.id)

    
    completedList.push(itemList[index])
    localStorage.setItem("completedList", JSON.stringify(completedList))

    remove(e, "itemList")
   
    completeUl.innerHTML = ""
    render(completedList, "completedList")
    console.log(completeUl)
}

const render = (list, listName) => {
    list.map((item, index) => {
        let li = document.createElement("li")
        let p = document.createElement("p")
        p.textContent = item
        li.appendChild(p)

        let deleteBtn = document.createElement("button")


        deleteBtn.textContent = "delete"
        deleteBtn.className = "delete-btn"
        deleteBtn.id = index

        if(listName == "itemList"){
            let editBtn = document.createElement("button")
            let completeBtn = document.createElement("button")
            
            editBtn.textContent = "edit"
            editBtn.className = "complete-btn"

            completeBtn.textContent = "complete"
            completeBtn.className = "complete-btn"

            completeBtn.id = index
            editBtn.id = index

            let div = document.createElement("div")
            div.appendChild(editBtn)
            div.appendChild(completeBtn)
            div.appendChild(deleteBtn)


            li.appendChild(div)

            ul.appendChild(li)

            editBtn.addEventListener("click", edit)
            completeBtn.addEventListener("click", complete)
            deleteBtn.addEventListener("click", (e) => {
                remove(e, "itemList")
            } );

        } else {
            li.appendChild(deleteBtn)

            completeUl.appendChild(li)

            deleteBtn.addEventListener("click", () => {
                remove(e, "completUl")
            } );

        }
        
        
        

    })
}

render(itemList, "itemList")
render(completedList, "completedList")

clearBtb.addEventListener("click", () => {
    completedList = []
    localStorage.setItem("completedList", JSON.stringify(completedList))
    completeUl.innerHTML = ""
    
})


let darkmode = localStorage.getItem("darkmode")
const themeSwith = document.getElementById("theme-switch")

const enableDarkmode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

themeSwith.addEventListener("click", () => {
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

if(darkmode === 'active') enableDarkmode()

themeSwith.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})