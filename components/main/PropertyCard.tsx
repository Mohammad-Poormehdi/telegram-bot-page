import {BsRobot} from 'react-icons/bs'

const PropertyCard = ()=>{
    return <div className="w-full h-[400px] p-10 my-auto space-y-6 text-center rounded-2xl border">
        <BsRobot className='text-neon-cyan mx-auto' size={50} />
        <h2 className='text-white font-bold text-2xl'>Title</h2>
        <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, possimus? Quisquam voluptatibus culpa earum, sed expedita voluptatum eligendi voluptate magni.</p>
    </div>
}
export default PropertyCard