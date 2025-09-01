// function getFirstElement<ElementType>(arr : ElementType){
// return strArr[0]
// }

// const arr = [1,2,3]
// const strArr = ['asd','gfg','tca']


// console.log(getFirstElement(strArr))

// generic Type basics

type ApiResponse <Data> = {
    data: Data,
    isError: boolean
}
type userResponse = ApiResponse<{name:string,age:number}>
const Response: userResponse = {
    data: {
        name: 'Abdullah',
        age: 24
    },
    isError: false

}

