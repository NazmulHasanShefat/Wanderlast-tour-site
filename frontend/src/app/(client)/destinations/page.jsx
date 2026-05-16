import SelectDestination from "./SelectDestination";

export default function DestinationPage() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 my-5">
      <h1 className="text-6xl font-semibold">Explore All Destinations</h1>
      <p className="text-xl text-gray-500">Find your perfect travel experience from our curated collection</p>
      <SelectDestination />
    </section>
  );
}