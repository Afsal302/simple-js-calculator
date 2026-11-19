 function add(a,b){
            return a+b;
        }
        function diff(a,b){
            return a-b;
        }
        function mul(a,b){
            return a*b;
        }
        function div(a,b){
            return a/b;
        }
        function mod(a,b){
            return a%b;
        }
function cal(a,b,choice){
    switch(choice){
        case 1:
            console.log(`Addition =`,add(a,b));
            break;
        case 2:
            console.log(`Difference =`,diff(a,b));
            break;
        case 3:
            console.log(`multiplication =`,mul(a,b));
            break;
        case 4:
            if(b==0){
            console.log(`Not divided by zero`);
            }
            else{
            console.log(`Division =`,div(a,b));
            break;
            }
        case 5:
            console.log(`Modules =`,mod(a,b));
            break;
        default:
            console.log(`invalid choice`);
    }
}
let num1=Number(prompt("Enter the first number"));
let num2=Number(prompt("Enter the second number"));
let choice=Number(prompt("Enter your choice 1=ADD, 2=SUB, 3=MUL, 4=DIV ,5=MOD"));

cal(num1,num2,choice)