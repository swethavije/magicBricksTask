import React from 'react'
import "./Footer.scss"
import { Container} from '@mui/material'
import googleimg from "../assets/google.png"
import appimg from "../assets/app.jpg"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className='footer-section'>
        <Container>
            <div className='row'>
                <div className='col-5'>
                    <div className='aboutSection'>
                         <p className='aboutHead'>About Magicbricks</p>
                         <p className='aboutContent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                         <div className='aboutIcons'>
                            {/* <div className='store'> */}
                                <img src={googleimg} alt="google store " id="googleImg"/>
                                <img src={appimg} alt="app store " id="appImg"/>
                            {/* </div> */}
                            <div className='icons'>
                                <FacebookOutlinedIcon className='abtIcons' style={{backgroundColor:"#8282ca"}}/>
                                <TwitterIcon className='abtIcons' style={{backgroundColor:"#00bcff"}}/>
                                <LinkedInIcon className='abtIcons' style={{backgroundColor:"#1212d5"}}/>
                                <YouTubeIcon className='abtIcons' style={{backgroundColor:"red"}}/>
                                <InstagramIcon className='abtIcons' style={{backgroundColor:"orange"}}/>


                            </div>
                         </div>
                    </div>

                </div>
                {/*  */}
                <div className='col-6'>
                <div className='propertySection'>
                    <div className='Property'>
                        <p className='prohead'>Property in India
                        </p>
                        <p className='places'>
                        <span>Property in delhi </span> <span className='line'>|</span> <span>Property in Mumbai</span>  <span className='line'>|</span>  <span>Property in chennai</span> <span className='line'>|</span>  <span>Property in pune</span> <span className='line'>|</span>   <span>Property in noida</span>  <span className='line'>|</span> <span>Property in gurgaon</span>  <span className='line'>|</span> <span>Property in bangalore</span> <span className='line'>|</span>  <span>Property in ahmedabad</span> <span>Property in delhi</span>
                        </p>

                    </div>
                    <div className='Property'>
                        <p className='prohead'>New project in India</p>
                        <p className='places'>
                        <span>New Project in delhi</span> <span className='line'>|</span>  <span>New Project in Mumbai</span><span className='line'>|</span>  <span>New Project in chennai</span> <span className='line'>|</span> <span>New Project in pune</span> <span className='line'>|</span>  <span>New Project in noida</span> <span className='line'>|</span>  <span>New Project in gurgaon</span> <span className='line'>|</span>  <span>New Projectin bangalore</span> <span className='line'>|</span> <span>PNew Project in ahmedabad</span> <span className='line'>|</span>
                        </p>
                        

                    </div>
                        
                        </div>
                    
                </div>
            </div>

        </Container>
   

    </div>
    // last
   
  )
}

export default Footer