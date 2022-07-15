import React, {Fragment, useContext, useState} from 'react';
import {GlobalContext} from "../context/GlobalState";

const AddTransaction = () => {

    // define some variables
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

    // define some functions
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        };
        addTransaction(newTransaction);
        setText("");
        setAmount(0);
    }

    return (
        <Fragment>
            <h3>Add new payment</h3>
            <form onSubmit = {onSubmit}>
                <div className = "form-control">
                    <label htmlFor = "text">Description</label>
                    <input type = "text" value = {text} onChange = {e => setText(e.target.value)} placeholder = "Enter description" />
                </div>
                <div className = "form-control">
                    <label htmlFor = "amount">Amount <br/> (Add ' - ' for expense)</label>
                    <input type = "number" value = {amount} onChange = {e => setAmount(e.target.value)} placeholder = "Enter amount" />
                </div>
                <button className = "btn">Add transaction</button>
            </form>
        </Fragment>
    )
}

export default AddTransaction
