//import local module 
// here dt is alias for datetime (we must use it call functions)
const dt = require('./datetime');
const m = require('./math_module');
const pwd = require('./security');
const ms = require('./messenger');
console.log(dt.getDate());
console.log(dt.getTime());

//call function of math_module
num1 = 90;
num2 = 9;

console.log("addition ", m.add(num1, num2)); //calling function add of math_module
console.log("subtraction ", m.sub(num1, num2))
console.log("multiplication ", m.mul(num1, num2))
console.log("division ", m.div(num1, num2))

original_password = "apple";
//create object 
let p = new pwd.PasswordManager();
async function password_demo() {
    let hashed_password = await p.getHashPassword('karanbhatt1020');
    console.log(hashed_password);

    let plain_text_password = "karanbhatt1020";
    if (await p.comparePassword(plain_text_password, hashed_password) == true) {
        console.log('password matched');
    }
    else {
        console.log('password do not matched');
    }
}
password_demo();

//create object
let mailer = new ms.Mail('ramsha0501@gmail.com', 'test subject 1', 'test message 3');
mailer.sendEmail();

// () parenthesis
// [] bracket
// {} braces