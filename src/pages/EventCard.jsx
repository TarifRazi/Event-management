import { Link } from "react-router-dom";


const EventCard = ({ allEvents }) => {
    const { category, image, details,id,price } = allEvents
    return (
        <div>
            <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
                <div className="card-content flex flex-col justify-between h-full">
                    <figure className="flex-shrink-0"><img src={image} alt="Shoes" className="w-full h-48 object-cover" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{category}</h2>
                        {
                            details.length > 30 ?
                                <p>{details.slice(0, 30)} <br /> <Link to={`/allEvents/${id}`} className="text-blue-800 font-bold">See more...</Link> </p>
                                : <p>{details}</p>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EventCard;