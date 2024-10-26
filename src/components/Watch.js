import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {open} from "../redux/slice"
import Sidebar from "./Sidebar";

const Watch = () => {
  const [searchParams] = useSearchParams();
  searchParams.get("v");
  // console.log(searchParams.get("v"));

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(open());
  },[])
  

  return (
    <div className="flex ">
      <Sidebar/>
    <div className="">
      <iframe className="max-w-full"
        width="1100"
        height="500"
        src={
          "https://www.youtube.com/embed/" +
           searchParams.get("v")
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
};

export default Watch;
