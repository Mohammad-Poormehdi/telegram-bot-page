import { IconType } from "react-icons";
import { BsRobot } from "react-icons/bs";

interface PropertyCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  icon:Icon,
  title,
  description,
}) => {
  return (
    <div className="w-full h-auto p-10 my-auto space-y-6 text-center rounded-2xl border">
      <Icon className="text-neon-cyan mx-auto" size={50} />
      <h2 className="text-white font-bold text-2xl">{title}</h2>
      <p className="text-white">
        {description}
      </p>
    </div>
  );
};
export default PropertyCard;
