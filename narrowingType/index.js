var printTodos1 = function (todos) {
    todos.forEach(function (todo) { return console.log(todo); });
};
var printTodos2 = function (todos) {
    if (typeof todos === "object") {
        todos.forEach(function (todo) { return console.log(todo); });
    }
    else if (typeof todos === "string") {
        console.log(todos);
    }
};
var printTodos3 = function (todos) {
    if (todos) {
        todos.forEach(function (todo) { return console.log(todo); });
    }
    else {
        console.log("No todos");
    }
};
var todos = ["todo1", "todo2"];
printTodos1(todos);
printTodos2("todo1");
printTodos3(null);
var firstName;
var lastName;
lastName = "0";
