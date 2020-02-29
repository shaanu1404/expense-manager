import React, {Component, Fragment} from 'react';
import shortid from 'shortid';
import format from 'date-format';
import {connect} from 'react-redux';

import {TotalExpense} from '../components/total-expense/TotalExpense'
import {Groups} from '../components/groups/Groups';
import {Modal} from '../components/UI/modal/Modal';
import {Input} from '../components/UI/input/Input';
import {ADD_GROUP} from "../store/action/types";

class Front extends Component {

    state = {
        modalConfig: {
            showModal: false,
            title: 'Add new'
        },
        input: {
            name: '',
            amount: 0
        }
    };

    modalCloseHandler = () => this.setState({
        modalConfig: {
            ...this.state.modalConfig,
            showModal: !this.state.modalConfig.showModal
        }
    });

    inputChangedHandler = e => this.setState({
        input: {
            ...this.state.input,
            [e.target.name]: e.target.value
        }
    });

    addGroupHandler = () => {
        this.modalCloseHandler();
    };

    onSubmitModalHandler = () => {
        const {name, amount} = this.state.input;
        if (name && amount) {
            const newGroup = {
                id: shortid.generate(),
                name: name.trim(),
                createdOn: format.asString('dd-MM-yyyy, hh:mm', new Date()),
                amount: amount,
                items: []
            };

            this.props.addGroup(newGroup);

            this.setState({
                input: {
                    name: '',
                    amount: 0
                }
            });
        }
        this.modalCloseHandler()
    };

    render() {
        let modalContent = (
            <Fragment>
                <Input type="text"
                       label="Name"
                       id="name"
                       name="name"
                       change={this.inputChangedHandler}
                       value={this.state.input.name}/>
                <Input type="number"
                       label="Amount"
                       id="amount"
                       name="amount"
                       change={this.inputChangedHandler}
                       value={this.state.input.amount}/>
            </Fragment>
        );
        return (
            <Fragment>
                <Modal show={this.state.modalConfig.showModal}
                       title={this.state.modalConfig.title}
                       close={this.modalCloseHandler}
                       ok={this.onSubmitModalHandler}>
                    {modalContent}
                </Modal>
                <TotalExpense/>
                <Groups groups={this.props.groups} addMore={this.addGroupHandler}/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        groups: state.groups
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addGroup: (grp) => dispatch({ type: ADD_GROUP, payload: grp})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Front);
