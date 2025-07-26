const form = document.getElementById("form")
const email = document.getElementById("email")
const name = document.getElementById("name")
const pass = document.getElementById("password")
let i = 1
form.addEventListener("submit", (e) => { 
    if (email.value == "" || name.value == "" || pass.value == "") {
        alert("შეავსე ყველა ველი")
    }

    localStorage.setItem(`acc${i}`, `${email.value}, ${name.value}, ${pass.value}`)
    e.preventDefault()
    i++
})