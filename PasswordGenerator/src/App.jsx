import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAll, setNumberAll] = useState(false);
  const [charAll, setCharAll] = useState(false);
  const [password, setPassword] = useState("");
  const copyPassword = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pwd = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAll) str += "1234567890";
    if (charAll) str += "!@#$%^&*";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pwd += str.charAt(char);
    }
    setPassword(pwd);
  }, [length, numberAll, charAll]);

  const copyToClipboard = useCallback(()=>{
    alert("Password copied to clipboard")
    copyPassword.current?.select() 
    window.navigator.clipboard.writeText(password)
  },[password])

  
  //useCallback is for optimise and memoaize the code, it put the function in cache memory, we can make this function without using callback hook also , when useEffect is for recall function when field change
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAll,charAll,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 ">
        <h1 className="text-white text-center py-3 text-lg">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={copyPassword}
          />
          <button className="bg-orange-500 text-white w-20 text-center outline-black" onClick={copyToClipboard} >
            Copy
          </button>
        </div>
        <div className="flex gap-x-2 eve">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={90}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label>Length({length})</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input type="checkbox" id="input-num" defaultChecked={numberAll} onChange={() => {setNumberAll ((prev) => !prev)}}/>
            Number
            <input type="checkbox" id="input-char" defaultChecked={charAll} onChange={() => setCharAll ((prev) => !prev)}/>
            Spacial-Char
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
