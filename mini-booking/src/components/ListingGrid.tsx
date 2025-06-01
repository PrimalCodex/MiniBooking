import ListingCard from "@/components/ListingCard";
import {listings} from "@/data/listing.ts";


export default function Listings() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {listings.map((listing, index) => (
        <ListingCard key={index} {...listing} />
      ))}
    </div>
  );
}
