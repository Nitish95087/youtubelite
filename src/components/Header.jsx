import React,{useContext,useState} from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom';
import {AiOutlineMenu,AiOutlineSearch} from 'react-icons/ai';
import {MdKeyboardVoice} from 'react-icons/md'
import {BiArrowBack} from 'react-icons/bi'
import {RiVideoAddLine} from 'react-icons/ri'
import { Context } from '../context/contextApi';
import ytLogo from '../images/yt-logo.png'
import ytMobileLogo from '../images/yt-logo-mobile.png'
import Loader from '../shared/Loader';

const Header = () => {
   
  const {setMobileMenu,mobileSearch, setMobileSearch,loading} = useContext(Context);
  const [searchQuery, setSearchQuery] = useState("");
 
  const navigate = useNavigate();


 const handleMobileSearch = ()=>{
  setMobileSearch(!mobileSearch);
 }

 const handleSearchEnter = (e)=>{
   if(e.key == "Enter" || e == "btnSearch" && searchQuery.length > 0 ){
     navigate(`/searchResult/${searchQuery}`);
    setMobileSearch(false);
   }
 }

 const {pathname} = useLocation();
 const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

 
 return(
  <div className="sticky top-0 z-10 flex items-center justify-between h-14 px-2 md:px-5 bg-white dark:bg-black">
    {loading && (<Loader/>)}
    <div className="flex h-5 items-center">
      
      <>
      <div className={`hidden sm:flex items-center justify-center md:mr-6 cursor-pointer w-10 h-10 rounded-full hover:bg-[#303030]/[0.6] `} onClick={()=>{setMobileMenu(true)}}>
        <AiOutlineMenu className='text-white text-2xl'/>
      </div>

      <Link to="/" className={`flex h-5 items-center justify-center ${mobileSearch ? "hidden":""} `}>
      <img src={ytLogo} alt="Youtube Logo" className='h-full' />
      </Link>
      </>
      
    
     
    </div>

    <div className={`group ${mobileSearch ? "": "max-sm:hidden"} flex items-center`}>

         <BiArrowBack className='text-white text-2xl mr-1 sm:hidden' onClick={handleMobileSearch}/>
          <div className={`flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0`}>
              <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                  <AiOutlineSearch className="text-white text-xl" />
              </div>
              <input
                  type="text"
                  className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                placeholder='Search'
                value={searchQuery}
                onChange={(e)=>{ setSearchQuery(e.target.value)}}
                onKeyDown={handleSearchEnter}
              />
          </div>
          <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-[#303030]/[0.4] hover:bg-[#303030]"  onClick={()=>{handleSearchEnter("btnSearch")}} >
              <AiOutlineSearch className="text-white text-xl" />
          </button>
          <div className="mx-1 md:mx-3 p-1 rounded-full bg-[#303030]/[0.6] hover:bg-[#303030] cursor-pointer">
          <MdKeyboardVoice className='text-white text-2xl'/>
          </div>
     </div>

     <div className="flex items-center gap-4">

      <div className="hidden sm:flex">
        <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
          <RiVideoAddLine className="text-white text-xl cursor-pointer" />
        </div>
      </div>

      <button className={`${mobileSearch ? "hidden": "sm:hidden"}`} onClick={handleMobileSearch} >
              <AiOutlineSearch className="text-white text-2xl" />
      </button>

      <div className={`flex w-8 h-8 overflow-hidden rounded-full md:ml-4 ${mobileSearch ? "hidden":""}`}>
      <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
      </div>

     </div>

  </div>
 )

 
}

export default Header