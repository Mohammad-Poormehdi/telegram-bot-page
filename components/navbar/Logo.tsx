import { mainData } from "@/data";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-4 items-center max-md:scale-50 origin-left">
      {mainData.logo ? (
        <Image
          src={mainData.logo}
          alt="logo"
          width={600}
          height={600}
          className="w-auto h-auto"
        />
      ) : (
        <>
          {" "}
          <div className="w-[50px] h-[50px] rounded-full bg-white"></div>
          <h1 className="font-bold text-3xl">YOUR LOGO</h1>{" "}
        </>
      )}
    </div>
  );
};
export default Logo;
