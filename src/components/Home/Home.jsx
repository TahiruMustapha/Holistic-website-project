import React,{useState} from 'react'
import Aim from '../Aim/Aim'
import Appointment from '../appointment/Appointment'
import Events from '../Events/Events'
import Meeting from '../Meeting/Meeting'
import Services from '../Services/Services'
import Work from '../Work/Work'
import { Link } from 'react-router-dom'
import './Home.css'
import Appointment2 from '../appointment2/Appointment2'
const Home = ({homeBtn,onClose}) => {
 // const [closeForm, setCloseForm] = useState(false);
 //const[openAppointment,setOpenAppointment] = useState(false);
 //onClick={onClose}
  return (
    <div>
      <div  className='main-home' >
      <h1>Therapy for <br/> Depression</h1>
      <p>We develop & understand your <br/> thoughts patterns</p>
      <button id='home-btn' className='home-btn' onClick={homeBtn} >Book An Appointment</button>

    </div>
    <Aim/>
    <Services/>
    <Work/>
    <Events/>
    {/* <Meeting/> */}
    </div>
    

  )
}

export default Home
