var calculator={
    //defining num1 and num2
    'num1':0,
    'num2':0,
    //sum function inside calculator Object
    'sum':function(a,b){
        this.num1=a;
        this.num2=b;
        this.total=this.num1+this.num2;
        return this.total;    
    },
    //sub function inside calculator Object
    'sub':function(a,b){
        this.num1=a;
        this.num2=b;
        this.total=this.num1-this.num2;
        return  this.total;    
    },
    //mul function inside calculator Object
    'mul':function(a,b){
        this.num1=a;
        this.num2=b;
        this.total=this.num1*this.num2;
        return this.total;    
    },
    //div function inside calculator Object
    'div':function(a,b){
        this.num1=a;
        this.num2=b;
        this.total=this.num1/this.num2;
        return this.total;    
    },
};
//calling sum with parameter
var addition=calculator.sum(5,8);
console.log("Sum of two parameters is "+addition);
//calling sub with parameter
var subtraction=calculator.sub(9,8);
console.log("Difference between two parameters is "+subtraction);
//calling mul with parameter
var multiplication=calculator.mul(5,8);
console.log("Product of two parameters is "+multiplication);
//calling div with parameter
var division=calculator.div(99,9);
console.log("Quotient after dividing two parameters is "+division);
