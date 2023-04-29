interface OrbProps{
    className?:string,
}
const Orb:React.FC<OrbProps> = ({className})=>{
    return <div className={` orb w-[500px] h-[500px] rotate-[130deg] absolute rounded-full ${className}`}></div>
}
export default Orb