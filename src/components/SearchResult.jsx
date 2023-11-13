import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import fetchFromApi from '../utils/api'
import { Context } from '../context/contextApi'
import {LeftNav,SearchResultVideoCard,SearchResultChannelCard} from '../components'


const SearchResult = () => {
  const [searchResult, setSearchResult] = useState(null);
  const {searchQuery} = useParams();
  const {setLoading} = useContext(Context);

  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResultVideo();
  },[searchQuery])

  const fetchSearchResultVideo = ()=>{
    setLoading(true);
   fetchFromApi(`search/?q=${searchQuery}`).then((res)=>{
    setSearchResult(res?.contents);
    setLoading(false);
   })
  }

  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav/>
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {searchResult?.map((item)=>{
          return(
            item?.type == "video" ? <SearchResultVideoCard key={item?.video?.videoId} video={item?.video}/> : <SearchResultChannelCard key={item?.channel?.channelId} channel={item?.channel}/>
          )
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchResult