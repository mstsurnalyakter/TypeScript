

type User = { userName: string; userId: number };

let usersInfo: User[];
usersInfo = [];

let userInfo1 : User;
let userInfo2 :User;
let userInfo3 : User;

userInfo1 = {userName:"surnaly",userId:101};
userInfo2 = {userName:"Tisha",userId:102};
userInfo3 = {userName:"Rita",userId:103};



usersInfo.push(userInfo1);
usersInfo.push(userInfo2);
usersInfo.push(userInfo3);


// console.log(usersInfo);

type Book = {bookName:string,bookId:number};

let booksInfo : Book[];
booksInfo=[];

let bookInfo1: Book;
let bookInfo2: Book;
let bookInfo3: Book;
let bookInfo4: Book;

bookInfo1 = {bookName:"Poor Dad rich Dad",bookId:101};
bookInfo2 = {bookName:"Thank and grow rich",bookId:102};
bookInfo3 = {bookName:"Happiness",bookId:103};
bookInfo4 = {bookName:"Goal",bookId:104};

booksInfo.push(bookInfo1);
booksInfo.push(bookInfo2);
booksInfo.push(bookInfo3);
booksInfo.push(bookInfo4);

// console.log(booksInfo);

type RequestType = "GET" | "POST";
let getRequest:RequestType;

getRequest = "POST";

const requestHandler = (requestType:RequestType) =>{
 console.log(requestType);
}

requestHandler("GET");
