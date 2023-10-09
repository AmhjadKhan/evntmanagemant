import { useLoaderData, useParams } from "react-router-dom";


function Medicalde() {
  const medicals = useLoaderData();
  const { id } = useParams();
  // console.log(id, medicals)
  const medical = medicals.find((medical) => medical.id == id);
  return (
    <div className="">
      <div className="card card-side bg-base-100 shadow-xl grid md:grid-cols-4">
        <div className="col-span-2">
        <figure>
          <img
            src={medical.image}
            alt="Movie"
          />
        </figure>
        </div>
        <div className="card-body col-span-2">
          <h2 className="card-title font-extrabold text-2xl">{medical.name}</h2>
          <p className="text-xl"><span className="text-2xl font-bold">Short:-</span>{medical.short_description}</p>
          <p><span className="text-2xl font-bold">Description:-</span>{medical.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">click me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medicalde;
