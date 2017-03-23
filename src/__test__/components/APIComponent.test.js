import React from 'react';
import VisibleAPIList from '../../containers/VisibleAPIList';
import APIItem from '../../components/APIItem';
import TestUtils from 'react-addons-test-utils';
import dataService from '../../services/api-service';
import {createStore, applyMiddleware} from 'redux';
import api from '../../reducers/index';


describe('API component renders correctly', () => {

    let item, doc;

    beforeEach( () => {
        let store = createStore(api, {}, applyMiddleware(dataService)); //mockStore(mockProps);
        item = {
            id: 1,
            title: 'title1',
            url: 'url',
            thumbnailUrl: 'thumbnailUrl'
        };

        doc = TestUtils.renderIntoDocument(<VisibleAPIList store={store} />);
    });

    it('List renders correctly', () => {

        let apiList = TestUtils.findRenderedDOMComponentWithTag(doc, "ul");




        expect(doc).toBeDefined;
        expect(apiList).toBePresent;

    });

    it('Items renders correctly', () => {

        let apiItem = TestUtils.renderIntoDocument(<APIItem  key={item.id} {...item} />);
        expect(apiItem).toBePresent;
    });
});

