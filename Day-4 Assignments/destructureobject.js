// let student
let student = {
    name :'Helsinki',
    age : 24,
    projects : {
        diceGame:"Two players dice game using Javascript"
    },
}
console.log(student.age);
console.log(student.projects);

const {name, age, projects } =student;
console.log(name, age);