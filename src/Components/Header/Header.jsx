import React, { useState } from 'react';
import headerImage from '../../../public/desktop_popupaccbn.png'
import { ImCross } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import headerLogo from '../../../public/bdjobsLogo (1).svg'
import menuIcon from '../../../public/BdjobsPro.svg'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import profileImage from '../../../public/profile.png'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { IoDocumentOutline } from "react-icons/io5";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { MdSend } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { TiFlowMerge } from "react-icons/ti";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { motion } from "framer-motion"
const Header = () => {
    const [headerBanner , setHeaserBanner] = useState(true)
    const [userchakri,setChakri] = useState(true)
    const [mynewbdjobs,setMyBdjobs] = useState(false)
    const [userelarning,setUserElearning] = useState(false)
    const [usertender,setUserTender] = useState(false)
    const [neyogKorta,setNeyogKorta] = useState(false)

    const Chakri = ()=>{
        setChakri(true)
        setMyBdjobs(false)
        setUserElearning(false)
        setUserTender(false)
        setNeyogKorta(false)
    }

    const mybdjobs = ()=>{
        setChakri(false)
        setMyBdjobs(true)
        setUserElearning(false)
        setUserTender(false)
        setNeyogKorta(false)
    }
    
    const elarning = ()=>{
        setUserElearning(true)
        setChakri(false)
        setMyBdjobs(false)
        setUserTender(false)
        setNeyogKorta(false)
    }

    const tenderClick = ()=>{
        setUserTender(true)
        setChakri(false)
        setMyBdjobs(false)
        setUserElearning(false)
        setNeyogKorta(false)
    }

    const neyogClick =()=>{
        setUserTender(false)
        setChakri(false)
        setMyBdjobs(false)
        setUserElearning(false)
        setNeyogKorta(true)
    }

    const headerBannerHandeler = ()=>{
        setHeaserBanner(false)
    }

    // drop down function start
        const [dropDown , setDropDown] = useState(false)
        const headerItems =()=>{
            setDropDown(!dropDown)
        }
     // drop down function end
        const [profile,setProfile] = useState(false)
        const profileDropDown = ()=>{
            setProfile(!profile)
        }
    //  profile drop down area

    // profile area end


    //  mbile menu area start

     const [mobileMenu,setMobileMenu] = useState(false)
    const mobileMenuOpen = ()=>{
         setMobileMenu(!mobileMenu)
    }
    // mobile menu area end








    return (
    //    main area start 
       <div className="main-container">
        {/* top header start */}
            <div className="header-main bg-[#E4EBF5]">
            {
                headerBanner && (
                    <div className="header-banner mx-4 flex justify-between items-center py-3  ">
                        <div className="right-content"></div>
                        <div className="middle-content">
                            <img src={headerImage } alt="" />
                        </div>
                        <div onClick={headerBannerHandeler} className="left-content">
                            <ImCross className="text-[20px] lg:text-[30px] text-[#757575] cursor-pointer"/>
                        </div>
                </div>
                )
            }
            </div>
          {/* top header end   */}
            







          {/* main header start   */}
           <div className="main-header bg-[#37474F] hidden lg:block">
               <div className="main-header-child mx-24">
                    <div className="main-header-all-content flex justify-between items-center ">
                            <div className="left-section">
                                <ul className="flex gap-6  ">
                                    <li onClick={Chakri} className={`${ userchakri && 'bg-[#2E619E] text-[white]'} text-[#BDBDBD] hover:bg-[#2E619F] duration-300 hover:text-[#FFFFFF] cursor-pointer py-[10px] px-2  text-[12px]`} >চাকরির খবর</li>
                                    <li onClick={mybdjobs} className={`${ mynewbdjobs && 'bg-[#67A846] text-[white]'} text-[#BDBDBD] hover:bg-[#66A746] duration-300 hover:text-[#FFFFFF] cursor-pointer py-[10px] px-2  text-[12px]`} >আমার বিডিজবস</li>
                                    <li onClick={elarning} className={`${ userelarning && 'bg-[#A50168] text-[white]'} text-[#BDBDBD] hover:bg-[#A50168] duration-300 hover:text-[#FFFFFF] cursor-pointer py-[10px] px-2  text-[12px]`} >ই-লার্নিং</li>
                                    <li onClick={tenderClick}  className={`${ usertender && 'bg-[#EF7C16] text-[white]'} text-[#BDBDBD] hover:bg-[#EF7C16] duration-300 hover:text-[#FFFFFF] cursor-pointer py-[10px] px-2  text-[12px]`}  >টেন্ডার/ইওআই</li>
                                    <li  onClick={neyogClick}  className={`${ neyogKorta && 'bg-[#0B5D87] text-[white]'} text-[#BDBDBD] hover:bg-[#0B5E88] duration-300 hover:text-[#FFFFFF] cursor-pointer py-[10px] px-2  text-[12px]`}>নিয়োগদাতাদের জন্য</li>
                                    <li  className={`  text-[#BDBDBD]  duration-300 hover:text-[#FFFFFF] cursor-pointer py-[10px] px-2  text-[12px]`} > <span className="bg-[#007D1F] py-[6px] px-[6px] rounded-sm">জব পোস্ট করুন</span>   </li>
                                    
                                </ul>
                            </div>
                            <div className="right-section flex items-center gap-5">
                                <div className="all-icon flex gap-2">
                                    <li  className={`list-none text-[#BDBDBD] hover:bg-[#2E619F] duration-300 hover:text-[#FFFFFF] cursor-pointer py-[10px] px-[10px]  text-[12px]`} ><FaYoutube /></li>
                                    <li  className={`list-none text-[#BDBDBD] hover:bg-[#2E619F] duration-300 hover:text-[#FFFFFF] cursor-pointer py-[10px] px-[10px]  text-[12px]`} ><FaFacebookF /></li>
                                    <li className={`list-none text-[#BDBDBD] hover:bg-[#2E619F] duration-300 hover:text-[#FFFFFF] cursor-pointer py-[10px] px-[10px]  text-[12px]`} ><FaGoogle /></li>
                                    <li className={`list-none text-[#BDBDBD] hover:bg-[#2E619F] duration-300 hover:text-[#FFFFFF] cursor-pointer py-[10px] px-[10px]  text-[12px]`} ><FaLinkedinIn/></li>
                                    <li className={`list-none text-[#BDBDBD] hover:bg-[#2E619F] duration-300 hover:text-[#FFFFFF] cursor-pointer py-[10px] px-[10px]  text-[12px]`} ><BsInstagram /></li>
                                </div>
                                <div className="mode-section ">
                                    <li className="list-none flex items-center overflow-hidden w-[100px] cursor-pointer h-5 text-[white] border rounded-sm">
                                        <span className="bg-[white] px-[2px] text-center text-[black] w-1/2">ENG</span><span className="w-1/2 px-[2px] text-center">BAN</span>
                                    </li>
                                </div>
                            </div>
                    </div>
               </div>
           </div>
           {/* main header area end */}







           {/* parent header start */}
            <div className="main-div  bg-[#FFFFFF] drop-shadow-lg">
                <div className="all-items flex justify-between items-center mx-4 lg:mx-24">
                    <div className="log-area">
                        <div className="logo-area ">
                             <img className="h-10 my-2" src={headerLogo } alt="" /> 
                        </div>
                    </div>







                    {/* menu  area start */}
                    <div className="menu-area ">
                        {/* mobile menu bars start */}
                           <div  className="mobile-menu cursor-pointer lg:hidden flex gap-4">
                               <CgMail className="hover:text-[#2F64A3] text-[30px] text-[#BDBDBD]"/>
                               <IoMdNotifications className="hover:text-[#2F64A3] text-[30px] text-[#BDBDBD]"/>
                               <div onClick={mobileMenuOpen} className="mobile-bar-button">
                                 <HiMiniBars3 className="hover:text-[#2F64A3] text-[30px] text-[#BDBDBD]"/>
                               </div>

                           </div>
                        {/* mobile menu bars end */}   
                        <div className="main-menu-area hidden lg:block">
                        <div className="all-menu-content ">
                            <ul className="flex items-center gap-6">
                                <li className="cursor-pointer hover:bg-[#F5F5F5] py-4 px-2 ">
                                    <div className="all-content relative">
                                        <img src={ menuIcon} alt="" />
                                        <span className="text-[#B3003C] border border-[#B3003C] text-[10px]  rounded-full px-3 items-center py-[-10px] absolute bottom-4 right-[-40px]">new</span>
                                    </div>
                                </li>
                                <li className="text-[13px] cursor-pointer hover:bg-[#F5F5F5] py-4 px-2">ভিডিও সিভি </li>
                                <li onClick={headerItems} className=" text-[13px] cursor-pointer hover:bg-[#F5F5F5] relative py-4 px-2 flex items-center gap-1">ক্যারিয়ার রিসোর্স <span> <IoMdArrowDropdown className="text-[16px]" /> </span> 
                                    {
                                        dropDown ?  <div className="dropdown-area absolute top-14">
                                        <ul className="py-4 bg-[white]  w-[180px] relative">
                                            <li className="my-2 px-4 hover:bg-[#F5F5F5] duration-100">ক্যারিয়ার গাইড</li>
                                            <li className="my-2 px-4 hover:bg-[#F5F5F5] duration-100">সাক্ষাত্কার টিপস</li>
                                            <li className="my-2 px-4 hover:bg-[#F5F5F5] duration-100">জীবনবৃত্তান্ত লিখন টিপস</li>
                                            <li className="my-2 px-4 hover:bg-[#F5F5F5] duration-100">প্রতিবেদন</li>
                                            <li className="my-2 px-4 hover:bg-[#F5F5F5] duration-100">ক্যারিয়ার পরামর্শদান</li>
                                            <li className="my-2 px-4 hover:bg-[#F5F5F5] duration-100">শিক্ষা সহায়িকা</li>
                                        </ul>
                                        <div className="border-area absolute top-0 bg-[#2F64A3] h-[2px] w-full"></div>
                                    </div> : ""
                                    }
                                    
                                   
                                </li>
                                <li className="cursor-pointer hover:bg-[#F5F5F5] py-4 px-3 "><IoMdNotifications className="hover:text-[#2F64A3] text-[20px] text-[#BDBDBD]"/></li>
                                <li className="cursor-pointer hover:bg-[#F5F5F5] py-4 px-2"><CgMail className="hover:text-[#2F64A3] text-[20px] text-[#BDBDBD]"/></li>
                                <li className="cursor-pointer hover:bg-[#F5F5F5] py-4 px-2">
                                    <div onClick={profileDropDown} className="profilr-area">
                                       <div className="profile-image flex items-center gap-1 relative">
                                          <img className="h-8 w-8 rounded-full border-[2px]" src={profileImage} alt="" />
                                          <p className="text-[13px] flex items-center gap-1">Rakib Sheikh <span><MdOutlineKeyboardArrowDown className="text-[18px]" /></span></p>
                                          { profile ?
                                             <motion.div initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:.5, duration:.5}} className="child-items  absolute top-12 w-[210px] py-4 initial = {{x:-100, opacity:0}} animate={{x:0, opacity:0}} transition={{delay:.5, duration:.5}}   bg-[white] ">
                                             <motion.ul  className="mx-4 relative">
                                                <li  className="text-[13px] flex gap-1 items-center text-[#777777] my-1" ><span><BiSolidEdit className="text-[18px]  text-[#777777] "/></span><span> বিডিজবস প্রোফাইল এডিট </span></li>
                                                <li className="text-[13px] flex gap-1 items-center text-[#777777] my-1" ><span><IoDocumentOutline className="text-[18px]  text-[#777777] "/></span><span>  বিডিজবস প্রোফাইল দেখা </span></li>
                                                <li className="text-[13px] flex gap-1 items-center text-[#777777] my-1" ><span><HiMiniVideoCamera className="text-[18px]  text-[#777777] "/></span><span>    ভিডিও সিভি  </span></li>
                                                <li className="text-[13px] flex gap-1 items-center text-[#777777] my-1" ><span><MdSend className="text-[18px]  text-[#777777] "/></span><span>  সিভি ইমেইল</span></li>
                                                <li className="text-[13px] flex gap-1 items-center text-[#777777] my-1" ><span className="bg-[black] h-[.5px] my-4 w-full"></span></li>
                                                <li className="text-[13px] flex gap-1 items-center text-[#777777] my-1" ><span><IoIosStar className="text-[18px]  text-[#777777] "/></span><span>  শর্টলিস্টেড চাকরি </span></li>
                                                <li className="text-[13px] flex gap-1 items-center text-[#777777] my-1" ><span><TiFlowMerge className="text-[18px]  text-[#777777] "/></span><span>   ফলো করা কোম্পানির লিস্ট </span></li>
                                                <li className="text-[13px] flex gap-1 items-center text-[#777777] my-1" ><span><HiOutlineDocumentCheck className="text-[18px]  text-[#777777] "/></span><span>   আবেদনকৃত চাকরি </span></li>
                                                <li className="text-[13px] flex gap-1 items-center text-[#777777] my-1" ><span><BiSolidEdit className="text-[18px]  text-[#777777] "/></span><span>  শর্টলিস্টেড চাকরি </span></li>
                                                <li className="text-[13px] flex gap-1 items-center text-[#777777] my-1" ><span className="bg-[black] h-[.5px] my-4 w-full"></span></li>
                                                <li className="text-[13px] flex gap-1 items-center text-[#777777] my-1" ><span><BiSolidEdit className="text-[18px]  text-[#777777] "/></span><span>  সাইন আউট </span></li>
                                             </motion.ul>
                                             <div className="profile-top-border absolute top-0 bg-[#2F64A3] h-[2px] w-full"></div>
                                          </motion.div> : ""
                                          }

                                       </div>
                                    </div> 
                                </li>
                                <li className="cursor-pointer hover:bg-[#F5F5F5] py-4 px-2"> <p className="text-[13px] flex items-center gap-1"> <span><FaPhoneAlt /></span><span>যোগাযোগ</span></p></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                {/* menu area end */}

                </div>
            </div>
             {/* parent header end */}


            {/* mobile phone menu area start */}
                {
                    mobileMenu ? 
                    <motion.div className="mobile-area-start z-50 lg:hidden min-h-screen w-full bg-[#rgb(232 232 232)] ">
                        <motion.div initial={{x:100, opacity:0}} animate ={{x:0, opacity:1}} transition={{delay:0, duration:.8}} className="all-content px-4 w-1/2 min-h-screen  absolute right-0   bg-[green]">
                             bvcbcvbcvbc
                        </motion.div>
                     </motion.div> : ""
                }
            {/* mobile phone menu area end */}
       </div>
    //    main area end
    );
};

export default Header;



