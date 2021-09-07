import React, { useEffect, useState } from 'react'
import LoadingPage from '../components/LoadingPage'
const Loading = () => {
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>setLoading(false),3000)
  },[loading])
  return (
    <div>
      <LoadingPage/>
    </div>
  )
}

export default Loading
