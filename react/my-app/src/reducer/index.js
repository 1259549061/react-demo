export default(state,action)=>{
    console.log('reducer')
    console.log(state)
    console.log(action)
    const {text} = action
    switch (action.type){
        case 'haha1':
            return {...state,[text]:state[text]+1}
        case 'haha2':
            return {...state,[text]:state[text]-1}
        default:
            return action
    }
}