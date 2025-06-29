class PersulPig {
  constructor(color, size, birthYear, birthMonth, birthDay) {
    this.color = color;
    this.size = size;
    this.birthYear = birthYear
    this.birthMonth = birthMonth
    this.birthDay = birthDay
  }

  getAge() {
    console.log(`year ${2025 - this.birthYear}, month: ${11 - this.birthMonth} day: ${31 - this.birthDay}`)
  }

  printAge() {
    return this.getAge()
  }
}

const myPig = new PersulPig("თეთრი", "საშუალო", 2021, 3, 15);
myPig.printAge();