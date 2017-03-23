import React from 'react';
import '../App.css';

const APIItem = ({title, url, thumbnailUrl}) => (

    <li>
        <span>
            <img  alt={title} src={thumbnailUrl} />

        </span>
        <span>
              <a href={url} target="_blank" >{title}</a>
        </span>

    </li>
)

export default APIItem;
