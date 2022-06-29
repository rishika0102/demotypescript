let a:string = " hello";
let b:number = 7;
let c:number = 10.4;
let arr = ['orange', 'banana', 'apple', 10]
arr.push(100)
let arr1:string[] = ['orange', 'banana', 'apple']
interface usersTyped {
  name:string,
  age:number,
  address:string,
  getName:()=>string
}
let users:usersTyped = {
  name: 'jhon',
  age: 30,
  address: 'vijaynagar',
  getName: function(){
    return "Jhon"
  }
}
console.log("only string values ", a);
console.log("only number values",b);
console.log("only number, decimal, float values",c);
console.log(arr);
console.log(arr1);
console.log(users);
console.log(users.getName());
