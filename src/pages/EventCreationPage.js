// src/pages/EventCreationPage.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createEvent } from '/Users/aysenurdag/university-events-management/src/eventService.js'; 

const EventCreationPage = () => {
  const initialValues = {
    name: '',
    date: '',
    location: '',
    description: '',
    organizer: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Event name is required'),
    date: Yup.date().required('Event date is required'),
    location: Yup.string().required('Event location is required'),
    description: Yup.string().required('Event description is required'),
    organizer: Yup.string().required('Event organizer is required'),
  });


  const handleFormSubmit = async (formData) => {
    try {
      const data = await createEvent(formData);
      console.log('Event created successfully!', data);
      
    } catch (error) {
      console.error('An error occurred while creating the event:', error);
    }
  };
  

  return (
    <div>
      <h1>Create Event</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <Form class="event-link" >
          <div class="event-space" >
            <label htmlFor="name">Event Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div class="event-space" >
            <label htmlFor="date">Event Date:</label>
            <Field type="date" id="date" name="date" />
            <ErrorMessage name="date" component="div" className="error" />
          </div>

          <div class="event-space">
            <label htmlFor="location">Event Location:</label>
            <Field type="text" id="location" name="location" />
            <ErrorMessage name="location" component="div" className="error" />
          </div>

          <div class="event-space">
            <label htmlFor="description">Event Description:</label>
            <Field as="textarea" id="description" name="description" />
            <ErrorMessage name="description" component="div" className="error" />
          </div>

          <div class="event-space">
            <label htmlFor="organizer">Event Organizer:</label>
            <Field type="text" id="organizer" name="organizer" />
            <ErrorMessage name="organizer" component="div" className="error" />
          </div>

          <button class="btn-delete" type="submit">Create Event</button>

        </Form>
      </Formik>
    </div>
    
    
  );
};

export default EventCreationPage;