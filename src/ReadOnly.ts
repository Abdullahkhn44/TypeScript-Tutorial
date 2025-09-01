interface Employee {
    name : string,
    department :string,

   readonly date : Date,
   readonly empId: number 
}

const Emp : Employee = {

    name :'Abdullah',
    department : 'Software',
    date : new Date(),
    empId : 3341
}


console.log(Emp.name,Emp.date,Emp.empId)

