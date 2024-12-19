import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/arpitpatel15')
        .then(responce=> responce.json())
        .then(data => {
            setData(data)
        })
    },[])
  return (
    <div className='text-center text-xl'>
      Github followers : {data.followers}
    </div>
  )
}

export default Github
