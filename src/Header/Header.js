import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
        <a href="#">Buy <KeyboardArrowDownIcon className='downArrow'/></a>
        <span className='post'>Post Property <span className='free'>FREE</span></span>

        </div>

    </div>
  )
}

export default Header