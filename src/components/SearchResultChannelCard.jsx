import React from 'react'
import { Link } from 'react-router-dom';
import {BsFillCheckCircleFill} from 'react-icons/bs'

const SearchResultChannelCard = ({channel}) => {
  
  return (
    <div className='flex flex-row items-start py-10  px-10'>
      
      <Link to={`/channel/${channel?.channelId}`}>
      <div className="flex shrink-0 h-[88px] md:h-[100px] w-[88px] md:w-[100px] rounded-full bg-slate-800 overflow-hidden">
        <img src={channel?.avatar[1]?.url} alt="" className='h-full w-full object-cover' />
      </div>
      </Link>

      <div className="flex flex-col gap-2 ml-4 md:ml-6">
        <Link to={`/channel/${channel?.channelId}`}>
      <div className="flex flex-row  items-center ">
        <span className="text-sm md:text-2xl font-bold line-clamp-1 text-white">
          {channel?.title}
        </span>
        <span className="text-sm md:text-xl ml-2 text-white/[0.7]">
              {channel?.badges[0]?.type ===
                  "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill />
              )}
          </span>
      </div>
      </Link>
    
      <div className="flex items-center md:gap-2 flex-wrap ">
      <span className="text-sm font-semibold text-white">{channel?.username}</span>
      <span className='text-sm font-bold line-clamp-1 text-white'> {channel?.stats?.subscribersText}</span>
      </div>

      <div className="">
        <span className="text-sm line-clamp-1 md:line-clamp-2 text-white/[0.7]">
            {channel?.descriptionSnippet}
        </span></div>

      </div>

    </div>
  )
}

export default SearchResultChannelCard