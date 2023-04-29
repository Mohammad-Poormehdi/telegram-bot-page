import React, { ReactNode, useCallback, useState } from "react";
import Navbar from "./navbar/Navbar";
import TextSection from "./main/TextSection";
import Properties from "./main/Properties";
import Carousel from "./main/Carousel";

const Glass = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isScrollActive, setIsScrollActive] = useState(true);
  const handleActiveTab = useCallback((id: number) => {
    setActiveTab(id);
  }, []);
  const handleScrollActive = useCallback(()=>{
    setIsScrollActive(value => !value)
  },[])
  return (
    <div className={`glass h-[80vh] overflow-x-hidden ${isScrollActive ? 'overflow-y-auto' : 'overflow-y-hidden'} relative w-full  space-y-10 p-10 bg-gray-500 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-[5px] bg-opacity-20 border border-gray-100`}>
      <Navbar handleActiveTab={handleActiveTab} handleScrollActive={handleScrollActive} />
      {activeTab === 1 && <TextSection />}
      {activeTab === 2 && <Properties />}
      {activeTab === 3 && <Carousel />}
    </div>
  );
};
export default Glass;
