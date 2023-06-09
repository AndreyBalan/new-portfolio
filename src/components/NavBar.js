import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './Icons'


const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
                h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300 
                ${router.asPath === href ? "w-full" : "w-0"}
            `}
            >&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
  return (
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between'
    >
        <nav>
            <CustomLink href="/" title="Home" className='mr-4' />
            <CustomLink href="/about" title="About" className='mx-4'/>
            <CustomLink href="/projects" title="Projects" className='mx-4'/>
            <CustomLink href="/articles" title="Articles" className='ml-4'/>
        </nav>
        
        <nav className='flex item-center justify-center flex-wrap'>
            <a href="https://twitter.com" target={'_blank'}>
                <TwitterIcon />     
            </a> 
            <a href="https://github.com/" target={'_blank'}>
                <GithubIcon />     
            </a> 
            <a href="https://www.linkedin.com/" target={'_blank'}>
                <LinkedInIcon />     
            </a> 
            <a href="https://pinterest.com/" target={'_blank'}>
                <PinterestIcon />     
            </a> 
            <a href="https://dribbble.com/" target={'_blank'}>
                <DribbbleIcon />     
            </a> 
            
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo/>
        </div>
    </header>
  )
}

export default NavBar