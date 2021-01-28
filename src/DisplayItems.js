import React from 'react';



const DisplayItems = props => (
    <React.Fragment>
        <p className="items">Items</p>
        <ol className="item-list">
            {props.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
    </React.Fragment>
);



export default DisplayItems;