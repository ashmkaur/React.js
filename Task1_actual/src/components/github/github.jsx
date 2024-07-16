import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github(){
    // const [data,setdata]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ashmkaur')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setdata(data)
    //     })
    // },[])
    const data= useLoaderData()
    return(
        <div className="flex text-center m-4 bg-white text-black text-3xl font-bold font-poppins p-4 items-center gap-5">Github followers:{data.followers}
        <img src={data.avatar_url} alt="catiephoto" width={300}/></div>
    )
}

export const githubinfoloader= async()=>{
   const response= await fetch('https://api.github.com/users/ashmkaur')
   return response.json()
}

