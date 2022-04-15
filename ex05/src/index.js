let shopingList = new Map([

    ['Banana', 1],
    ['Pineapple', 2],
    ['Pear', 3],
    ['Carrot', 4],
    ['Apple', 5]
])

let arrKey = [...shopingList.keys()];
for (let i of arrKey) {
    console.log(`${"groceries"}: ${i}`);

}
let arrValue = [...shopingList.values()];
for (let i of arrValue) {
    console.log(`${"amount"}: ${i}`);

}

for (let i of arrValue) {
    console.log(`[ ${"'"+arrKey[i-1]+"'"}: ${arrValue[i-1]} ]`);

}



module.exports = { shopingList, arrKey, arrValue }