let shoppingList = new Map([

    ['Banana', 1],
    ['Pineapple', 2],
    ['Pear', 3],
    ['Carrot', 4],
    ['Apple', 5]
])

let arrKey = [...shoppingList.keys()];
for (let i of arrKey) {
    console.log(`${"groceries"}: ${i}`);

}
let arrValue = [...shoppingList.values()];
for (let i of arrValue) {
    console.log(`${"amount"}: ${i}`);

}

for (let i of arrValue) {
    console.log(`[ ${"'"+arrKey[i-1]+"'"}: ${arrValue[i-1]} ]`);

}



module.exports = { shoppingList, arrKey, arrValue }