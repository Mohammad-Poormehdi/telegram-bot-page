import React from "react"

interface CTAProps{
    label:string,
}
const CTA:React.FC<CTAProps> = ({label})=>{
    return <button className="border rounded-full text-white px-6 py-3">{label}</button>
}
export default CTA