import React  from 'react';
import APIItem from './APIItem'
import APILoader from './APILoader'
import '../App.css';


const APIList = ({items, loading}) => (


    <ul>

        {loading ?  <APILoader />  : ''}
        {
            items.map(item =>
                <APIItem
                    key={item.id}
                    {...item}
                />
            )
        }
    </ul>

)

export default APIList;