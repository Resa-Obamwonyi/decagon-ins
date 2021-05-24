import React from 'react';
import Button from "../Button";
import {StyledDiv } from './style'


function AdmissionsProcess() {
  return (
    <StyledDiv>
    <div>
      <h2>Admissions Process</h2>
      <p>Now that you have explored what we have to
        offer, learned more about what we do and how we train, and discovered more about Decagon Institute and our partners, all you have to do is apply.</p>
      
      <h3>Before you fill out and submit your application form, please ensure you meet the following requirements:</h3>
      <ul>
        <li>You possess a track record of exceptional personal, academic and professional performance.</li>
        <li>You are a fast learner with excellent learning and cognitive ability.</li>
        <li>You possess the determination to work hard and excel as a software engineer.</li>
        <li>You have either a Higher National Diploma(HND), Bachelor's degree, or Masters.</li>
        <li>You have completed NYSC or Have an Exemption Letter.</li>
        <li>You must have a credible Guarantor</li>
      </ul>

      <h3>Do you think you have what it takes to become a Decadev? </h3>
      <p>If you are in agreement with the requirements listed above and believe you have what
        it takes to become an outstanding Decadev in our intensive program, fill out the application form below and stay tuned for the next steps. </p>
      <Button link={"/apply"}>
          Apply Now
      </Button>
    </div>
    </StyledDiv>
  )
}

export default AdmissionsProcess;