//enum --> store constants; duplicate value is not allowed
//enum type ---> enum types: numeric, string, heterogeneous
//1. numeric enum
var RequestType1;
(function (RequestType1) {
    RequestType1[RequestType1["ReadData"] = 0] = "ReadData";
    RequestType1[RequestType1["GetData"] = 1] = "GetData";
    RequestType1[RequestType1["SaveData"] = 2] = "SaveData";
    RequestType1[RequestType1["DeleteData"] = 3] = "DeleteData";
})(RequestType1 || (RequestType1 = {}));
var RequestType2;
(function (RequestType2) {
    RequestType2[RequestType2["ReadData"] = 1] = "ReadData";
    RequestType2[RequestType2["GetData"] = 2] = "GetData";
    RequestType2[RequestType2["SaveData"] = 3] = "SaveData";
    RequestType2[RequestType2["DeleteData"] = 4] = "DeleteData";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType1);
// console.log(RequestType2);
//2.string enum
var RequestType3;
(function (RequestType3) {
    RequestType3["ReadData"] = "READ_DATA";
    RequestType3["GetData"] = "GET_DATA";
    RequestType3["SaveData"] = "SAVE_DATE";
    RequestType3["DeleteData"] = "DELETE_DATA";
})(RequestType3 || (RequestType3 = {}));
// console.log(RequestType3);
// console.log(RequestType3.ReadData);
// console.log(RequestType3["ReadData"]);
//3.heterogeneous enum
var RequestType4;
(function (RequestType4) {
    RequestType4["ReadData"] = "READ_DATA";
    RequestType4["DeleteData"] = "DELETE_DATA";
    RequestType4[RequestType4["Id"] = 101] = "Id";
})(RequestType4 || (RequestType4 = {}));
