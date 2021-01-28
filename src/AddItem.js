import React from 'react';



const AddItemForm = props => (
    <form onSubmit={props.addItem}>
        <input
            type="text"
            placeholder="Enter New Item"
            value={props.value}
            onChange={props.handleChange}
        />
        <button disabled={props.inputIsEmpty()}>Add</button>
    </form>
);



export default AddItemForm;