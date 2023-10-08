import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import EventCard from "./EventCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {

    const allEvents = useLoaderData()


    return (
        <div>
            <Carousel showThumbs={false}>
                {allEvents.map(item =>
                    <div key={item.id}>
                        <img src={item.image} />
                    </div>
                )}
            </Carousel>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-9 mt-20">
                {
                    allEvents.map(event => <EventCard
                        key={event.id}
                        allEvents={event}></EventCard>)
                }
            </div>
        </div>
    );
};

export default Home;