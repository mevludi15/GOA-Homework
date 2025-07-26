// შექმენით ფუნქცია რომელიც დააბრუნებს ფრომისს შემდეგ მიიღეთ ფრომისი წაიკითხეთ მის მიერ დაresolve ებული მნიშვნელობა და დაბეჭდეთ შესაბამისი აიქონი ❄️ მნიშვნელობიდან გამომდინარე

function WeatherApi() {
    return new Promise(function (resolve, reject) {
        resolve("sunny")
    })
}

function getWeather(data) {
    if (data == "snow") {
        console.log("🌨️")
    } else if (data == "rain") {
        console.log("🌧️")
    } else if (data == "sunny") {
        console.log("☀️")
    } else if (data == "cloudy") {
        console.log("☁️")
    }
}

function reject1(data) {
    console.log("info rejected" + data)
}

WeatherApi().then(getWeather, reject1)