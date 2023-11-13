import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import {LeftNav} from '../components'
import fetchFromApi from '../utils/api';
import { Context } from '../context/contextApi';
import {SuggestionVideo} from '../components'
import { Link } from 'react-router-dom';

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState(null);
  const {id} = useParams();
  const {setLoading} = useContext(Context);

  useEffect(()=>{
    // document.getElementById("root").classList.add("custom-h");
    fetchVideoDetail();
    fetchRelatedVideo();
  },[id])

  const fetchVideoDetail = ()=>{
    setLoading(true);
    fetchFromApi(`video/details/?id=${id}`).then((res)=>{
      setVideo(res);
      setLoading(false);
    })
  }

  const fetchRelatedVideo = ()=>{
    setLoading(true);
    fetchFromApi(`video/related-contents/?id=${id}`).then((res)=>{
      setRelatedVideo(res);
      setLoading(false);
    })
  }


  return (
    <>
    <LeftNav/>
  <div className="w-full  bg-black flex justify-center">
    <div className="w-full max-w-[1280px] flex flex-col  md:flex-row">


      <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)]  px-4 py-3 lg:py-6">

      <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
          <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
          />
      </div>

        <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
        {video?.title}
        </div>

        <div className="flex justify-between flex-col md:flex-row mt-4">

          <div className="flex">
            
           
          <div className="flex items-start">
            <div className="flex h-11 w-11 rounded-full overflow-hidden">
            <Link to={`/channel/${video?.author?.channelId}`}>
                <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                />
                </Link>
            </div>
          </div>

          <div className="flex flex-col ml-3">
              <Link to={`/channel/${video?.author?.channelId}`}>
              <div className="text-white text-md font-semibold flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type ===
                      "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                  )}
              </div>
                   </Link>

              <div className="text-white/[0.7] text-sm">
                  {video?.author?.stats?.subscribersText}
              </div>
          </div>

         

         

        </div>

        <div className="flex text-white  mt-4 md:mt-0">
            <div className="flex items-center text-sm h-11 px-5 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl text-white mr-1" />
                {`${abbreviateNumber(
                    video?.stats?.likes,
                    2
                )}`}
                <span className='ml-1'> Likes</span>
            </div>
            <div className="flex items-center  text-sm  h-11 px-5 rounded-3xl bg-white/[0.15] ml-4">
                {`${abbreviateNumber(
                    video?.stats?.views,
                    2
                )}`}
                <span className='ml-1'> Views</span>
            </div>
        </div>



        </div>

        <div className="text-white  text-sm bg-[#303030]/[0.5] rounded-xl mt-4 p-4">
          {video?.description}
        </div>
      

      </div>

      <div className="flex flex-col py-6 px-4 overflow-y-auto scroll-container sm:w-[350px] xl:w-[400px]">
        {relatedVideo?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return (
                <SuggestionVideo
                    key={index}
                    video={item?.video}
                />
            );
        })}
      </div>

    </div>
  </div> 
  </>
  )
}

export default VideoDetail