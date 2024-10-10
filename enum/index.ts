//enum --> store constants; duplicate value is not allowed
//enum type ---> enum types: numeric, string, heterogeneous

//1. numeric enum

enum RequestType1 {
    ReadData,
    GetData,
    SaveData,
    DeleteData,
}

enum RequestType2 {
    ReadData=1,
    GetData=2,
    SaveData=3,
    DeleteData=4
}

// console.log(RequestType1);
// console.log(RequestType2);



//2.string enum
enum RequestType3 {
    ReadData="READ_DATA",
    GetData="GET_DATA",
    SaveData="SAVE_DATE",
    DeleteData="DELETE_DATA"
}

// console.log(RequestType3);
// console.log(RequestType3.ReadData);
// console.log(RequestType3["ReadData"]);

//3.heterogeneous enum
enum RequestType4 {
    ReadData="READ_DATA",
    DeleteData="DELETE_DATA",
    Id=101
}
