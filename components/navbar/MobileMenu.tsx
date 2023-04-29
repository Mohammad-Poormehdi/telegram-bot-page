import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useCallback, useState } from "react";
import Menu from "./Menu";

const menuItems = [
  { label: "صفحه اصلی", id: 1 },
  { label: "ویژگی ها", id: 2 },
  { label: "گالری تصاویر", id: 3 },
];
interface MobileMenuProps {
  handleActiveTab: (id: number) => void;
  handleScrollActive:()=>void
}
const MobileMenu: React.FC<MobileMenuProps> = ({ handleActiveTab, handleScrollActive }) => {
  const [isActive, setIsActive] = useState(false);
  const handleMenuActive = useCallback(() => {
    setIsActive((value) => !value);
    handleScrollActive()
  }, []);
  return (
    <>
      <button onClick={handleMenuActive} aria-label="منو" className="md:hidden">
        <HiOutlineBars3 className="text-white" size={30} />
      </button>
      <div
        className={`fixed overflow-hidden inset-0 transition-transform z-50 duration-300 ease-out bg-white ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative w-full h-full">
          <button onClick={handleMenuActive} aria-label="close">
            <AiOutlineClose
              className="text-black absolute top-12 right-8"
              size={30}
            />
          </button>
          <ul className=" mt-20 ">
            {menuItems.map((item, index) => (
              <li
                key={item.label}
                onClick={() => {
                  handleActiveTab(item.id);
                  handleMenuActive();
                }}
                className={`text-black px-5 py-4 border-b flex items-center cursor-pointer ${index ===0 && 'border-t'}`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
