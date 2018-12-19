export const testAdd1 = (text)=>{
    console.log('actions:' + text)
    return {
        type:'haha1',
        text
    }
}
export const testAdd2 = (text)=>{
    return {
        type:'haha2',
        text
    }
}