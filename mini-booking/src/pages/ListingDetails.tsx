import {useParams, useNavigate} from "react-router-dom";
import {listings} from "@/data/listing";

export default function ListingDetails() {
  const {id} = useParams();
  const navigate = useNavigate();
  const listing = listings.find((l) => l.id === id);

  if (!listing) {
    return <p>Listing not found.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-4">
      <img src={listing.image} alt={listing.name} className="rounded-xl w-full object-cover h-64"/>
      <h2 className="text-2xl font-bold">{listing.name}</h2>
      <p className="text-gray-600">{listing.location}</p>
      <p className="text-sm text-gray-500">Rating: {listing.rating} ({listing.reviews} reviews)</p>
      <p className="text-lg font-semibold text-green-800">${listing.price} / night</p>
      <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida bibendum orci
        nec porttitor. Morbi aliquam ex a placerat sollicitudin. Ut tristique vitae tellus non porta. Cras arcu turpis,
        luctus ac placerat non, ultrices a turpis. Suspendisse ut mauris quis mauris gravida eleifend eu sed orci. Morbi
        viverra ipsum at vestibulum accumsan.</p>
      <div>
        <h3 className="font-semibold mb-2">Amenities</h3>
        <div className="flex flex-wrap gap-3">
          {listing.amenities?.map((amenity, index) => (
            <div
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {amenity}
            </div>
          ))}
        </div>
      </div>

      <button
        className="bg-green-900 hover:bg-green-700 text-white px-4 py-2 rounded"
        onClick={() => navigate("/confirmation")}
      >
        Book now
      </button>
    </div>
  );
}
