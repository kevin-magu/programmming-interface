//factorial
function factorial(n){
    if(n==0){
        return 1;
    }else{
        return factorial (n-1) * n;
    }
}
console.log( 'Testing a factorial number',factorial(8));