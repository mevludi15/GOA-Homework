// rest ოპერატორი გამოიყენება ელემენტების დასაჯგუფებლად და ერთად გამოსატანად მაგ: დესტრუქციის დროს შეგვიძლია 5 ელემენტიან
// სიას მხოლოდ ერთ ელემენტს გადავცეთ საკუთარი სახელი რის შემდეგადაც გამოვიტანთ მხოლოდ იმ ელემენტს და დანარჩენი rest 
// ოპერატორის საშუალებით გავაერთიანოთ ერთ სახელში 

// spread ოპერატორი გამოიყენება ელემენტების დასაშლელად მაგ: თუ გამოვიყენებთ სიასე spread ოპერატორს იგი სიის ელემენტებს 
// მოაშორებს სიის ბრჩხილებს და დაშლის მხოლოდ ელემენტებად


const Obj1 = {
  name: "mevludi",
  age: 16,
  height: 180
};

const { name, ...rest } = Obj1
console.log(name)
console.log(rest)

const Obj2 = {
    name: "mevludi"
}

const Obj3 = {
    age: 16
}

const Obj4 = {
    height: 180
}

const newObj = { ...Obj2, ...Obj3, ...Obj4}
console.log(newObj)

function names(...rest) {
    console.log(rest)
}

names(...["mevludi", "giorgi", "nika", "saba", "koba"])

console.log(names)