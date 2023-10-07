import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { name, picture, description, price, id } = service
    const des = description.slice(0, 300);

    return (
        <div>
            <div className="card shadow-xl image-full">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="pt-5">{des}...</p>
                    <h3 className="font-bold">Price: {price}$</h3>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${id}`}><button className="btn bg-[#37207d] btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;