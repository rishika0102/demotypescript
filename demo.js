var a = " hello";
var b = 7;
var c = 10.4;
var arr = ['orange', 'banana', 'apple', 10];
arr.push(100);
var arr1 = ['orange', 'banana', 'apple'];
var users = {
    name: 'jhon',
    age: 30,
    address: 'vijaynagar',
    getName: function () {
        return "Jhon";
    }
};
console.log("only string values ", a);
console.log("only number values", b);
console.log("only number, decimal, float values", c);
console.log(arr);
console.log(arr1);
console.log(users);
console.log(users.getName());
