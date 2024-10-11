//public,private,protected,readonly ---> access modifier
// public member --> we can access, modify and change
// protect member --> sub class can access but outside of sub class we can access, modify and change
//private --> not access , modify
// readonly--> only access not modify
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var People = /** @class */ (function () {
    function People(name, age) {
        (this.name = name), (this.age = age);
    }
    People.prototype.display = function () {
        console.log("Name:".concat(this.name, " && Age:").concat(this.age));
    };
    return People;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, id) {
        var _this = this;
        _this = _super.call(this, name, age) || this,
            _this.id = id;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("Name:".concat(this.name, " && Age:").concat(this.age, " id:").concat(this.id));
    };
    Student.prototype.setStudentId = function (id) {
        this.id = id;
    };
    Student.prototype.getStudentId = function () {
        return this.id;
    };
    return Student;
}(People));
var student1 = new Student("rita", 10, 101);
student1.display();
student1.setStudentId(10999993);
console.log(student1.getStudentId());
console.log(student1.name);
// student1.name = "llllllll";
console.log(student1);
