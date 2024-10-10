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
var UsersInfo = /** @class */ (function () {
    function UsersInfo(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    UsersInfo.prototype.display = function () {
        console.log("userName:".concat(this.userName, " && age:").concat(this.age));
    };
    return UsersInfo;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, studentId) {
        var _this = this;
        _this = _super.call(this, userName, age) || this,
            _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("UserName:".concat(this.userName, " && age:").concat(this.age, " && studentId:").concat(this.studentId));
    };
    return Student;
}(UsersInfo));
// let student1 = new Student("hello",32,101);
// student1.display()
// const user1 = new UsersInfo("alex",30);
// const user2 = new UsersInfo("ritu",32);
// user1.display()
var BookInfo = /** @class */ (function () {
    function BookInfo(bookName, bookId) {
        this.bookName = bookName,
            this.bookId = bookId;
    }
    BookInfo.prototype.display = function () {
        console.log("bookName:".concat(this.bookName, " && bookId:").concat(this.bookId));
    };
    return BookInfo;
}());
var book1 = new BookInfo("Goal", 101);
// book1.display();
var ImprovementBook = /** @class */ (function (_super) {
    __extends(ImprovementBook, _super);
    function ImprovementBook(bookName, bookId, bookType) {
        var _this = this;
        _this = _super.call(this, bookName, bookId) || this,
            _this.bookType = bookType;
        return _this;
    }
    ImprovementBook.prototype.display = function () {
        console.log("BookName:".concat(this.bookName, " && bookId:").concat(this.bookId, " && bookType:").concat(this.bookType));
    };
    return ImprovementBook;
}(BookInfo));
var improvementBook1 = new ImprovementBook("mim", 101, "improve");
improvementBook1.display();
