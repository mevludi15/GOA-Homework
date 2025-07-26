function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 1");
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 2");
        }, 1000);
    });
}

function step3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 3");
        }, 1000);
    });
}

step1()
    .then((result1) => {
        console.log(result1);
        return step2();
})
    .then((result2) => {
        console.log(result2);
        return step3();
})
    .then((result3) => {
        console.log(result3);
});



new Promise((resolve) => {
    resolve(2);
})
    .then((num) => {
       return num * 2;
    })
    .then((num) => {
        return num * 3;
    })
    .then((num) => {
        return num * 4;
    })
    .then((finalResult) => {
        console.log("Final result:", finalResult); // შედეგი: 48
});
