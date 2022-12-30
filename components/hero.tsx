import React, {FC} from 'react'
import Image from 'next/image'



const Hero: FC = () => {
    return(
        <div className="hero min-h-screen bg-[#8E8B9E]">
            <div className="hero-content text-center">
                <div className="max-w-2xl mt-24 lg:mt-0">
                    <Image className='' src="images/old-tv-header.png" alt="old tv" />
                        <p className="py-6 text-2xl">I'm a focused, versatile, software engineer that works great on a team. Have worked on
                            various successful front and back-end web applications. Looking to join a tight knit team
                            where I can make use of my skills.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero