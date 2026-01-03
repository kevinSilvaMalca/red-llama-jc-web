import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Contact.css';
import AttendanceInfo from '../components/AttendanceInfo';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <div className="contactus-container">
        <div className="contactus-attendance">
          <AttendanceInfo></AttendanceInfo>
        </div>
        <div className="contactus-form">
          <ContactForm></ContactForm>
        </div>
      </div>
    </>
  );
};

export default Contact;
