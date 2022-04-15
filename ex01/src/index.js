let myArr = [];

function* multiplication(x) {
    for (let i = 0; i < x; i++) {
        x *= 2
        yield x;
        myArr.push(x)


    }


}
var num = multiplication(3);

for (let i = 0; i < 3; i++) {
    console.log(num.next().value);

}
console.log(myArr)

module.exorts = multiplication;