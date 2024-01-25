// src/components/EventList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import events from '../mockData';

const EventList = () => {
  const [eventList, setEventList] = useState(events);

  const handleDelete = (eventId) => {
    
    const updatedEvents = eventList.filter((event) => event.id !== eventId);
    setEventList(updatedEvents);
  };

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {eventList.map((event) => (
          <li key={event.id}>
            <Link class="event-link" to={`/event/${event.id}`} >
              <strong>{event.name}</strong> - {event.date}, {event.location}
            </Link>
            <button class="btn-delete" onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    
  );


};

export default EventList;

