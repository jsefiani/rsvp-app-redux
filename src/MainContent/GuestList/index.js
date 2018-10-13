import React from 'react';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

import { connect } from "react-redux";

// Import actions
import { deleteGuest, toggleConfirmation, toggleEditing, editNameGuest } from "../../actions/rsvpActions";


export class GuestList extends React.Component {
    constructor(props) {
        super(props)
    }

    onDeleteGuest = (id) => {
        this.props.deleteGuest(id);
    }

    toggleConfirmation = ({ id, isConfirmed, name}) => {
        this.props.toggleConfirmation(id, isConfirmed, name)
    }

    toggleEditing = (id) => {
        this.props.toggleEditing(id)
    }

    onEditName = ({name, id, isConfirmed}) => {
        this.props.editNameGuest(name, id, isConfirmed);
    }

    render() {
        return (
            <ul>
                <PendingGuest name={this.props.pendingGuest} />
                {this.props.guests
                    .filter(guest => !this.props.isFiltered || guest.isConfirmed)
                    .map((guest, index) =>
                        <Guest
                            key={index}
                            name={guest.name} // Done
                            isConfirmed={guest.isConfirmed} // Done
                            isEditing={guest.isEditing} // Done
                            handleConfirmation={() => this.toggleConfirmation(guest)} // Done
                            handleToggleEditing={() => this.toggleEditing(guest.id)} // Done
                            editName={name => this.onEditName({...guest, name})} // Done
                            handleDelete={() => this.onDeleteGuest(guest.id)} // Done
                        />
                    )
                }
            </ul>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        guests: state.guests,
        pendingGuest: state.pendingGuest,
        isFiltered: state.isFiltered
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteGuest: (id) => dispatch(deleteGuest(id)), 
        toggleConfirmation: (id, isConfirmed, name) => dispatch(toggleConfirmation(id, isConfirmed, name)),
        toggleEditing: (id) => dispatch(toggleEditing(id)),
        editNameGuest: (newName, id, isConfirmed) => dispatch(editNameGuest(newName, id, isConfirmed))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestList);