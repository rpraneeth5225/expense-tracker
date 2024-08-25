import React, { useState } from 'react'

export const NewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);


  return (
    <>
    <h4>Add new transaction</h4>
    <div className="form">
        <label htmlFor="text">Text</label><br/>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
    </div>
    <br/>
    <div className="form-2">
        <label htmlFor="amount">Amount <br/></label>
        <input type="number" placeholder="Enter amount..."/>
    </div>
    <button className="button">Add Transaction</button>
    </>
  )
}
