import React from 'react'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import './Appointment.css'
const Appointment = ({open,onClose}) => { 
  const[name , setName] = useState('');
  const[surname , setSurname] = useState('');
  const[email , setEmail] = useState('');
  const[phone , setPhone] = useState('');
  const[message , setMessage] = useState('');
  const[time , setTime] = useState('');
  const resetForm = ()=>{
    setName('')
    setSurname('')
    setEmail('')
    setPhone('')
    setMessage('')
    setTime('')

  }
  
 const handleSubmit =  (e)=> {
  const formEl = document.querySelector('form')
  e.preventDefault();
  
  console.log('submitted');
  const formData = new FormData(formEl);
  fetch('https://script.google.com/macros/s/AKfycby4ObOG-ETc60RyFs65efapheQUybljZ84sXJhgqj1q-80g9FPYRe7SwiOOLfe3P9W6/exec',{
    method:'POST',
    body:formData,
    
  })
  
}
 if(!open) return null
  return (
    <div className="mainAppointment" id='mainAppointment'>
      <div className='appointment'>
       <h3>Appointment Form</h3>
       <FaTimes className='close' onClick={onClose}/>    
          <form className='form' autoComplete='off' onSubmit={(e)=>handleSubmit(e)}>
          <p id='appointment-input-row'>
            <input type="text" placeholder='Name' required
        name='name'
            />
            <input type="text" placeholder='Surname' required
            name='surname'
            />
          </p>
          <p id='appointment-input-row'>
            <input type="email" placeholder='Email' required
           name='email'
         
            />
            <input type="number" placeholder='phone' required
            name='phone'
      
            />
          </p>
          <textarea placeholder='Tell us about your issue' required
          name='message'
        
          ></textarea>
          <p>
            <input type="text" placeholder='Tell us your preffered appointment time' id='issue-box' required
           name='time'
        
            />
          </p>
          <button type="submit" className='appoint-btn'  >Send message</button>
       </form>
    </div>
    {/* onClick={onClose} */}
    </div>
    
  )
}

export default Appointment
