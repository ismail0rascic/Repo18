function* myGenerator() {

    yield*[1, 2, 3, 4, 5],
    yield*"Arena",
    yield* arguments
}
let iterator = myGenerator(6, 7, 8);
generatorArray = [];

for (let i of myGenerator(6, 7, 8)) {


    generatorArray.push(iterator.next().value)
}
console.log(generatorArray);

module.exports = { generatorArray, myGenerator }