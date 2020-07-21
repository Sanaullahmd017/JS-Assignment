console.log("Question 2");
// const userOne = {
//     name:'Sana',
//     age = 24,
//     email: 'sana@gmail.com',
//     login() {
//         console.log('Sana has logged in');
//     },
//     logout() {
//         console.log('Sana has Logged Out');
//     },

// }
console.log(userOne.email)

class User {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 0;
    }
    login()
    {
        console.log(`${this.name}has logged in`);
    }
    logout()
    {
        console.log(`${this.name}has logged out`);
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name}has ${this.luCoins} coins`)
    }
}

let userOne = new User('zak',25, 'zak@gmail.com')
userOne.login()
userOne.addCoins();
userOne.addCoins();
userOne.logout()

userOne.login().addCoins().addCoins().logout();