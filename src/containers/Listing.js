import React, {Component, Fragment} from "react";
import {connect} from 'react-redux';

import {Item} from "../components/groups/items/Item";
import {Modal} from "../components/UI/modal/Modal";
import {Input} from "../components/UI/input/Input";
import {ADD_ITEM, DELETE_ITEM} from "../store/action/types";

class Listing extends Component {

    state = {
        item: '',
        qty: '',
        amount: 0,
        showModal: false
    };

    modalCloseHandler = () => this.setState({
        showModal: !this.state.showModal
    });

    inputChangedHandler = e => this.setState({
        [e.target.name]: e.target.value
    });


    onSubmitModalHandler = () => {
        const {item, qty, amount} = this.state;
        if (item && qty && amount) {
            const id = this.props.match.params.id;
            this.props.addItem(id, item, qty, +amount);
            this.setState({
                item: '',
                qty: '',
                amount: 0
            });
            this.modalCloseHandler();
        }
    };
    onDeleteItem = (index) => {
        const id = this.props.match.params.id;
        this.props.deleteItem(id, index);
    };

    render() {
        const id = this.props.match.params.id;
        const group = this.props.groups.find(g => g.id === id);
        let amountSpend = 0;
        if (group)
            amountSpend = group.items.reduce((x, y) => x + y.amount, 0);

        let modalContent = (
            <Fragment>
                <Input type="text"
                       label="Item"
                       id="item"
                       name="item"
                       inputchange={this.inputChangedHandler}
                       value={this.state.item}/>
                <Input type="text"
                       label="Quantity"
                       id="qty"
                       name="qty"
                       inputchange={this.inputChangedHandler}
                       value={this.state.qty}/>
                <Input type="number"
                       label="Amount"
                       id="amount"
                       name="amount"
                       inputchange={this.inputChangedHandler}
                       value={this.state.amount}/>
            </Fragment>
        );

        if (group)
            return (
                <>
                    <Modal show={this.state.showModal}
                           title="Add New Item"
                           close={this.modalCloseHandler}
                           ok={this.onSubmitModalHandler}>
                        {modalContent}
                    </Modal>
                    <div className="container">
                        <h1 className="section-heading">{group.name}</h1>
                        <div className="expense__card">
                            <div className="expense__card--content">
                                <h1 className="title">Total Amount</h1>
                                <span className="amount">₹ {group.amount}</span>
                            </div>
                            <div className="expense__card--profit">
                                <h1 className="title">Remaining Amount</h1>
                                <span className="amount">₹ {group.amount - amountSpend}</span>
                            </div>
                        </div>

                        {group.items.map((item, index) =>
                            <Item key={index}
                                  item={item.item}
                                  qty={item.qty}
                                  amount={item.amount}
                                  delete={() => this.onDeleteItem(index)}
                            />
                        )}
                        <div className="group__card adder__card item-adder" style={{width: '100%'}}
                             onClick={this.modalCloseHandler}>
                            <h6 className="group__card--title">Add More</h6>
                        </div>
                    </div>

                </>
            );
        else
            return (<h1 style={{textAlign: 'center'}}>Not Found</h1>)
    }
}

const mapStateToProps = state => ({
    groups: state.groups
});

const mapDispatchToProps = dispatch => {
    return {
        addItem: (id, item, qty, amount) => dispatch({type: ADD_ITEM, id, item, qty, amount}),
        deleteItem: (id, index) => dispatch({type: DELETE_ITEM, id, index})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
