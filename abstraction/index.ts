abstract class Parents{
    childrenName:string;
    childrenNumber:number;

    constructor(childrenName:string,childrenNumber:number){
        this.childrenName = childrenName,
        this.childrenNumber = childrenNumber
    }

    abstract display():void; //abstract method have no body
}


class Children extends Parents{
    siblingNumber:number;

    constructor(childrenName:string,childrenNumber:number,siblingNumber:number){
        super(childrenName,childrenNumber),
        this.siblingNumber = siblingNumber

    }

    display(): void {
        console.log(
          `ChildrenName:${this.childrenName} && ChildrenNumber:${this.childrenNumber} && SiblingNumber:${this.siblingNumber}`
        );
    }

}

const children1 = new Children("Nil",3,3);
children1.display()