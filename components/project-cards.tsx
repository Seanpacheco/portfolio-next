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
            <div className="card-actions my-3 justify-around w-9/12">
                <a target="_blank" href={project.demo} className="btn btn-primary tracking-widest text-xl">Demo</a>
                <a target="_blank" href={project.github} className="btn btn-primary tracking-widest text-xl">Github</a>
            </div>
            <div className="card-actions">
                {project.tech.map((element, i) =>
                    <div key={i} className="badge badge-outline text-[#3B3156]">{element}</div>
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
