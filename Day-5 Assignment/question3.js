console.log("Promises, Async await , fetch api");
let user = [
    {
        name :'Son',
        email:'son@gmail.com',
    },
    {
        name:'Roy'
        email:'roy@gmail.com',
    },
]

function getUsers(){
    setTimeout(()=>{
        let result ='';
        user.forEach(user.=>{
            result += ' The user is ${user.name}\n';
        });
        console.log(result);
    },3000);
}










// let todos = [];

// fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
//       .then(res => res.json())
//       .then(data => todos = data)
//       .catch(err => console.log(err));

//       fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

//   var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://reqres.in/api/products/3", true);
// xhr.onload = function(){
//     console.log(xhr.responseText);
// };
// xhr.send();
				