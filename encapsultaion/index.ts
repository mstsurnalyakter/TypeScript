//public,private,protected,readonly ---> access modifier
// public member --> we can access, modify and change
// protect member --> sub class can access but outside of sub class we can access, modify and change
//private --> not access , modify
// readonly--> only access not modify




class People {
  //   public name: string;
  //   public age: number;

  //   protected name: string;
  //   public age: number;

  //   private name: string;
  //   public age: number;

  readonly name: string;
  public age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  display(): void {
    console.log(`Name:${this.name} && Age:${this.age}`);
  }
}


class Student extends People{
  private  id:number;
    constructor(name:string,age:number,id:number){
        super(name,age),
        this.id = id
    }
    display(): void {
        console.log(`Name:${this.name} && Age:${this.age} id:${this.id}`);
    }
    setStudentId(id:number):void{
        this.id=id
    }
    getStudentId():number{
        return this.id
    }
}

const student1 = new Student("rita",10,101);
student1.display()
student1.setStudentId(10999993)
console.log(student1.getStudentId());
console.log(student1.name);
// student1.name = "llllllll";
console.log(student1);
