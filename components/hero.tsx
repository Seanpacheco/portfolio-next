import React, {FC} from 'react'



const Hero: FC = () => {
    return(
        <div className="hero min-h-screen bg-[#8E8B9E]">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hi, I'm Sean</h1>
                    <p className="py-6">I'm a full stack software engineer and I specialize in web development</p>
                </div>
            </div>
        </div>
    )
}

export default Hero