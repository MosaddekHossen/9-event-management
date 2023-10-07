import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const card = data.find(element => element.id == id)
    const { description, name, price, } = card;
    
    return (
        <div className="max-w-7xl mx-auto my-10 px-8 lg:px-0">
            <div className="card bg-slate-500 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={card.picture} alt="Shoes" className="rounded-xl h-[70vh] w-full" />
                </figure>
                <div className="card-body items-center text-center text-white">
                    <h2 className="card-title">{name}</h2>
                    <h3 className="font-bold">Price: {price}$</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;