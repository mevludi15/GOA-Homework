class Transport {
    constructor(maxSpeed, color, fuel) {
        this.maxSpeed = maxSpeed
        this.color = color
        this.fuel = fuel
        this.distanceTraveled = 0
    }

    // საწვავის შევსების მეთოდი
    refuel(liter) {
        if(typeof liter !== "number" || liter < 0) {
            console.log("გთხოვთ შეიყვანოთ მხოლოდ დადებითი რიცხვი")
        }
        this.fuel += liter
    }

    // ფერის შეცვლის მეთოდი
    changeColor(color) {
        if(typeof color !== "string") {
            console.log("ახალი ფერი შემოიტანეთ ტექსტის სახით")
        }
        this.color = color
    }

    // მანქანის ინფორმაციის მიღების მეთოდი
    getInfo() {
        console.log(`ეს არის რაღაც ტრანსპორტი, რომლის მაქს. სიჩქარეა - ${this.maxSpeed}; ფერი - ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`)
    }

    // გადაადგილების მეთოდი
    move(distance, fuelNeed) {
        if(typeof distance !== "number" || typeof fuelNeed !== "number") {
            console.log("გთხოვთ შეიყვანოთ რიცხვები")
        }

        if(fuelNeed > this.fuel) {
            console.log("მანქანაში არ არის საკმარისი საწვავი")
        } else {
            this.fuel -= fuelNeed;
            this.distanceTraveled += distance;
        }

    
    }
}


class Car extends Transport {
    constructor(maxSpeed, color, fuel) {
        super(maxSpeed, color, fuel);
    }

    getInfo() {
        console.log(`ეს არის მანქანა, რომლის მაქს. სიჩქარეა - ${this.maxSpeed}; ფერი - ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`)
    }
}

const myCar = new Car(220, "შავი", 50);
myCar.getInfo()
myCar.refuel(20); 
myCar.getInfo()
myCar.move(100, 30); 
myCar.getInfo()
myCar.changeColor("წითელი")
myCar.getInfo()
