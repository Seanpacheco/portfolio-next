import React, {FC, useRef} from 'react'
import Logo from './logo-home-btn'
import ProjectCard from './project-cards'
import Contact from './contact'
import Hero from './hero'
import useScrollSpy from 'react-use-scrollspy'




const menuLinks = [
  { title: 'About', id: '1', key: 1, href: '#1'},
  { title: 'Projects', id: '2', key: 3, href: '#2'},
  { title: 'Contact', id: '3', key: 2, href: '#3'}   
]

const sections = [
  { child: <Hero/>, id: '1'},
  { child: <ProjectCard/>, id: '2'},
  { child: <Contact/>, id: '3'}
]

const MainContent: FC = () => {
  const ids = ['1', '2', '3'];
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const scrollRef = useRef(null)

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -300,
    scrollingElement: scrollRef,
  });

    return (
        <div id='pageContent' className="drawer drawer-mobile">           
          
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div ref={scrollRef} className="drawer-content flex flex-col items-center scroll-smooth bg-[#8E8B9E]">
            {/* Page content here */}
            <div className="w-full navbar z-10 fixed top-0 left-0 right-0 bg-[#B1B0C0] lg:hidden">
              <div className="flex-1">
                <a href="/" className="flex items-center pl-2.5 justify-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-7" alt="Flowbite Logo" />
                  <div className='flex flex-col'>
                    <span className="self-center tracking-widest text-4xl font-semibold whitespace-nowrap text-[#797E88]">Sean Pacheco</span>
                    <div className='flex justify-center bg-[#797E88]'><span className=' text-center text-[#B1B0C0] text-sm tracking-widest'>Full-Stack Software Engineer</span></div>
                  </div>
                </a>
              </div>
              <div className="flex-end">
                <label  htmlFor="my-drawer-2" className="btn btn-square drawer-button btn-ghost text-[#3B3156]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div> 
            </div>
            {sections.map((section, index) => (
            <div className='w-full' ref={sectionRefs[index]} key={index} id={section.id}>
              {section.child}
            </div>
            ))}                    
          </div>
          <nav className="drawer-side bg-[#B1B0C0]">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            {/* Sidebar content here */}

              <ul className="menu p-4 w-80 bg-[#B1B0C0] text-3xl subpixel-antialiased">
                  <Logo/>
                  <div className="divider h-auto bg-[#797E88] mt-0"></div>

                  {menuLinks.map((menuLink, index) => (
                  <li key={menuLink.key} className={activeSection === index ? 'group my-1 transition-none bg-primary border-8 border-primary rounded-md shadow-2xl hover:bg-primary hover:border-8 hover:border-primary hover:rounded-md hover:shadow-2xl'
                  : 'group h-[76px] my-1 transition-none hover:bg-primary hover:border-8 hover:border-primary hover:rounded-md hover:shadow-2xl'}>
                      <a className={activeSection === index ? 'transition-none text-[#9c8ae0] group-hover:text-[#9c8ae0] shadow-inner justify-center !rounded-full shadow-primary tracking-widest bg-gradient-to-b from-[#341f62] via-[#55379b] to-[#907acd] group-hover:duration-0 group-hover:transition-none group-hover:shadow-inner group-hover:shadow-primary group-hover:!rounded-full group-hover:bg-gradient-to-b group-hover:from-[#341f62] group-hover:via-[#55379b] group-hover:to-[#907acd]'
                    : 'text-[#797E88] group-hover:text-[#9c8ae0] hover:text-[#9c8ae0] transition-none group-hover:duration-0 group-hover:transition-none group-hover:shadow-inner group-hover:shadow-primary group-hover:!rounded-full justify-center tracking-widest group-hover:bg-gradient-to-b group-hover:from-[#341f62] group-hover:via-[#55379b] group-hover:to-[#907acd]'} href={menuLink.href}>{menuLink.title}</a>
                  </li>))}
                  
                  <div className="divider h-auto bg-[#797E88]"></div> 
                  <li className="snesMenuBtn group active:animate-slide transition-none bg-primary border-8 border-primary rounded-md shadow-2xl">
                      <a target="_blank" className='snesMenuBtnInner group-active:animate-slide text-[#9c8ae0] transition-duration-0 transition-none shadow-inner shadow-primary !rounded-full justify-center tracking-widest bg-gradient-to-b from-[#341f62] via-[#55379b] to-[#907acd]' href='/documents/Resume_Software_Engineer.pdf'>Resume<span id='buttonTriangle' className=' tracking-wide -skew-x-12 -ml-1.5 h-0 w-0 border-solid border-t-20 border-r-0 border-b-0 border-l-10 border-t-transparent border--r-transparent border-b-transparent border-l-[#9c8ae0]'></span></a>
                  </li>
              </ul>
          </nav>     
        </div>
    )
                  }
      



export default MainContent