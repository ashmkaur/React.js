import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userid}= useParams()
    return(
        <div className="bg-white text-black p-4 text-3xl font-bold font-poppins">User: {userid}</div>
    )
}