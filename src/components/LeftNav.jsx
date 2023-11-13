import React,{useContext, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Context } from '../context/contextApi'
import {categories} from '../utils/constant'
import {LeftNavMenuItem} from '../components'
import {AiOutlineClose} from 'react-icons/ai'

const LeftNav = () => {
    const {mobileMenu,setMobileMenu,selectedCategory,setSelectedCategory}= useContext(Context);

    const navigate = useNavigate();

    const clickHandler = (name,type)=>{
      switch(type){
        case "category":
          return setSelectedCategory(name);
        case "home":
          return setSelectedCategory(name);
        case "menu":
          return false;
        default :
        break;      
      }
    }

  return (
    <>
    <div className={`w-[240px] overflow-y-auto h-full py-4 bg-black  z-20 transition-all border-r border-[#303030] scroll-container fixed top-0 left-0 
    ${mobileMenu ? "translate-x-0":"translate-x-[-240px] "} `
    }>
      <div className="absolute right-1 top-1 p-1 bg-[#303030]/[0.4] rounded-full hover:bg-[#303030] cursor-pointer"><AiOutlineClose className='text-white text-2xl' onClick={()=>{setMobileMenu(!mobileMenu)}}/></div>
 
      <div className="flex flex-col px-5">
         {categories[0].map((item)=>(
          <React.Fragment key={item.name}>
           <LeftNavMenuItem
           name={item.type == "home" ? "Home" :item.name}
           icon={item.icon}
           action={()=>{
            clickHandler(item.name,item.type);
            navigate("/");
           }}
           className={`${selectedCategory === item.name ? "bg-white/[0.15]":""}`}
           />
           {item.divider && (
            <hr className='my-5 border-white/[0.2]'/>
           )}

          </React.Fragment>
         ))}
         <hr className='my-5 border-white/[0.2]'/>
         <div className="text-white/[0.5] text-sm">Clone by Nitish Prajapti</div>
      </div>
    </div>
    </>
  )
}

export default LeftNav