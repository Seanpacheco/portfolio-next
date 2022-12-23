import React, {FC} from 'react'


const projects = [
    { title: 'PlayRight', id: 4, tech:['Bootstrap','Ejs','Node.js','JavaScript','MongoDB','Mongoose','MVC'], pic:'/images/playright.jpeg',description:"Full-stack webapp with authentication to search for suitable stageplays from the public domain, Teachers and stage directors can search for suitable plays depending on cast size and desired genre or by name. Users can save plays and role assignments on their account.",demo:'https://playright.up.railway.app/',github:'https://github.com/Seanpacheco/public-domain-app'},
    { title: 'ShowMe', id: 5, tech:['Team-Project','Ejs','Node.js','JavaScript','MongoDB','MVC'], pic:'/images/showme.png',description:'Fullstack Web App with authentication that makes an API call to allow users to search for thousands of shows and add them to their watchlist. They can view summaries of each show and update them when they are finished. They can also see a list of shows that are on for the current date.',demo:'https://show-me.up.railway.app/',github:'https://github.com/Seanpacheco/ShowMe'},
    { title: 'Client Site', id: 6, tech:['React','TailwindCSS','Gatsby'], pic:'/images/client-site.png',description:'Static portfolio/business site built for a client using React and TailwindCSS with Gatsby.',demo:'string',github:'string'}
]

const ProjectCard: FC = () => {
    const projectList = projects.map(project =>
    <div key={project.id} className="card w-auto bg-[#B1B0C0] shadow-xl">
        <figure className="px-10 pt-10">
            <img src={project.pic} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{project.title}</h2>
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
    <div className="hero mb-40 min-h-screen bg-[#8E8B9E]">
        <div className="flex flex-col gap-20 hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Projects</h1>
            </div>   
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    { projectList }
                </ul>
        </div>
    </div>
    )
}

export default ProjectCard
