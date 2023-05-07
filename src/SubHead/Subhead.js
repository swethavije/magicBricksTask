import React from 'react';
import './Subhead.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Container } from '@mui/material';

const Subhead = () => {
  return (
    <div>
   <div className='subhead'>
      <Container>
         <div className='row'>
           <div className='col-9'>
              <ul class="menubar">
                            <li class="nav-link"><a href="#">Buy<KeyboardArrowDownIcon className='arrowdown' /></a></li>
                            <li class="nav-link"><a href="#">Rent<KeyboardArrowDownIcon className='arrowdown' /></a></li>
                            <li class="nav-link"><a href="#">Sell<KeyboardArrowDownIcon className='arrowdown' /></a></li>
                            <li class="nav-link"><a href="#">Home Lones<KeyboardArrowDownIcon className='arrowdown' /></a></li>
                            <li class="nav-link"><a href="#">Property Service<KeyboardArrowDownIcon className='arrowdown' /></a></li> 
                            <li class="nav-link"><a href="#">MB Advice<KeyboardArrowDownIcon className='arrowdown' /></a></li>
                            <li class="nav-link"><a href="#">Help<KeyboardArrowDownIcon className='arrowdown' /></a></li>   
                </ul>
                </div>
                <div className='col-2'>
                    <div className='offer'>
                       <LocalShippingIcon className='offbus' />
                       <p><a href='#'>20% OFF On Home Shifting</a></p>
                    </div>
                </div>
         </div>
   </Container>
         
       </div>
    </div>
  )
}

export default Subhead