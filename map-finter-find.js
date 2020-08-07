const number = [1,2,3,4,5,6,7,8,9,10];
const output = [];
for(let i = 0; i < number.length; i++) {
    const element = number[i]
    const result = element * element;
    output.push(result)
}
console.log(output)

const number = [2,3,4,5,6,7,8,9,10];
function square(element) {
    return element * element;
}

const square = element => element * element;
const square = x => x * x;

const result = number.map(function(x) {
    return x * x;
})
console.log(result)
const easy = number.map(x => x * x); 
console.log(easy)



const serial = number.filter(x => x > 10);
console.log(serial)

const search = number.find(x => x > 5);
console.log(search)