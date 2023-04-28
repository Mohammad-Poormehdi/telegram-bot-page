import CTA from "../CTA"

const TextSection = ()=>{
    return <div dir="rtl" className="flex-col max-w-[550px] space-y-6 text-white absolute bottom-10 right-10 max-md:static max-md:text-center">
        <h1 className="font-bold text-6xl">هدینگ</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, placeat dolorum! Autem illo laboriosam, expedita eum possimus voluptatum voluptate necessitatibus?</p>
        <CTA label="کلیک کنید" />
    </div>
}
export default TextSection