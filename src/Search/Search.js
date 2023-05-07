import React from 'react';
import tvc from '../assets/tvc.png';
// import tvc2 from '../Header/image/tvc2.png';
import './Search.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/material';

const Search = () => {

  return (
    <div>
        <div className='searchsec'>
            <Container>
                 <div className='row'>
                     <div className='col-9'>
                        <div className='search-content'>
                            <h3>Welcome back! Let's continue your search</h3>
                            <ul className='searchmenu'>
                                <li><a className='line active' href='#'>Buy</a></li>
                                <li><a className='line' href='#'>Rent</a></li>
                                <li><a className='line' href='#'>PG</a></li>
                                <li><a className='line' href='#'>Plot</a></li>
                                <li><a className='line' href='#'>Commercial</a></li>
                                <li><a className='line' href='#'>Post Free Property Ad</a></li>
                            </ul>
                            <div className='searchbox'>
                                <div className='searchcenter'>
                                   <LocationOnIcon />
                                   <p className='chennailoc'>Chennai</p>
                                </div>
                                   <input type='text' placeholder='Add more...'></input>
                                <div className='searchcenter'>
                                    <HomeIcon />
                                    {/* <p>Flat</p>
                                    <KeyboardArrowDownIcon /> */}
                                    <div class="dropdown">
        
                                        <select>
                                            <option value="" selected disabled>Flats</option>
                                            <option value="1">1 BhK</option>
                                            <option value="2">2 Bhk</option>
                                            <option value="3">3 Bhk</option>
                                            <option value="3">4 Bhk</option>
                                            <option value="3">5+ Bhk</option>
                                        </select>
                                        </div>
                                </div>
                                <div className='searchcenter'>
                                    <CurrencyRupeeIcon />
                                    {/* <p>Budget</p>
                                    <KeyboardArrowDownIcon /> */}
                                     <div class="dropdown">
        
                                            <select>
                                                <option value="" selected disabled>Budget</option>
                                                <option value="1">5 Lac</option>
                                                <option value="2">10 Lac</option>
                                                <option value="2">20 Lac</option>
                                                <option value="2">30 Lac</option> 
                                                <option value="3">40 Lac</option>
                                                <option value="3">50 Lac</option>
                                                <option value="3">60 Lac</option>
                                            </select>
                                            </div>
                                </div>
                                 <button><SearchIcon />Search</button>
                            </div>
                        </div>
                     </div>
                     <div className='col-2'>
                              <div className='img-content'>
                                  <img src={tvc}></img>
                                  {/* <img src={tvc2}></img> */}
                              </div>
                     </div>
                 </div>
                 </Container>
        </div>
    </div>
  )
}

export default Search