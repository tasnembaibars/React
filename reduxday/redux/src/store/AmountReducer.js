const init={
    count:0
}
 export const amountReducer=(state=init,action)=>{
switch(action.type){
    case'ADD':
    return {
        ...state,
        count:state.count + action.payload,
    };
    case 'DROP':
        return{
            ...state,
            count:state.count - action.payload, 
        }
        default:
            return state;
}
}
