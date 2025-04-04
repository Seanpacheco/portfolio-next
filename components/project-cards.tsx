import React, {FC} from 'react'
import Image from 'next/image'
import playrightPic from '../public/images/playright.png'
import showmePic from '../public/images/showme.png'
import poolManagerPic from '../public/images/chem-log.png'
import dineFlowPic from '../public/images/dineFlow.png'


const latestProjects = [
    {title: 'DineFlow', id: 1, tech:['TypeScript','React','Node.js','Express','Prisma','PostgreSQL','TailwindCSS', "Team-Project"], pic:dineFlowPic ,description:"A full-stack kitchen management system designed to streamline restaurant operations by integrating real-time inventory tracking, order management, menu engineering, and predictive analytics. The project utilized Node.js and Express for backend development, PostgreSQL with Prisma ORM for database management, and a React frontend styled with Tailwind CSS. Predictive analytics features were implemented using Python libraries such as NumPy and Pandas. The system also included RESTful APIs for seamless communication between components and ensured scalability and performance optimization.",demo:'https://legendary-fox-495ba2.netlify.app/',github:'https://github.com/allaboutmike/smart-kitchen-mgmt'},
    ]

const projects = [
    { title: 'Pool Manager', id: 2, tech:['TypeScript','React','Node.js','Express','Pg-promise','PostgreSQL','Mantine','JWT Auth','Auth0'], pic:poolManagerPic ,description:"Pool management app built using REACT and Mantine with CSS modules on the frontend with Auth0 authentication. On the backend I used NodeJS and Express with a PostgreSQL database.",demo:'https://pool-management-app.onrender.com',github:'https://github.com/Seanpacheco/pool-management-app'},
    { title: 'PlayRight', id: 3, tech:['Bootstrap','Ejs','Node.js', 'Express','JavaScript','MongoDB','Mongoose','MVC'], pic:playrightPic ,description:"Full-stack webapp with authentication to search for suitable stageplays from the public domain, Teachers and stage directors can search for suitable plays depending on cast size and desired genre or by name. Users can save plays and role assignments on their account.",demo:'https://playright.onrender.com',github:'https://github.com/Seanpacheco/public-domain-app'},   
]
// { title: 'Client Site', id: 6, tech:['React','TailwindCSS','Gatsby'], pic:'/images/client-site.png',description:'Static portfolio/business site built for a client using React and TailwindCSS with Gatsby.',demo:'string',github:'string'}

const ProjectCard: FC = () => {
    const latestProjectList = latestProjects.map(project =>
        <div key={project.id} className="card w-auto bg-[#B1B0C0] shadow-xl lg:col-start-2 col-span-4">
            <figure className="px-10 pt-10">
                <Image src={project.pic} alt="Project Screenshot" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">{project.title}</h2>
                <p>{project.description}</p>
                <ul className="card-actions my-3 justify-around w-9/12">
                    <li className="snesMenuBtn w-28 group active:animate-slide transition-none bg-[#4e309f] border-[6px] border-[#4e309f] rounded-md shadow-2xl">
                        <a target="_blank" className='snesMenuBtnInner flex group-active:animate-slide text-[#9c8ae0] transition-duration-0 transition-none shadow-inner shadow-[#4e309f] !rounded-full justify-center tracking-widest bg-gradient-to-b from-[#341f62] via-[#55379b] to-[#907acd]' href={project.demo}>Demo</a>
                    </li>
                    <li className="snesMenuBtn w-28 group active:animate-[slide] transition-none bg-[#4e309f] border-[6px] border-[#4e309f] rounded-md shadow-2xl">
                        <a target="_blank" className='snesMenuBtnInner flex group-active:animate-[slide] text-[#9c8ae0] transition-duration-0 transition-none shadow-inner shadow-[#4e309f] !rounded-full justify-center tracking-widest bg-gradient-to-b from-[#341f62] via-[#55379b] to-[#907acd]' href={project.github}>Github<span id='projectButtonTriangle' className=' tracking-wide -skew-x-12 ml-1 mt-1.5 h-0 w-0 border-solid border-t-20 border-r-0 border-b-0 border-l-10 border-t-transparent border--r-transparent border-b-transparent border-l-[#9c8ae0]'></span></a>
                    </li>
                </ul>
                <div className="card-actions">
                    {project.tech.map((element, i) =>
                        <div key={i} className="badge badge-outline text-[#3B3F48]">{element}</div>
                    )}
                </div>
            </div>
        </div>
        )

    const projectList = projects.map(project =>
    <div key={project.id} className="card w-auto bg-[#B1B0C0] shadow-xl">
        <figure className="px-10 pt-10">
            <Image src={project.pic} alt="Project Screenshot" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl">{project.title}</h2>
            <p>{project.description}</p>
            <ul className="card-actions my-3 justify-around w-9/12">
                <li className="snesMenuBtn w-28 group active:animate-slide transition-none bg-[#4e309f] border-[6px] border-[#4e309f] rounded-md shadow-2xl">
                    <a target="_blank" className='snesMenuBtnInner flex group-active:animate-slide text-[#9c8ae0] transition-duration-0 transition-none shadow-inner shadow-[#4e309f] !rounded-full justify-center tracking-widest bg-gradient-to-b from-[#341f62] via-[#55379b] to-[#907acd]' href={project.demo}>Demo</a>
                </li>
                <li className="snesMenuBtn w-28 group active:animate-[slide] transition-none bg-[#4e309f] border-[6px] border-[#4e309f] rounded-md shadow-2xl">
                    <a target="_blank" className='snesMenuBtnInner flex group-active:animate-[slide] text-[#9c8ae0] transition-duration-0 transition-none shadow-inner shadow-[#4e309f] !rounded-full justify-center tracking-widest bg-gradient-to-b from-[#341f62] via-[#55379b] to-[#907acd]' href={project.github}>Github<span id='projectButtonTriangle' className=' tracking-wide -skew-x-12 ml-1 mt-1.5 h-0 w-0 border-solid border-t-20 border-r-0 border-b-0 border-l-10 border-t-transparent border--r-transparent border-b-transparent border-l-[#9c8ae0]'></span></a>
                </li>
            </ul>
            <div className="card-actions">
                {project.tech.map((element, i) =>
                    <div key={i} className="badge badge-outline text-[#3B3F48]">{element}</div>
                )}
            </div>
        </div>
    </div>
    )


    return(
    <div className="hero min-h-screen bg-[#8E8B9E]">
        <div className="flex flex-col gap-20 hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl tracking-widest font-bold">Latest Project</h1>
            </div>
            <ul className='grid grid-cols-1 lg:grid-cols-6 gap-4 gap-10'>
                { latestProjectList }
            </ul>
            <div className="max-w-md">
                <h1 className="text-5xl tracking-widest font-bold">Older Projects</h1>
            </div>   
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    { projectList }
                </ul>
        </div>
    </div>
    )
}

export default ProjectCard
