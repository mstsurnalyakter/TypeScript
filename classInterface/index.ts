// class User {
//     userName:string;
//     userAge:number;

//     constructor(userName:string,userAge:number){
//         this.userName = userName,
//         this.userAge = userAge
//     }

//     display():void{
//         console.log(`User Name:${this.userName} and User Age:${this.userAge}`);
//     }
// }

// const user1 = new User("Alex",10);

// user1.display();

//
interface IUserFormatter{
    formatUser:()=>string
}

class User implements IUserFormatter {

  constructor(private userName: string,private userAge: number) {}
    formatUser= () => {
        return `Name:${this.userName} and Age:${this.userAge}`
    }

}

const user1 = new User("Alex", 10);
console.log(user1.formatUser());
