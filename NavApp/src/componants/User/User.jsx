import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
const {userid} = useParams()
  return (
    <div className='text-center text-gray-700 text-xl'>
      User : {userid}
    </div>
  )
}

export default User
