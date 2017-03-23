import React from 'react';
import apiMiddleware from '../../services/api-service';

import sinon from 'sinon';
import {APIConstants} from '../../constants/APIConstants';


const APIUrl = APIConstants.APIURL;

// Mock calls to fetch by the api middleware
// loads https://github.com/jefflau/jest-fetch-mock instead of fetch
//jest.mock('isomorphic-fetch');


describe('#Get API test', () => {


    let store, next;
    let action;
    let getState, expectedActions;


    beforeEach( () => {

        getState = {}; // initial state of the store
        action = {

            type: APIConstants.GET_DATA

        };
        expectedActions = [action];

        store = {};

        next = sinon.spy();

    });

    describe('Testing API Middleware', () => {
        it('passes the action to next', () => {

            apiMiddleware(store)(next)(action)


            expect(next.withArgs(action).calledOnce).toEqual(true);

        });
    });


    describe('API Test', () => {

        let fetchResult;
        let successStatus = 200;

         beforeEach( () => {

            fetchResult = fetch(APIUrl)
                .catch((err) => {

                    throw new Error('fetch failed' + err)
                })

        })

        it('Get API success for correct endpoint', () => {


            fetchResult.then(res => {

                expect(res).toBeDefined();
                expect(successStatus).toEqual(res.status);
            })


        });


        it('Resolves returned promise when response with success', () => {
            let promise = apiMiddleware(store)(next)(action);
            expect(promise).toBeDefined;


        });



    });





});