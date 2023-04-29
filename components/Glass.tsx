import React, { ReactNode, useCallback, useState } from "react";
import Navbar from "./navbar/Navbar";
import TextSection from "./main/TextSection";
import Properties from "./main/Properties";
import Carousel from "./main/Carousel";

const Glass = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  const handleActiveTab = useCallback((id: number) => {
    setActiveTab(id);
  }, []);
  return (
    <div className="h-[80vh] overflow-x-hidden overflow-y-auto relative w-full my-auto space-y-10 p-10 bg-gray-500 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-[5px] bg-opacity-20 border border-gray-100">
      <Navbar handleActiveTab={handleActiveTab} />
        {activeTab === 1 && <TextSection />}
        {activeTab === 2 && <Properties />}
        {activeTab === 3 && <Carousel />}
      </div>
    
  );
};
export default Glass;
