import React from 'react'
import useUserData from '../hooks/useUserData'

const CustomHookCommonPattern = () => {
      const {jsonData,loading,error}=useUserData()
  return (
    <>

    <h1>Custom Hook Common Pattern</h1>
    {
        loading?"loading":jsonData.title
    }
    </>
  )
}

export default CustomHookCommonPattern