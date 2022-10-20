import React, {useState} from 'react';
import './App.css';
import HEXXIT from './components/HEXXIT';
import FORM from './components/FORM';
function App() {
  let [FormData, setFormData]= useState('');
  let onFormSub=(enteredForm)=>{
     let formData={
      ...enteredForm,
      id:1
    };
    setFormData(formData);
  }
  return (
    <div>
      <HEXXIT chef={2}/>
      <FORM formsub={onFormSub}/>
        <p>{FormData.title}</p>
    </div>
  );
}

export default App;