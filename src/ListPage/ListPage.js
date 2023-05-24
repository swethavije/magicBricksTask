import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import "./ListPage.scss"
import Footer from '../Footer/Footer'
import { Container, Grid } from '@mui/material';
import houseimg from "../assets/staticDetailsImg.jpeg"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PolylineRoundedIcon from '@mui/icons-material/PolylineRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
function ListPage() {
  return (
    <div>
        {/* header section */}
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
        {/* subhead section */}
    <div className='subhead-section'>
        <Container>
           <div className="subhead-content">
            <div className="buy">
               <a href="#">Buy</a>
               <KeyboardArrowDownIcon className='downarr'/> 
               <span style={{color:"#ccc"}}>|</span>
               <a href="#" className="location">Chennai</a>
               <a href="#" style={{color:"#939191",marginLeft:"5px"}}>Add More</a>
            </div>
            <div className="others">
               <a href="#">Top Localities  <KeyboardArrowDownIcon className='downarr'/> </a>
               <a href="#">Budget  <KeyboardArrowDownIcon className='downarr'/></a>
               <a href="#">Flat +2 <CancelOutlinedIcon className='downarr'/></a>
               <a href="#">BHK  <KeyboardArrowDownIcon className='downarr'/></a>
               <a href="#">Owners <CancelOutlinedIcon className='downarr'/></a>
               <a href="#"><span className="num">9</span>More Filtres  <KeyboardArrowDownIcon className='downarr'/></a>
            </div>
         </div>
           

        </Container>

    </div>
        {/* content section */}
    <div className='content-section'>
        <Container>
                  <h1>15483 results | Property for sale in Chennai without brokerage</h1>
                  <div className='listOfDetails'>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <div className='houseimg'>
                                <div className='imgDetails'>
                                    <img src={houseimg} alt="housepic"></img>
                                    <p className='imgcount'> <CollectionsOutlinedIcon style={{fontSize:"9px"}}/> 4+</p>
                                    <p className='update'>Updated today</p>
                                </div>
                                <p className='owner'>Owner: joshua singh</p>
                            </div>
                            
                        </Grid>
                        <Grid item xs={6}>
                            <div className='detailsOfHouse'>
                                <div className='listHead'>
                                    <span>ONLY ON MALGICBRICKS</span>
                                     <div className='ListIcons'>
                                        <FavoriteBorderOutlinedIcon className='icons'/>
                                        <PolylineRoundedIcon className='icons'/>
                                        <MoreVertRoundedIcon className='icons'/>

                                     </div>
                                </div>
                                     <h1 style={{fontSize:"20px"}}>Owner's 3 BHK Flat for Sale in Perfect Residency Kolanthur</h1>
                                     <p className='underlineWord' style={{textDecorationLine:"underline"}}>Perfect Residency</p>
                                     <div className='houseStaus'>
                                        <div className='housebox'>
                                            <ChairOutlinedIcon className='boxicons'/>
                                         <div className='sidebox'>
                                            <p className='lightWord'>CARPET AREA</p>
                                            <p >980 spft </p>
                                            </div>   
                                        </div>
                                        |
                                        <div className='housebox'>
                                            <ApartmentIcon className='boxicons'/>
                                         <div className='sidebox'>
                                            <p className='lightWord'>STATUS</p>
                                            <p >Ready to move </p>
                                            </div>   
                                        </div>
                                        |
                                        <div className='housebox'>
                                            <SignalCellularAltIcon className='boxicons'/>
                                         <div className='sidebox'>
                                            <p className='lightWord'>FLOORS</p>
                                            <p >2 out of 2</p>
                                            </div>   
                                        </div>
                                        <div className='arrowbox'>
                                            <KeyboardArrowDownIcon/>
                                        </div>
                                     </div>
                                     <p className='lightWord'>This gorgeous 3 BHK Flat is available for sale in Kolathur,Chennai.This flat is placed in ...<KeyboardArrowDownIcon className='paraArr'/></p>
                                     
                                </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className='viewDetails'>
                                <h4>₹ 76 Lac</h4>
                                <p>₹6,452 per sqft</p>
                                <button className='viewbtn'>View Details</button>
                            </div>
                            
                        </Grid>
                    </Grid>
                  </div>
        </Container>
    
     </div>
        {/* footer section */}
        <Footer/>
    </div>
  )
}

export default ListPage