export default function(state = [], action){
    switch(action.type){
        case 'GET_HEADLINES':
            return {...state, user: action.payload }
        case 'GET_SOURCES':
            return {...state,sources:action.payload}
        default:
            return state;
    }
}