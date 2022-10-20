import React, {useState} from 'react';
let FORM=(props)=>{
let [enteredtitle, titleChanger]=useState('');
let [enteredamount, amountChanger]=useState('');
let [entereddate, dateChanger]=useState('');
let TitleChangeHandler=(event)=>{
titleChanger(event.target.value);
}
let AmountChangeHandler=(event)=>{
    amountChanger(event.target.value);
}
let DateChangeHandler=(event)=>{
    dateChanger(event.target.value);
}
let submitHandler=(event)=>{
    event.preventDefault();
    let formsubmission=
    {
        title:enteredtitle,
        amount:enteredamount,
        date:new Date(entereddate)
    }
    props.formsub(formsubmission);
    titleChanger('');
    amountChanger('');
    dateChanger('');
}



return(
<form onSubmit={submitHandler}>
    <label>Title</label>
    <input type='text' value={enteredtitle} onChange={TitleChangeHandler}/>
    
    <label>Amount</label>
    <input type='number' value={enteredamount} step='0.01' onChange={AmountChangeHandler}/>
    
    <label>Date</label>
    <input type='date' value={entereddate} min='2020-01-1'  onChange={DateChangeHandler}/>
    
    <button type='submit'>Submit Expense</button>
</form>);
}
export default FORM;