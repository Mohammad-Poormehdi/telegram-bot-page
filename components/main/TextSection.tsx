import CTA from "../CTA"
import { mainData } from "@/data"

const TextSection = ()=>{
    return <div dir="rtl" className="flex-col max-w-[550px] space-y-6 text-white absolute bottom-10 right-10 max-md:static max-md:mx-auto max-md:text-center">
        <h1 className="font-bold text-6xl">{mainData.heading}</h1>
        <p>{mainData.subtext}</p>
        <CTA label={mainData.botton_label} />
    </div>
}
export default TextSection