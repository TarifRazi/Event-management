import { useParams } from "react-router-dom";


const EventDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>this is event details {id}</h2>
        </div>
    );
};

export default EventDetails;