import Orb from "./Orb"

const Background = ()=>{
    return <div className="bg-black absolute inset-0 -z-10">
        <div className="relative w-full h-full">
            <Orb className="bottom-0 max-md:-left-1/2" />
            <Orb className="bottom-0 right-0 scale-75 max-md:-right-1/3 max-md:-bottom-20" />
            <Orb className="-top-20 right-1/3 scale-50 " />
        </div>
    </div>
}
export default Background