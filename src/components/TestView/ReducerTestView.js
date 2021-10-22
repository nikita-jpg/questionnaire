export const reducerTestView = (state = {testStrings: "Экшена не было"}, actions) => {
    let testStrings = "";
    switch(actions.type){
        case "1":
            testStrings = "Был экшн"
            return { ...state, testStrings: testStrings}
        default:
            return state
    }
    
}
