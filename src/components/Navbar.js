import React from 'react'
// import headerIcon from './images/headerIcon.png'
import  headerIcon from '../images/headerIcon.png'
import bookname from '../images/KeazoNBOOKS.png'
import { PiAddressBookFill } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa";
import { SlDiamond } from "react-icons/sl";
import profile from '../images/profileImage.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='header-main'>
    
            <img src={headerIcon}/>
            <img src={bookname}/>

            <input placeholder='Search for the books you want and read it now...Sherlock Homes,Harry Potter' />
            <button>Search</button>
       
        <PiAddressBookFill className='icon'/>
        <FaRegBell className='icon'/>
        <SlDiamond className='icon'/>
        <img  src={profile}/>
    </div>
  )
}

export default Navbar