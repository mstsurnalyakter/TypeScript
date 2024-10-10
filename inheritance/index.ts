class UsersInfo{
 userName:string;
 age:number;

 constructor(userName:string,age:number){
    this.userName=userName;
    this.age = age;
 }

 display():void{
    console.log(`userName:${this.userName} && age:${this.age}`);
 }
}

class Student extends UsersInfo{
    studentId:number;
    constructor(userName:string,age:number,studentId:number){
        super(userName,age),
        this.studentId=studentId
    }

    display(): void {
        console.log(`UserName:${this.userName} && age:${this.age} && studentId:${this.studentId}`);
    }
}

// let student1 = new Student("hello",32,101);
// student1.display()


// const user1 = new UsersInfo("alex",30);
// const user2 = new UsersInfo("ritu",32);

// user1.display()


class BookInfo{
    bookName:string;
    bookId:number;

    constructor(bookName:string,bookId:number){
        this.bookName = bookName,
        this.bookId = bookId
    }

    display():void{
        console.log(`bookName:${this.bookName} && bookId:${this.bookId}`);
    }
}

const book1 = new BookInfo("Goal",101);
// book1.display();

class ImprovementBook extends BookInfo{
    bookType:string;

    constructor(bookName:string,bookId:number,bookType:string){
        super(bookName,bookId),
        this.bookType= bookType
    }
    display(): void {
        console.log(`BookName:${this.bookName} && bookId:${this.bookId} && bookType:${this.bookType}`);
    }
}

const improvementBook1 = new ImprovementBook("mim",101,"improve");

improvementBook1.display()