import React from 'react';
import PropTypes from 'prop-types';



class AddItemForm extends React.Component {

    state = {
        value: ''
    };


    handleChange = event => {
        this.setState({ value: event.target.value });
    };


    inputIsEmpty = () => {
        return this.state.value === '';
    };


    clearInput = () => {
        this.setState({ value: '' });
    }


    handleAddItem = event => {

        // destructure 
        const { addItem } = this.props;

        // to prevent browser reload/refresh when submitting
        event.preventDefault();

        // pass the item back to the parent component
        // so that it can actually be added to the items
        addItem(this.state.value);

        // now clear field for next input
        this.clearInput();
    };


    render() {

        return (
            <form onSubmit={this.handleAddItem}>
                <input
                    type="text"
                    placeholder="Enter New Item"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button disabled={this.inputIsEmpty()}>Add</button>
            </form>
        )
    }
}



// please note that a static value is accessible directly through the class
// `propTypes` in this case is being defined as a static field
AddItemForm.propTypes = {
    addItem: PropTypes.func.required
};



export default AddItemForm;