import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredEvent } from '../local-storage/localStorage';

const Bookings = () => {
    const bookedItems = useLoaderData();

    const [eventBooked, setEventBooked] = useState([])
    useEffect(() => {
        const bookedEventIds = getStoredEvent();
        if (bookedItems.length > 0) {
            const booked = bookedItems.filter(bookedEvent => bookedEventIds.includes(bookedEvent.id))
            console.log(bookedItems, bookedEventIds, booked);

            setEventBooked(booked);
        }
    }, [])
    return (
        <div className='mt-10 m-4'>
            <h1 className='text-3xl font-semibold font-custom'>Your booked items: {eventBooked.length}</h1>
            <ul>
                {
                    eventBooked.map(event => <li className='mt-10' key={event.id}>
                        <div className="flex flex-col md:flex-row  bg-base-100 shadow-xl">
                            <figure><img className='w-full md:w-1/3' src={event.image} alt="Movie" /></figure>
                            <div className="card-body w-full">
                                <h2 className="card-title">{event.category}</h2>
                                <p>price: {event.price}</p>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Bookings;