

const deposite = (amount) => {
 return{
    type:'ADD',
    payload:amount
 }
}
const withdrew = (amount) => {
    return{
       type:'DROP',
       payload:amount
    }
   }

export{deposite,withdrew}

