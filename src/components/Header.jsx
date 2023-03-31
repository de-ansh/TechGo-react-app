import React from 'react'
import {Link} from "react-router-dom";
import "../styles/header.scss";
import{HashLink} from "react-router-hash-link";

const Header =() => {
  return (
    <nav>
        <h1>
            <HashLink to={"/#home"}>TechGO.</HashLink>
        </h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#team"}>Team</HashLink>
            <HashLink to= {"/#brand"}>Brand</HashLink>
        </main>
    </nav>
  )
}

export default Header