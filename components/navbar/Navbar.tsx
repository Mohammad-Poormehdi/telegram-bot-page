import Logo from "./Logo"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"
interface NavbarProps{
    handleActiveTab:(id:number)=>void,
}
const Navbar:React.FC<NavbarProps> = ({handleActiveTab})=>{
    return <nav className="w-full text-white  flex justify-between items-center">
        <Logo />
        <Menu handleActiveTab={handleActiveTab} />
        <MobileMenu />
    </nav>
}
export default Navbar