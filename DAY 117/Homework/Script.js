let sound = document.getElementById("sound")
const audio = new Audio("Dodge Hellcat - Loudest Supercharger Whine_.mp3")
let info = document.getElementById("Info")
let right = document.getElementById("right")
let info1 = document.getElementById("info1")



sound.addEventListener("click", () => {
    audio.play()
}) 

class Car {
    constructor(model, year){
        this.model = model
        this.year = year
    }

}

class Dodge extends Car {
    constructor(model, year, engine, hp) {
        super(model, year, engine, hp)
        this.engine = engine
        this.hp = hp
    }

    getDodgeInfo() {
        console.log(`The ${this.year} ${this.model} is a high-performance muscle car <br> featuring a ${this.engine} engine, producing ${this.hp} horsepower <br> and 656 lb-ft of torque. It comes standard with a six-speed manual transmission, <br> but an eight-speed automatic is also available. The Hellcat Redeye model, <br> with a high-output engine, boasts 797 horsepower.`)
    }

}

class Mercedes extends Car {
    constructor(model, year, engine, hp) {
        super(model, year, engine, hp) 
        this.engine = engine
        this.hp = hp
    }

    getMercedesInfo() {
        console.log(`The ${this.year} ${this.model} is a high-performance luxury coupe powered by a ${this.engine} engine, producing ${this.hp} horsepower and 531 lb-ft of torque. It features a seven-speed automatic transmission and offers an optional S-Model with 577 horsepower and 590 lb-ft of torque. The CLS63 AMG S-Model also includes AMG 4MATIC all-wheel drive. `)
    }
}


class BMW extends Car {
    constructor(model, year, engine, hp){
        super(model, year, engine, hp)
        this.engine = engine
        this.hp = hp
    }

    getBmwInfo() {
        console.log(`The ${this.year} ${this.model} is known for its high-revving, naturally aspirated ${this.engine} engine, designated the S85. This engine produces ${this.hp} horsepower and 384 lb-ft of torque, allowing for impressive performance figures. While the standard transmission was a 7-speed SMG (Sequential Manual Gearbox), a 6-speed manual transmission was available as an option, particularly in the US market. `)
    }
}


let mycar = new Dodge("Dodge Challenger SRT Hellcat", 2020, "supercharged 6.2L HEMI V8", 717)
let mycar1 = new Mercedes("Mercedes-Benz CLS63 AMG", 2014, "5.5-liter twin-turbo V8", 550)
let mycar2 = new BMW("BMW E60 M5", 2008, "5.0-liter V10", 500)
mycar.getDodgeInfo()
mycar1.getMercedesInfo()
mycar2.getBmwInfo()

info.addEventListener("click", () => {
    mycar.getDodgeInfo()
})

