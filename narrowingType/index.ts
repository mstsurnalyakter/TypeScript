const printTodos1 = (todos:string[]) =>{
    todos.forEach(todo=>console.log(todo));

}

const printTodos2 = (todos: string[] | string ) => {
 if (typeof todos ==="object") {
 todos.forEach((todo) => console.log(todo));
 }else if(typeof todos === "string"){
    console.log(todos);
 }
};


const printTodos3 = (todos: string[] | null) => {
  if (todos) {
    todos.forEach((todo) => console.log(todo));
  } else  {
    console.log("No todos");
  }
};



const todos = ["todo1","todo2"]

printTodos1(todos)

printTodos2("todo1")
printTodos3(null);


let firstName:string;
let lastName: typeof firstName;

lastName="0"