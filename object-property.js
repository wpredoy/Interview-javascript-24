const student = [
    {id: 21, name: "omor sunny"},
    {id: 31, name: "mannaaa"},
    {id: 41, name: "monmon"},
    {id: 54, name: "deepjol"}
];
// const output = []
// for(let i= 0; i < student.length; i++) {
//     const element = student[i]
//     const result = element.name;
//     output.push(result)
// }
// console.log(output)

// const names = student.map(x => x.id);
// console.log(names)

// const bigger = student.filter(x => x.id > 30);
// console.log(bigger)

const search = student.find(x => x.id > 40);
console.log(search)
