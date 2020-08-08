// const num = [1,2,3,4,5,6,7,8,9];
// for(let i = 0; i < num.length; i++) {
//     console.log(num[i])
//     if(num[i] > 5) {
//         break;
//     }
    
// }

const number = [1,2,3,-2,4,5,-6,6,7,8,-2]
for(let i = 0; i < number.length; i++) {
    if(number[i] < 0) {
        continue;
    }
    console.log(number[i])
}