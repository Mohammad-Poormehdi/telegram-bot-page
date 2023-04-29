import Logo from "./Logo"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"
interface NavbarProps{
    handleActiveTab:(id:number)=>void,
    handleScrollActive:()=>void
}
const Navbar:React.FC<NavbarProps> = ({handleActiveTab, handleScrollActive })=>{
    return <nav className="w-full text-white  flex justify-between items-center">
        <Logo />
        <Menu handleActiveTab={handleActiveTab} />
        <MobileMenu handleScrollActive={handleScrollActive} handleActiveTab={handleActiveTab} />
    </nav>
}
export default Navbar