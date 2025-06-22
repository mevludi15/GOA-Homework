 const obj = {
  arr: [
    // item1
    {
      level: [10, 50, 100],
    },

    // item2
    {
      level: [20, 40, 60],
      students: [
        {
          name: "jemala",
          surname: "barkalaia",
          score: [8, 8, 10],
        },
        {
          name: "jumbera",
          surname: "lamazi",
          score: [10, 7, 9],
        },
      ],
    },

  ],
};

// მოახდინეთ ამ ობიექტის სრული დესტრუქცია და მიღეეთ ცვლადები პირველი აითემის ლეველები ცალცალკე, მეორე აითემის ლეველები 
// ცალცალკე, მეორე აითემში თითოეული სტუდენტის სახელი და გვარი და ასევე ამ სტუდენტის თითოეული ქულა

const {arr: [item1, item2]} = obj
console.log(arr)
console.log(item1)
console.log(item2)