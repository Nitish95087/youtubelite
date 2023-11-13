import React,{useContext, useState} from 'react'
import { categories } from '../utils/constant'
import {MdOutlineExplore} from 'react-icons/md'
import { Context } from '../context/contextApi'
import { Navigate, useNavigate } from 'react-router-dom'

const Slider = () => {
    const {mobileMenu,setMobileMenu,mobileSearch,selectedCategory,setSelectedCategory} = useContext(Context);
    
    const navigate = useNavigate();

  return (
    <div className={`${mobileSearch ? "hidden":"sm:hidden"}  h-[44px] flex items-center gap-5 overflow-x-auto p-2 bg-black border-y border-[#303030] py-2`}>
        <button className='mx-3 px-2 py-1 bg-[#303030]/[0.4]'><MdOutlineExplore className='text-white text-2xl' onClick={()=>{setMobileMenu(!mobileMenu)}}/></button>
        {
            categories[1].map((item)=>(
                <div key={item} className={`px-2 py-1 rounded-lg bg-[#303030]/[0.4] text-white ${selectedCategory === item ? "bg-gray-600":""}`} onClick={()=>{
                  setSelectedCategory(item); 
                  navigate("/");
                 }}>{item}</div>
            ))
        }
    </div>
  )
}

export default Slider