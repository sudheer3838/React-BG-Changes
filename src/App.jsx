import { useState } from "react"

function App() {
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState("#fff")
  // const bgClickEvent = (e)=>{
  //   const eventValue = e.target.value.toLowerCase();
  //   // console.log(eventValue);    
  //   setColor(eventValue)
  // }
  return (
    <>
      <div className="h-screen w-full" style={{ backgroundColor: color }}>
        <div className="fixed flex bottom-12 justify-center inset-x-0 px-4">
          <div className="flex gap-3 bg-white rounded px-4 py-1 ">
            {/* <input type="button" onClick={(e)=>bgClickEvent(e)} value={"Red"} className="btn outline-none px-4 rounded py-1 text-white" style={{ backgroundColor: "red" }} /> */}
            <button onClick={() => setColor("red")} className="outline-none px-4 rounded py-1 text-white" style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setColor("black")} className="outline-none px-4 rounded py-1 text-white" style={{ backgroundColor: "black" }}>Black</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 rounded py-1 text-white" style={{ backgroundColor: "green" }}>Bellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
