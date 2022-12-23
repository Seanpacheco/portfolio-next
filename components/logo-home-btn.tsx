import React, {FC} from 'react'


const Logo: FC = () => {
    return(   
        <li>
            <a href="/" className="flex items-center pl-2.5 mb-5 justify-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-7" alt="Flowbite Logo" />
                <div className='flex flex-col'>
                    <span className="self-center tracking-widest text-4xl font-semibold whitespace-nowrap text-[#797E88]">Sean Pacheco</span>
                    <div className='logo-div flex justify-center self-center bg-[#797E88]'><div className='logo px-2 text-center text-[#B1B0C0] text-sm tracking-widest'>Full-Stack Software Engineer</div></div>
                </div>
            </a>
        </li>
    )
}

export default Logo