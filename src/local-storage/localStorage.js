const getStoredEvent = () => {
    const storedEvent = localStorage.getItem('booked-event');
    if (storedEvent) {
        return JSON.parse(storedEvent);
    }
    return [];
}

const saveEvent = id => {
    
    const storedEvents = getStoredEvent();
    console.log(getStoredEvent);
    const exists =storedEvents.find(eventId => eventId === id);
    if(!exists){
        
        storedEvents.push(id);
        localStorage.setItem('booked-event', JSON.stringify(storedEvents))
    }
}

export { getStoredEvent, saveEvent }