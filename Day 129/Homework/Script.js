function getApi() {
    return new Promise((resolve, reject) => {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=Georgia&appid=89c4c884e2207860c0da18f8f2e6f5bc")
            .then((data) => {
                resolve(data.json())
                console.log(data)
            })

    
    })
}



getApi()
    .then()
    .catch(() => {
        console.log("Error")
    })
    .finally(() => {
        console.log("Done")
    })