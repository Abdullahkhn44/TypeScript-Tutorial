// union
// const printID =(id:string | number)=>{
//     console.log('id',id)
// }
// printID(21321)

// Union 2nd method

type idType = string | number

const printId=(id : idType)=>{
 console.log(id)
}
printId(12213)