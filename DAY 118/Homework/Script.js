class Employe {
    constructor(id, firstName, lastName, monthSalary) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.monthSalary = monthSalary
    } 

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(name) {
        name = [this.firstName, this.lastName]
        if (name.length < 2 ){
            console.log('გთხოვთ შემოიტანოთ სახელი და გვარი სრულად ეს აუცილებელია')
        }
    }
    get yearSalary() {
        return this.monthSalary * 12
    }

    get monthSalary(){
        return this.monthSalary
    }

    set monthSalary(value) {
        
    }
}