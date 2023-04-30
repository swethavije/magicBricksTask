import React from 'react'
import Header from '../Header/Header'
import "./Details.scss"
import { Container, Grid, TextField } from '@mui/material'
import staticDetailImg from "../assets/staticDetailsImg.jpeg"
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CurtainsClosedIcon from '@mui/icons-material/CurtainsClosed';
import Person2Icon from '@mui/icons-material/Person2';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import NaturePeopleOutlinedIcon from '@mui/icons-material/NaturePeopleOutlined';
import DirectionsCarFilledTwoToneIcon from '@mui/icons-material/DirectionsCarFilledTwoTone';
import SecurityTwoToneIcon from '@mui/icons-material/SecurityTwoTone';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Footer from '../Footer/Footer'

function Details() {
  return (
    <div>
        <Header/>
        <div className='details-section'>
            <Container>
                {/* above intro */}
                <div className='intro'>
                    <p>Home <ChevronRightOutlinedIcon className='rightarrow'/> Property for sale in chennai <ChevronRightOutlinedIcon className='rightarrow'/>  Flats for sale in chrompet <ChevronRightOutlinedIcon className='rightarrow'/>  3 BHK flats for sale in chrompet <ChevronRightOutlinedIcon className='rightarrow'/>  12357 sq-ft </p>
                    <p> Posted on Mar 06,23       
                    Property ID:63597445 </p>
                </div>
        <div className='firstpart'>
        <Grid container spacing={2}>
            {/* details main display */}
            <Grid item xs={9}>
            <div className='details-main'>
                {/* heading */}
                <div className='houseprice'>
                <h4>₹ 63.8 Lac <span className='cashback'>Get ₹19.136 cashback on Home Loan</span></h4>
                <p>3 BHK 1237 sq-ft Flat For sale <span className='drkline'>Chromepet,Chennai</span></p>
                </div>
                {/* img with content */}
                <Grid container spacing={2}>
                
                <Grid item xs={5}>
                    <div className='houseimg'>
                        <img src={staticDetailImg} alt="staticImg"/>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div className='houseDetails'>
                       <div className='houseIcons'>
                        <p className='houseFurn'><SingleBedIcon className='furnIcons'/><span className='num'>3</span>Beds</p><span style={{height:"10px",color:"#ccc"}}>|</span> 
                        <p className='houseFurn'><BathtubIcon className='furnIcons'/><span className='num'>2</span>Baths</p> <span style={{height:"10px",color:"#ccc"}}>|</span> 
                        <p className='houseFurn'><DirectionsCarIcon className='furnIcons'/><span className='num'>1</span>Covered parking</p><span style={{height:"10px",color:"#ccc"}}>|</span> 
                        <p className='houseFurn'><CurtainsClosedIcon className='furnIcons'/>Unfurnished</p>
                        </div>
                        <Grid container spacing={2}>
                        <Grid item xs={4}>
                        <div>
                            <div className='firstdiv'>
                                <p className='lightWord'>Super Built-Up Area</p>
                                <p className='darkWord'>1237 sqft</p>
                            </div>
                            <div className="firstdiv">
                                <p className='lightWord'>Floor</p>
                                <p className='darkWord'>2(Out of 4 Floors)</p>
                            </div>
                            <div className='firstdiv'>
                                <p className='lightWord'>Lift</p>
                                <p className='darkWord'>1</p>
                            </div>
                        </div>
                        </Grid>
                        <Grid item xs={4}>
                        <div>
                            <div className='firstdiv'>
                                <p className='lightWord'>Developer</p>
                                <p className='darkline'>Doshi Housing</p>
                            </div>
                            <div className='secdiv'>
                                <p className='lightWord'>Transaction Type</p>
                                <p className='darkWord'>New Property</p>
                            </div>
                            <div className='thirddiv'>
                                <p className='lightWord'>Furnished Status</p>
                                <p className='darkWord'>Unfurnished</p>
                            </div>
                        </div>
                        </Grid>
                        <Grid item xs={4}>
                        <div>
                            <div className='firstdiv'>
                                <p className='lightWord'>Project</p>
                                <p className='darkline'>Doshi FirstNest</p>
                            </div>
                            <div className='secdiv'>
                                <p className='lightWord'>status</p>
                                <p className='darkWord'>Ready to Move</p>
                            </div>
                            <div className='thirddiv'>
                                <p className='lightWord'>Car Parking</p>
                                <p className='darkWord'>1 covered</p>
                            </div>
                        </div>
                        </Grid>
                        </Grid>

                        
                    </div>
                </Grid>
           </Grid>
                {/* offer */}
                <div className='offercontent'>
                <span className='offWord'><span className='off'>OFFER</span>40th Anniversary Offer-save Upto $Lakhs</span>
                </div>
                <hr/>
                <div className='connectWays'>
                    <div className='contactButtons'>
                        <button className="builderBtn">contact Builder</button>
                        <button className="siteBtn">Book Site Visit</button>
                    </div>
                    <div className='lastupdate'>
                        <p className='lightWord' style={{fontSize: '12px',margin:0}}> <Person2Icon id="proIcon"/>  Last contact made 5 days ago</p>
                    </div>
                </div>
            </div>
            {/* why buy section */}
            <div className='whyBuy'>
                <h3 className='whyHead'>Why buy in this project?</h3>
                <ul>
                    <li>C.C no EC/Central-1/161/2020</li>
                    <li>Ideal environment for people to live to work to grow</li>
                    <li>Designed to delight every first home buyer</li>
                </ul>
                <p className='unLine'>+81 more</p>
            </div>
            {/* more details section */}
            <div className='moreDetail'>
                <h2 className='moreHead'>More Details</h2>
                <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div className='lightpara'>
                        <p>Price Breakup</p>
                        <p>Booking Amount</p>
                        <p>RERA ID</p>
                        <p>Address</p>
                        <p>Furnishing</p>
                        <p>Flooring</p>
                        <p>Water Availability</p>
                    </div>
                </Grid>
                <Grid item xs={8}>
                <div className='darkpara'>
                        <p>₹ 63.8 Lac</p>
                        <p>₹ 1.0 Lac</p>
                        <p>TN/01/Building/0131/2017</p>
                        <p>Tjirmudivakkam,chennai,chromepet,chennai-south,Tamil Nadu</p>
                        <p>Unfurnished</p>
                        <p>Vitrified</p>
                        <p>24 Hours Available</p>
                    </div>
                </Grid>
                </Grid>
                <p className='viewDetails'>View all details <KeyboardArrowDownIcon className='downArrow'/>  </p>
                <p className='desp'><b style={{color:"black"}}>Description:</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type....<span className='readmore'>Read More</span></p>
                <button className='builderBtn'>Contact bulider</button>

            </div>
            {/* Amenties */}
            <div className='amenties'>
                <h3 className='amhead'>Amenties</h3>
                <div className='rowAmenties'>
                    <p> <EmojiObjectsTwoToneIcon className='amIcons'/>Power Back Up</p>
                    <p><WaterDropOutlinedIcon className='amIcons'/> Rain Water Harvesting</p>
                    <p> <HomeWorkOutlinedIcon className='amIcons'/>Club House</p>
                </div>
                <div className='rowAmenties'>
                    <p><NaturePeopleOutlinedIcon className='amIcons'/>Park</p>
                    <p> <DirectionsCarFilledTwoToneIcon className='amIcons'/>Reserved Parking</p>
                    <p> <SecurityTwoToneIcon className='amIcons'/>Security</p>
                </div>
                <div className='amentiesLast'>
                <p className='viewDetails'>View all 16 Amenties  <KeyboardArrowDownIcon className='downArrow'/></p>
                <p className='adownload'><UploadFileIcon className='aupIcon'/> Download Brochure</p>
            </div>
            </div>
           
            </Grid>
              {/* details sidebar */}
  
            <Grid item xs={3}>
               
            <div className='details-side'>
                <div className='contactHead'>
                    <h4>Contact Builder</h4>
                    <h4>Doshi Housing Team</h4>
                    <p className='lightletter'>-91-81xxxxxxx61</p>
                </div>
                <hr className="dotLine"></hr>
                <div className='formFileds'>
                <TextField id="standard-basic" placeholder="Your Name" variant="standard" />
                <TextField id="standard-basic" placeholder="Email" type="email" variant="standard" />
                <TextField id="standard-basic" placeholder="Mobile number" type="number" variant="standard" />
                <p className='lightletter'>I Agree to magicbricks Terms of use</p>
                <button className='conbtns'>Get Contact Details</button>
                </div>

            </div>
            <div className='download'>
                <h4 className='downlword'><UploadFileIcon id="upIcon"/>Download Brochure</h4>
            </div>
                
            </Grid>
            
        </Grid>
       
        </div>
         {/* disclaimer */}
         <div className='Disclaimer'>
        <p className='desp'><b style={{color:"black"}}>Disclaimer:</b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type....<span className='readmore'>Read More</span></p>
            
        </div>
          
        </Container>
        <Footer/>
        <div className='lastsection'>
            <Container>
         <p>All rights Reserved. Copyright 2023 Magicbricks</p>
         </Container>
       </div>
       
        </div>
    </div>
  )
}

export default Details