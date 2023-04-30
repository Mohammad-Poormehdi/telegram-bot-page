import React, { ReactNode, useCallback, useState } from "react";
import Navbar from "./navbar/Navbar";
import TextSection from "./main/TextSection";
import Properties from "./main/Properties";
import Carousel from "./main/Carousel";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import CTA from "./CTA";

const Glass = () => {
  const router = useRouter();
  const {query} = router
  const [activeTab, setActiveTab] = useState(1);
  const [isScrollActive, setIsScrollActive] = useState(true);
  const handleActiveTab = useCallback((id: number) => {
    setActiveTab(id);
  }, []);
  const handleScrollActive = useCallback(() => {
    setIsScrollActive((value) => !value);
  }, []);
  return (
    <div
      className={`glass h-[80vh] overflow-x-hidden ${
        isScrollActive ? "overflow-y-auto" : "overflow-y-hidden"
      } relative w-full  space-y-10 p-10 bg-gray-500 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-[5px] bg-opacity-20 border border-gray-100`}
    >
      {router.route === "/" ? (
        <>
          <Navbar
            handleActiveTab={handleActiveTab}
            handleScrollActive={handleScrollActive}
          />
          {activeTab === 1 && <TextSection />}
          {activeTab === 2 && <Properties />}
          {activeTab === 3 && <Carousel />}
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <div className="text-center space-y-6">
            <AiOutlineCheckCircle className="text-white mx-auto" size={100}  />
            <div className="text-xl font-bold text-white flex items-center justify-center gap-3">
              <p>سکه به حساب کاربری شما اضافه شد</p>
              <p>{query.amount}</p>
            </div>
            <CTA onClick={()=>router.push('/')} label="بازگشت به صفحه اصلی" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Glass;
