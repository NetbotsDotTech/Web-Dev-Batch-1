import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import SearchIcon from '@mui/icons-material/Search'
import Select from '../DropDown/SelectDropdown'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import compareIcon from '../../assets/images/compare.png'
import wishIcon from '../../assets/images/wishlist.png'
import cartIcon from '../../assets/images/cart.png'
import accountIcon from '../../assets/images/account.png'
import setting from '../../assets/images/setting.png'
import logout from '../../assets/images/logout.png'
import location from '../../assets/images/location.png'
import  ClickAwayListener from '@mui/material/ClickAwayListener'
import Navigation from './nav/navigation.jsx'



const Header = () => {
    const [isOpenDropDwon, setIsOpenDropDwon]=useState(false)
    const [Categories, setCategories] = useState([
      
        "Milks ",
        "Drinks",
        "Cloths",
        "Fresh SeaFood",
        " Pet Foods",
        " Fast Food",
        "Baking Materials",
        "Vegetables",
        "Fresh Fruit",
        "Bread & Juice",
        "Milks",
        "Drinks",
        "Cloths",
        "Fresh SeaFood"

    ])
const [contryName,setContryName]=useState([
    'Pakistan',
    'India',
    'China',
    'Iran',
    'Indonasia',
    'America',
    'Japan',
    'Sudia'
])
    return (
        <div>
            <header>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-sm-1">
                            <img src={logo} alt="Not found" width={60} />
                        </div>
                        {/* Header Search Start here*/}
                        <div className="col-sm-6">
                            <div className="headerSearch flex align-items-center">
                                <Select data={Categories} placeholder={"All Categories"} icon={false}/>

                                <div className="search">
                                    <input type="text" placeholder='Search for items...' />
                                    <SearchIcon className='searchIcon cursor' />
                                </div>



                            </div>
                        </div>
                        {/*Header Search end here */}
                        <div className="col-sm-5 d-flex align-items-center">
                      <div className="ml-auto d-flex align-items-center">
                      <div className="country">
                        <Select data={contryName} placeholder={"Your Location"} icon={ <LocationOnOutlinedIcon style={{opacity:0.7 }}/>}/>
                        </div>
                        <ClickAwayListener onClickAway={()=>setIsOpenDropDwon(false)}>
                        <ul className="list list-inline mb-0 headerTabs">
                            <li className='list-inline-item '>
                                <span className='cursor'><img src={compareIcon} width={18} />
                                <span className='badge bg-success rounded-circle text-align-center'>3</span>
                                Compare</span>

                            </li>
                            <li className='list-inline-item '>
                                <span className='cursor'><img src={wishIcon} width={16} />
                                <span className='badge bg-success rounded-circle text-align-center'>3</span>
                                Wishlist</span>

                            </li>
                            <li className='list-inline-item '>
                                <span className='cursor'><img src={cartIcon} width={16} />
                                <span className='badge bg-success rounded-circle text-align-center'>4</span>
                                Cart</span>

                            </li>
                            <li className='list-inline-item'>
                         
                                <span onClick={()=>setIsOpenDropDwon(!isOpenDropDwon)} className='last cursor'><img src={accountIcon} width={16} />
                                Account</span>

                                {
                                    isOpenDropDwon!==false &&
                                <ul className='dropdownMenu'>
                                    <li><button> <img src={accountIcon} width={22}/>My Account</button> </li>
                                    <li><button><img src={location} width={25} />Order Tracking</button></li>
                                    <li><button><img src={wishIcon} width={22} />My Wishlist</button></li>
                                    <li><button><img src={setting} width={45} />Setting</button> </li>
                                    <li><button><img src={logout} width={22} />Log-Out</button></li>




                                </ul>
                                }
                                

                            </li>
                        </ul>
                        </ClickAwayListener>
                      </div>
                        </div>

                    </div>
                </div>

            </header>
            <Navigation/>
        </div>
    )
}

export default Header
