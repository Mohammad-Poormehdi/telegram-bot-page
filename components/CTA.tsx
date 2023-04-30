import React from "react"

interface CTAProps{
    label:string,
    onClick?:()=>void
}
const CTA:React.FC<CTAProps> = ({label, onClick})=>{
    return <button onClick={onClick} className="border rounded-full text-white px-6 py-3">{label}</button>
}
export default CTA