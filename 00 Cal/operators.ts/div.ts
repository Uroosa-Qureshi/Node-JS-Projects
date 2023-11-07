export function divide(num1:number, num2:number){
    if (num2 == 0){
        throw new Error("Can't divide by zero");
        
    }
    return num1 / num2;
}