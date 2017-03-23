import items from '../../reducers/api';

describe('Check Reducer', function() {
    it('returns an empty array as default state', function() {


        let newState = items(undefined, { type: 'unknown' });

        expect(newState).toEqual([]);
    });

    describe('on LOADED_API items', function(){
        it('returns the <code>response</code> in given action', function(){

            let action = {
                type: 'GET_DATA_RECEIVED',
                data: { response: 'val' }
            };

            let newState = items(undefined, action);
            expect(newState).toEqual(action.data);
        });
    });

});
