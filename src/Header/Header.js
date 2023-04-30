import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.scss"
function Header() {
  return (
    <div className='header-section'>
        <div className='header-left'>
            <h3>magicbricks</h3>
            <div className='left-menu'>
                <a href="#">Buy <KeyboardArrowDownIcon className='downArrow'/></a>
                <a href="#">Rent <KeyboardArrowDownIcon className='downArrow'/></a>
                <a href="#">Sell <KeyboardArrowDownIcon className='downArrow'/></a>
                <a href="#">HomeLoans <KeyboardArrowDownIcon className='downArrow'/></a>
            </div>

        </div>
        <div className='header-right'>
        <a href="#">Login <KeyboardArrowDownIcon className='downArrow'/></a>
        <span className='post'>Post Property <span className='free'>FREE</span></span>
        <button className='menubtn'>  <MenuIcon style={{fontSize:"12px"}}/></button>
       
       

        </div>

    </div>
  )
}

export default Header