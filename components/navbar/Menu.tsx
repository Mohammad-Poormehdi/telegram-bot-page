import { useCallback, useState } from "react";

const menuItems = [
  { label: "صفحه اصلی", id: 1 },
  { label: "ویژگی ها", id: 2 },
  { label: "گالری تصاویر", id: 3 },
];
interface MenuProps{
    handleActiveTab:(id:number)=>void,
}
const Menu:React.FC<MenuProps> = ({handleActiveTab}) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleClick = useCallback((id: number) => {
    setActiveTab(id);
    handleActiveTab(id)
  }, []);
  return (
    
      <ul dir="rtl" className="flex-col flex gap-5 text-white max-md:hidden">
        {menuItems.map((item) => (
          <li
            onClick={() => handleClick(item.id)}
            className={`${activeTab === item.id && "font-bold border-b"} cursor-pointer`}
            key={item.id}
          >
            {item.label}
          </li>
        ))}
      </ul>
    
  );
};
export default Menu;
