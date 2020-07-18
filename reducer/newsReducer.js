const newsInitialState=[]

const newsReducer=(state=newsInitialState,action)=>{
    switch(action.type){
        case 'SET_NEWS':{
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}

export default newsReducer