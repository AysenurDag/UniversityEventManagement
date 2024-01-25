import React, { useState} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import events from '../mockData';
import { updateEvent } from '/Users/aysenurdag/university-events-management/src/eventService.js';

const EventDetailPage = () => {
  const { id } = useParams();
  const selectedEvent = events.find((event) => event.id === parseInt(id));
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate(); 
  const handleDelete = () => {
    
    const updatedEvents = events.filter((event) => event.id !== parseInt(id));
    console.log('Deleted Event:', selectedEvent);
    console.log('Updated Events:', updatedEvents);
    
    navigate('/'); 
  };

  const handleUpdate = async (updatedEventData) => {
    try {
      await updateEvent(selectedEvent.id, updatedEventData);
      console.log("Event updated successfully!");
      
    } catch (error) {
      console.error("Failed to update event:", error);
    }
  };

  return (
    <div class= "event-space-left" >
      <h2>Event Detail</h2>
      {selectedEvent ? (
        <div >
          <p>
            <strong >Name:</strong> {selectedEvent.name}
          </p>
          <p>
            <strong>Date:</strong> {selectedEvent.date}
          </p>
          <p>
            <strong>Location:</strong> {selectedEvent.location}
          </p>
          <p>
            <strong>Description:</strong> {selectedEvent.description}
          </p>
          <p>
            <strong>Organizer:</strong> {selectedEvent.organizer}
          </p>
          {editMode ? (
            <div>
              {}
              <button class= "btn-delete" onClick={handleUpdate}>Update</button>
            </div>
          ) : (
            <div>
              <button class= "btn-delete" onClick={handleDelete}>Delete</button>
              <button class= "btn-delete" onClick={() => setEditMode(true)}>Edit</button>
            </div>
          )}
        </div>
      ) : (
        <p>Event not found</p>
      )}
      <Link to="/">Back to Event List</Link>
    </div>
  );
};

export default EventDetailPage;