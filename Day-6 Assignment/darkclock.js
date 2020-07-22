// console.log("Hello User");

const text = document.getElementById('text');
const button = document.getElementById('btn');


button.onclick = ()=>{
    if(text.className == 'show'){
        text.className == '';
        button.innerText = 'Click here for details';
    }
    else{
        text.className =  'show';
        button.innerText = 'Read Less';
    }

    // }
    // const button = document.getElementById('dark');
    // button.onclick = function(){

    }
    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
     }
    // function showalert(){
    //     alert("Hey I am an alert from the button");
    // }
    // const button = document.getElementById('bt');
    // button.onclick = function(){
    //     alert("Hey I am an alert from the button");
    // }

    // const name = prompt("Enter your name", "LetsUpgrade");
    // title.innerText += 'Welcome to LetsUpgrade ${name}'; 