import PropertyCard from "./PropertyCard";
import { properties } from "@/data";

const Properties = () => {
  return (
    <>
      <div className=" property-container grid grid-cols-4 max-md:flex-col gap-4 px-2 pb-20 max-md:grid-cols-1 max-md:overflow-y-scroll">
        {properties.map((property) => (
          <PropertyCard
          key={property.id}
            icon={property.icon}
            title={property.title}
            description={property.description}
          />
        ))}
      </div>
    </>
  );
};
export default Properties;
