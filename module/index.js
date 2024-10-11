"use strict";
// import { studentAge as age, studentName as name } from "./student";
// import { studentAge, studentName} from "./student";
Object.defineProperty(exports, "__esModule", { value: true });
var userClass_1 = require("./userClass");
// import * as Student  from "./student";
// const displayStudentInfo = (): void=>{
//     console.log(`${Student.studentName} && ${Student.studentAge}`);
// }
// displayStudentInfo();
// ///////////////////////////////////////
var user1 = new userClass_1.User("Alex", 10);
user1.display();
