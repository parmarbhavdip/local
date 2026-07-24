//create object
let MyMath = {
    add: function(num1,num2){
        let addition = num1 + num2;
        return addition;
    },
    sub: function(num1,num2){
        let subtraction = num1 - num2;
        return subtraction;
    },
    mul: function(num1,num2){
        let mul = num1 * num2;
        return mul;
    },
    div: function(num1,num2){
        let div = num1 / num2;
        return div;
    }
};
module.exports = MyMath;