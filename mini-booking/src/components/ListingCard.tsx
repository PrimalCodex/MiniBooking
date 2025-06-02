import {Star} from "lucide-react";
import {Link} from "react-router-dom";

interface ListingCardProps {
  id: string;
  image: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
}

export default function ListingCard({id, image, name, location, rating, reviews, price,}: ListingCardProps) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
      <Link to={`/listing/${id}`}>
        <img src={image} alt={name} className="h-48 w-full object-cover"/>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{location}</p>
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <Star size={16} fill="currentColor"/>
            <span>{rating}</span>
            <span className="text-gray-400">({reviews} reviews)</span>
          </div>
          <p className="text-green-900 font-bold">${price} / night</p>
        </div>
      </Link>
    </div>
  );
}
