// 1) შევქმანთ new Map ზღვის ლომების ტიპი
//   1. სახელი, გვრი, საცხოვრებელი 
//   2. დავამატოთ ასაკი ჩენი ზღვის ლომის
//   3. for of ით გადავუაროთ zgvisLomebi.keys() და მათი value ები გამომიტანეთ კონსოლში




let zgvisLomi = new Map([["name", "აზრზე არვარ"], ["surname", "ვერმოვიფიქრე"], ["place", "tbilis"]])
zgvisLomi.set("age", 30)


for (let i of zgvisLomi.keys()){
            console.log(i)
        }


for (let i of zgvisLomi.values()){
            console.log(i)
        }

