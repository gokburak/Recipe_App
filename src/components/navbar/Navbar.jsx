import React,{useState} from 'react'
import{Hamburger, Logo, Menu, MenuLink, Nav} from "./NavbarStyles"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Nav>
      <Logo onClick={()=>setIsOpen(!isOpen)}  to="/home" >
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={()=>setIsOpen(!isOpen)}  >
        <span/>
        <span/>
        <span/>
      </Hamburger>

      <Menu osman={isOpen} >
        <MenuLink to="/about" onClick={()=>setIsOpen(!isOpen)} >About</MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink to="/" onClick={()=>setIsOpen(!isOpen)}
        onMouseUp={()=>sessionStorage.clear()}
        >Logout</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar