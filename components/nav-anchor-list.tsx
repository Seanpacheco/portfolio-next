import React, {FC, useRef } from 'react'
import CSS from 'csstype'
import Logo from './logo-home-btn'
import MainContent from './main-content'



const snesButtonStyle: CSS.Properties = {
    border: 'solid',
    borderWidth: '10px',
    borderRadius: '5px',
    borderColor: '#4E309F',
    height: '75px',
    width: '225px',
    background: '#4E309F',
    display: 'flex',
    padding: '0px',
    boxShadow: '0 26px 58px 0 rgba(0, 0, 0, .22), 0 5px 14px 0 rgba(0, 0, 0, .18)'
    
}
const snesInner: CSS.Properties = {
    borderRadius: '31px',
    justifyContent: 'center',
    height: '51px',
    padding: '7px',
    background: 'rgb(52,31,98) linear-gradient(180deg, rgba(52,31,98,1) 0%, rgba(85,55,155,1) 35%, rgba(144,122,205,1) 100%)',
    boxShadow: ' 0 0 10px #4E309F inset',
    fontSize: '28px',
    letterSpacing: '3px',
    color: "#9C8AE0"
}

const menuLinks = [
    { title: 'About', id: 'about', key: 1, href: '#1'},
    { title: 'Projects', id: 'projects', key: 3, href: '#2'},
    { title: 'Contact', id: 'contact', key: 2, href: '#3'}   
]

const NavLink: FC = () => {
    const menuList = menuLinks.map((menuLink, index) =>
    <li key={menuLink.key} className="snesMenuBtn group transition-none hover:bg-primary hover:border-8 hover:border-primary hover:rounded-md hover:shadow-2xl">
        <a className='snesMenuBtnInner group-hover:text-secondary transition-none group-hover:duration-0 group-hover:transition-none group-hover:shadow-inner group-hover:shadow-primary group-hover:!rounded-full justify-center tracking-widest group-hover:bg-gradient-to-b group-hover:from-[#341f62] group-hover:via-[#55379b] group-hover:to-[#907acd]' href={menuLink.href}>{menuLink.title}</a>
    </li>
    )


    return(
        <ul className="menu p-4 w-80 bg-base-100 text-3xl subpixel-antialiased">
            <Logo/>
            <div className="divider mt-0"></div> 
                {menuList}
            <div className="divider"></div> 
            <li className="snesMenuBtn group active:animate-slide transition-none bg-primary border-8 border-primary rounded-md shadow-2xl">
                <a target="_blank" className='snesMenuBtnInner group-active:animate-slide text-secondary transition-noneduration-0 transition-none shadow-inner shadow-primary !rounded-full justify-center tracking-widest bg-gradient-to-b from-[#341f62] via-[#55379b] to-[#907acd]' href='/documents/Resume_Software_Engineer.pdf'>Resume<span id='buttonTriangle' className=' tracking-wide -skew-x-12 -ml-1.5 h-0 w-0 border-solid border-t-20 border-r-0 border-b-0 border-l-10 border-t-transparent border--r-transparent border-b-transparent border-l-[#9c8ae0]'></span></a>
            </li>
        </ul>
    )
}

export default NavLink

