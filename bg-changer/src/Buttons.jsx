import React from 'react'
function Button({color}){
    //let [color, setColor] = useState("white")
    return(
    <button 
            onClick={()=>{setColor(color)}}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: color}}>{color}</button>
    )
}

export default Button