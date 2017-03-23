
import {APIConstants} from '../constants/APIConstants';

const getApiGenerator = next => (route) => {
     return fetch(route)

        .then(res => {
            res.json().then( data => {

                next({
                    type: APIConstants.GET_DATA_RECEIVED,
                    data
                })
            });

        })
        .catch((ex) => {

            next({
                type: APIConstants.GET_DATA_ERROR,
                ex
            })

        });
}




const dataService = store => next => action => {

    next(action);

    const getApi = getApiGenerator(next)
    switch (action.type) {
        case APIConstants.GET_DATA:

          return getApi(APIConstants.APIURL);


        default:
            break
    }

};




export default dataService