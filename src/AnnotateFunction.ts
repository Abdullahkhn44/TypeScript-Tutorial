function CalculateTax(income : number){
    if(income<50000){
        return income * 2

    }
    return income *3
}

// if we want our return value to have a specific return type then decalre it in the after () in the function like below ():number {}

function CalculateTax1(income : number):number{
    return 0
}