import React from 'react';



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

        // to prevent browser reload/refresh when submitting
        event.preventDefault();

        // pass the item back to the parent component
        // so that it can actually be added to the items
        this.props.addItem(this.state.value);

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



export default AddItemForm;