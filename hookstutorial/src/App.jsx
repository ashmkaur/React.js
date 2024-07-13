import { useState } from "react";
function App(){

  let [counter,setCounter] = useState(15)
  //let counter= 15

  const Addvalue=()=>{
      console.log("Value added",counter)
      counter=counter+1;
      if(counter>20)
        counter=20;
      setCounter(counter)
  }

  const Removevalue=()=>{
    console.log("Value removes",counter)
    counter=counter-1;
    if(counter<0)
      counter=0;
    setCounter(counter)
}
// will show at console of browser but UI problem reslove??--> HOOKS
// And And And harr jagah changes hon ge no need to get the reference as in javascript
  return (
      <>
      <h1>Hii new project</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={Addvalue}>
          Add VAlue
      </button>
      <br></br>
      <button onClick={Removevalue}>
          Remove Value
      </button>
      </>
  )
}

export default App