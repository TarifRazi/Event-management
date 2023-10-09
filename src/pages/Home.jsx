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
            <h1 className="text-5xl my-5 text-center font-custom font-bold">Greetings..</h1>
            <Carousel showThumbs={false}>
                {allEvents.map(item =>
                    <div key={item.id}>
                        <img src={item.image} />
                    </div>
                )}
            </Carousel>
            <div className="mt-20">
                <h2 className="text-4xl font-custom"> Our services</h2>

                <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-9 mt-5">
                    {
                        allEvents.map(event => <EventCard
                            key={event.id}
                            allEvents={event}></EventCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;