let animalColection = new Map([["კატა", "მიაუ"], ["ძაღლი", "ვუფ ვუფ"], ["ცხვარი", "ბეე"]])


for (let i of animalColection.values()){
            console.log(i)
        }

let names = new Set(["Davit", "Nino", "Davit", "Saba", "Nino"])

for (let i of names.values()) {
    console.log(i)
}

setTimeout( () => {
    console.log("start")

    setTimeout( () => {
        console.log("midle")
    }, 1000)

    setTimeout( () => {
        console.log("end")
    }, 2000)
})


let map = new Map([["height", 180], ["weight", 75]])
map.delete("height")
console.log(map.has("height"))


let name1 = new Set(["Davit", "Nino", "Davit", "Saba", "Nino"])

for (let i of name1.values()) {
    console.log(i)
}