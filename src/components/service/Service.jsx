//import React, {useState} from 'react'
import Recovery from '../recovery/Recovery';
import Meeting from '../Meeting/Meeting';
import './Service.css'
import Services3 from '../services3/Services3';
const Service = ({ServiceBtn}) => {
 
  return (
    <div className='service'>
       <div className='service-bg'>
        <h3>Services</h3>
        <p>Enjoy Where You Are Now</p>
       </div>
       <Services3/>
       {/* <div className="service-details">
          <div>
          <div className='counselling-service'>
         
         <p className='current-service' onClick={()=> setCounsellingMenu(true)}>Counselling Services</p>
         
         {counsellingMenu && (  
          <div className="counselling">
          <div className='counselling-div'>
          <i>Counsilling Services</i>
          <h3>About Counselling</h3> 
         <p>Our Counselling service make a profund impact on the lives of individuals,families and communities.
           We also helps people navigate dificult life situation, such as death of love ones,divorce, natural disaster
           ,school stress and loss of job.We provides the tools and insights to manage mental healht issues such as anxiety 
           and depression.Ultimately our counselling empowers people to live healhty and fulfilling life.
         </p>
         </div>
         <div>
       <h2>Counselling Services</h2>
         <p>Premarital Counselling and Education.</p>
         <p>Post-Wedding Counselling.</p>
         <p>Marriage Counselling.</p>
         <p>Devorce Counselling.</p>
         <p>Crises Counselling.</p>
         <p>Depression Counselling.</p>
         <p>Sexual Disfunction Counselling.</p>
          </div>
          </div>
         
)}
 
        
        </div>
        <div className='coaching service'>
        
        <p className='coaching-service' onClick={()=> setCoachingMenu(true)}>Coaching Services</p>
        {coachingMenu && (
          <div className="counselling">
          <div className='counselling-div'>
          <i>Coaching Services</i>
          <h3>About Coaching</h3> 
         <p>Our Counselling service make a profund impact on the lives of individuals,families and communities.
           We also helps people navigate dificult life situation, such as death of love ones,divorce, natural disaster
           ,school stress and loss of job.We provides the tools and insights to manage mental healht issues such as anxiety 
           and depression.Ultimately our counselling empowers people to live healhty and fulfilling life.
         </p>
         </div>
         <div>
         <h2>Coaching Services</h2>
          <p>Marriage Coaching.</p>
          <p>Relationship Coaching.</p>
          <p>Life Coaching.</p>
          <p>Career Coaching.</p>
          <p>Leadership Coaching.</p>
          </div>
          </div>
        )}
       
        </div>
        <div className='training service'>
        <p  className='training-service' onClick={()=> setTrainingMenu(true)}>Training Services</p>
        {trainingMenu && (
          <div className="counselling">
          <div className='counselling-div'>
          <i>Training Services</i>
          <h3>About Training</h3> 
         <p>Our Counselling service make a profund impact on the lives of individuals,families and communities.
           We also helps people navigate dificult life situation, such as death of love ones,divorce, natural disaster
           ,school stress and loss of job.We provides the tools and insights to manage mental healht issues such as anxiety 
           and depression.Ultimately our counselling empowers people to live healhty and fulfilling life.
         </p>
         </div>
         <div>
         <h2>Training Services</h2>
          <p>Leadership Training.</p>
          <p>Prepare Enrich Facilitator.</p>
          <p>Continuing Professional.</p>
          <p>Development CPD Courses.</p>
          <p>One Year Certificate in marriage and Counselling.</p>
          <p>Two Year Deploma in Marriage And Family Counsellig</p>
          </div>
          </div>
        )}
        </div>
          </div>
       </div> */}
       <Recovery />
       <Meeting book = {ServiceBtn}/>
    </div>
  )
}

export default Service
