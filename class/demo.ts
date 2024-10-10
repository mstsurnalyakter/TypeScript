class Users{
    //properties,methods,constructor
   userName: string;
   age: number;

 constructor(userName:string,age:number){
        this.userName=userName,
        this.age = age
    }

    display():void{
        console.log(`UserName: ${this.userName} && age: ${this.age}`);
    }
}


//class
//user1 --> name: Alex, age:30
//user2 ---> name: John, age:32
//user3 ---> name: Pinku, age:31
let user1 = new Users("Alex",30);
user1.display()

class Rooms{
    no:number;
    location:string;

    constructor(no:number,location:string){
        this.no = no,
        this.location = location
    }

    display():void{
        console.log(`No:${this.no} && Location:${this.location}`);
    }
}


const room1 = new Rooms(101,"Dhaka");
const room2 = new Rooms(102,"Narayanganj");
room1.display();
room2.display()
