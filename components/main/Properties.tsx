import PropertyCard from "./PropertyCard";


const Properties = () => {
  return (
    <>
      <div className=" property-container grid grid-cols-4 max-md:flex-col gap-4 px-2 pb-20 max-md:grid-cols-1 max-md:overflow-y-scroll">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </>
  );
};
export default Properties;
