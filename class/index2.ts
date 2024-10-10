

type Friend = {friendName:string,friendId:number};

let friendsInfo: Friend[];
friendsInfo = [];

let friendInfo1: Friend;
let friendInfo2:Friend;
let friendInfo3:Friend;
let friendInfo4:Friend;


friendInfo1 = {friendName:"Alex",friendId:101};
friendInfo2 = {friendName:"Moji",friendId:102};
friendInfo3 = {friendName:"John",friendId:103};
friendInfo4 = {friendName:"Due",friendId:104};

friendsInfo.push(friendInfo1);
friendsInfo.push(friendInfo2);
friendsInfo.push(friendInfo3);
friendsInfo.push(friendInfo4);

// console.log(friendsInfo);

type RequestType2 = "GET" | "POST" | "PUT";
let getRequest2:RequestType2;
let postRequest2:RequestType2;
let putRequest2: RequestType2;

getRequest2= "GET";
postRequest2 = "POST";
putRequest2 = "PUT";

console.log(`getRequest2: ${getRequest2}, postRequest2: ${postRequest2},putRequest2:${putRequest2}`);
