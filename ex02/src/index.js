function* insideGenerator1() {
    for (let x = 1; x <= 5; x++) {
        yield x;
    }

}

function* insideGenerator2() {
    for (let x = 10; x <= 15; x++) {
        yield x;
    }

}

function* insideGenerator3() {
    for (let x = 6; x <= 9; x++) {
        yield x;
    }


}

function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}


const iterator = myGenerator();

fifteenArray = [];


for (let i = 0; i <= 15; i++) {
    if (i == 15)
        fifteenArray.push(iterator.next().value + "!");
    else {

        fifteenArray.push(iterator.next().value + "#");
    }

}
fifteenArray = fifteenArray.toString()
console.log(fifteenArray)



module.exports = { fifteenArray, myGenerator }