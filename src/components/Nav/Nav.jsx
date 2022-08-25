import React from 'react'
import {Outlet} from 'react-router-dom'
import {FaGithubSquare} from "react-icons/fa"
import {GrLinkedin} from "react-icons/gr"
import {Link} from 'react-router-dom'
import Style from './Nav.module.css'
export default function Nav() {
  return (
  <div>

    <nav className={Style.nav}>

        <Link className={Style.link} to="/"><h3 className={Style.title}><span>TO DO</span> LIST</h3></Link>
        <div>
            <a className={Style.github}href='https://github.com/andresDiazLugo' rel="noopener noreferrer"  target="_blank"><FaGithubSquare size="3rem"/></a>
            <a className={Style.linkedin} href='https://www.linkedin.com/in/alberto-diaz-lugo-91b0a0239/'rel="noopener noreferrer" target="_blank"><GrLinkedin size="2.6rem"/></a>
            <Link className={Style.link} to="/about"><a className={Style.title}>about</a></Link>
        </div>
    </nav>
        <Outlet/>
  </div>
  )
}
