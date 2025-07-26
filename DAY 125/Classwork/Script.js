const div = document.getElementById("container")
let annotations
const annotations1 = (callback) => {
    const http = new XMLHttpRequest()

    http.onreadystatechange = function() {
        if(this.readyState == 4){
            
            let response = JSON.parse(this.responseText)
            annotations = response.annotations

            response.images.map(item => {
                // console.log(item)

                annotations.map(item1 => {
                    if(item.id == item1.image_id) {
                        response.annotations[item1.id].file_name = item.file_name
                        response.annotations[item1.id].date_captured = new Date(item.date_captured)
                    }
                    
                })
            })
            
            response.categories.map(names => {
                annotations.map(item2 => {
                    if(names.id == item2.category_id) {
                        response.annotations[item2.id].category = names.name
                    }
                })
            })
            
            // console.log(response)
            callback(annotations)
        }
    }

    http.open("GET", "./train/pigs.json")
    http.send()

    return annotations
}



function createElements(data) {

    data.map(element => {
        let bboxavg = element.bbox.reduce( (curelement, nextelement) => {
            return curelement + nextelement 
        }) / element.bbox.length
        let price = (element.area / 10000 + bboxavg).toFixed(2)
        div.innerHTML += `
            <div style="border: 1px solid black;">
                <img src="./train/${element.file_name}">
                <h2>${element.category}</h2>
                <p>$${price}</p>
            </div>`
        
    })
   
    console.log(data[0])
}

annotations1(createElements)

