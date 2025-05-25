//factorial
function factorial(n){
    if(n==0){
        return 1;
    }else{
        return factorial (n-1) * n;
    }
}
const fs = require('fs');

//unary operators
const tellingLies = false;
console.log(tellingLies? 'Jail': 'Give an Icecream');

//empty values, null and undefined
// they denote absence of a meaningful value,

console.log(8 * null)
console.log('nine' / 1)

//binding or variable  , let
let LuigisDebt = 140;
let paid = 40;
let LuigisDebtBalance = LuigisDebt - paid;

console.log("Luigi's Balance is : ", LuigisDebtBalance);
paid = 40;
LuigisDebtBalance = LuigisDebtBalance - paid;
console.log("Luigi's Balance is : ", LuigisDebtBalance);

let man = 'Kevin', woman = 'Wanjiru', child = 'JOhn';
console.log(man,woman,child)

