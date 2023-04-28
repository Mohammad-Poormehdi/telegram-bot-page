import {HiOutlineBars3} from 'react-icons/hi2'

const MobileMenu = ()=>{
    return <button aria-label="منو" className='md:hidden'>
        <HiOutlineBars3 className='text-white' size={30} />
    </button>
}
export default MobileMenu