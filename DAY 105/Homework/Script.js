const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors
console.log(firstColor)
console.log(secondColor)

// // გამოიყენე დესტრუქცია ისე, რომ მიიღო პირველი ორი ფერი ცვლადებში firstColor და secondColor


// 2) 
const user = {
  name: "Giorgi",
  age: 25,
  country: "Georgia"
};

const {name, country} = user
console.log(name)
console.log(country)
// // გამოიყენე დესტრუქცია name და country-ს გამოსატანად ცვლადებში


// 3)
const person = {
  name: "Nino",
  age: 28
};

const {name1, age1, country1 = "Unknow"} = person
console.log(name)
console.log(age1) 
console.log(country1)
// // გამოიყენე დესტრუქცია და მიანიჭე default მნიშვნელობა "Unknown" ცვლადს country, თუ ის არ არსებობს


// 4)
const printUser = ({ name, age }) => {
  console.log(`${name} is ${age} years old`);
};

const Obj = {
    name:  "mevludi";
    age: "Unknow"
}
printUser(Obj)
// // გამოიძახე ეს ფუნქცია ობიექტით და გამოიყენე დესტრუქცია პარამეტრებში


// 5)
const numbers = [10, 20, 30, 40, 50];

const [firstNumber, ...rest] = numbers;
console.log(firstNumber)
console.log(rest)
// // გამოიყენე დესტრუქცია ისე, რომ პირველი ელემენტი ცალკე მიიღო, ხოლო დანარჩენი rest მასივში


// 6)
// const student = {
//   name: "Luka",
//   marks: {
//     math: 90,
//     physics: 85
//   }
// };

// // გამოიყენე დესტრუქცია ისე, რომ ცვლადებში მიიღო math და physics ქულები
