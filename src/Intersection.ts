interface Profile {
    name:string,
    
} 
interface Buisness{
    buisnessName:string,
    noOfOutlets:number
}

type Employee  = Profile & Buisness;

const contract = (prop : Employee)=>{
console.log('name is'+prop.name + 'Bname'+ prop.buisnessName)
}
contract({
    name:'Abdullah',
    buisnessName:'Falcon Movers',
    noOfOutlets:4
})