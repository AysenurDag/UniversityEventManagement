const API_BASE_URL = 'http://localhost:3000';

// Function to fetch a list of events
export async function fetchEvents() {
  try {
    const response = await fetch(`${API_BASE_URL}/events`);
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
}

// Function to create a new event
export const createEvent = async (eventData) => {
  // Implementation to create an event
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    });
    if (!response.ok) throw new Error('Event creation failed');
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to update an existing event
export const updateEvent = async (id, eventData) => {
  // Implementation to update an event
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    });
    if (!response.ok) throw new Error('Event update failed');
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};


// Function to delete an event
export async function deleteEvent(eventId) {
  try {
    const response = await fetch(`${API_BASE_URL}/events/${eventId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete event');
    }
    return response.ok;
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
}
