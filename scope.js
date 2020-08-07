let bonus = 20;
function sum(first, second) {
    const result = first + second + bonus;
    console.log(result)
    if(result > 9) {
        var mood = "happy"
        mood = "funny"
        mood="wish"
        console.log(mood)
    }
    console.log(mood)
    return result;
}

const total = sum(10,20);
console.log(bonus)
console.log(total)