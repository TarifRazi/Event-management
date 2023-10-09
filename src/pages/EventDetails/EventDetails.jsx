import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { saveEvent } from "../../local-storage/localStorage";


const EventDetails = () => {

    const booking = () => {
        saveEvent(idInt)
        console.log(saveEvent)
        toast("Thank you for choosing us...")
    }

    const allEvents = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id)
    let data = allEvents.filter(item => item.id == idInt)[0];
    console.log(data);
    return (
        <div>

            <div className="card w-full glass">
                <figure><img src={data.image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{data.category}</h2>
                    <p className="text-white">{data.details}</p>
                    <div className="card-actions justify-end">
                        <button onClick={booking} className="btn btn-primary">{data.price} $</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EventDetails;