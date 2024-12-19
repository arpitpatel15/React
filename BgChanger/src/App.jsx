import { useState } from "react";

function App() {
  const [color, setColor] = useState("Yellow");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center inset-x-0 top-10 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white">
            <button className="outline-none rounded-full px-4 py-1 text-white" style={{backgroundColor:'Red'}} onClick={() => setColor("red")}>Red</button>
            <button className="outline-none rounded-full px-4 py-1 text-white" style={{backgroundColor:'Green'}} onClick={() => setColor("green")}>Green</button>
            <button className="outline-none rounded-full px-4 py-1 text-white" style={{backgroundColor:'Blue'}} onClick={() => setColor("blue")}>Blue</button>
            <button className="outline-none rounded-full px-4 py-1 text-black" style={{backgroundColor:'Yellow'}} onClick={() => setColor("yellow")}>Yellow</button>
            <button className="outline-none rounded-full px-4 py-1 text-black" style={{backgroundColor:'Pink'}} onClick={() => setColor("pink")}>Pink</button>
            <button className="outline-none rounded-full px-4 py-1 text-white" style={{backgroundColor:'Purple'}} onClick={() => setColor("purple")}>Purple</button>
            <button className="outline-none rounded-full px-4 py-1 text-black" style={{backgroundColor:'White'}} onClick={() => setColor("white")}>White</button>
            <button className="outline-none rounded-full px-4 py-1 text-white" style={{backgroundColor:'Black'}} onClick={() => setColor("Black")}>Black</button>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
