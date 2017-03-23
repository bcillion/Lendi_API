
const items = (state = [], action) => {
    switch(action.type){

        case 'GET_DATA_RECEIVED' :
            return action.data

        default:
            return state
    }
}

export default items