import React,{useContext,useEffect} from 'react'
import {LeftNav,VideoCard,Slider} from '../components'
import fetchFromApi from '../utils/api'
import { Context } from '../context/contextApi'

const Feed = () => {

  useEffect(()=>{
    document.getElementById("root").classList.remove('custom-h');
  },[])
 
  const {loading, searchResult} = useContext(Context);

  return (
    <>
      <Slider/>
      <LeftNav/>
    <div className='flex flex-row h-[calc(100%-100px)] sm:h-[calc(100%-56px)] bg-black text-white'>
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
        {
          !loading && searchResult && searchResult.map(({type,video})=>{
            if(type !== "video") return false;
            return(
              <VideoCard key={video?.videoId} video={video}/>
            )
          })
        }
        </div>
      </div>
    </div>
    </>
  )
}

export default Feed