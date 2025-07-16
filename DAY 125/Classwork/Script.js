const annotations = () => {
    const http = new XMLHttpRequest()

    http.onreadystatechange = function() {
        if(this.readyState == 4){
            
            let response = JSON.parse(this.responseText)
            let annotations = response.annotations

            response.images.map(item => {
                console.log(item)

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
            
            console.log(response)
        }
    }

    

    

    http.open("GET", "./test/pigs.json")
    http.send()
}

annotations()

