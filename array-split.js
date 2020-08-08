const num = [1,2,3,4,5,6,7,8]
const result = num.slice(1,5);
console.log(result)

const nums = [1,2,3,4,5,6,7,8,9];
const result2 = nums.splice(1,5, 70,80,90,70,80,90)
console.log(result2)
console.log(nums)

const together = nums.join(' , ')
console.log(together)