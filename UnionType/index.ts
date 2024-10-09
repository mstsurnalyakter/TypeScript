import { string } from "prop-types";

let userId: (string | number | boolean);

userId=101;
userId = "102";
userId=true;
console.log(userId);

const displayUserInfo = (userId:string | number | boolean )=>{
    console.log(userId);
}

displayUserInfo(100);
displayUserInfo("100");
displayUserInfo(true);