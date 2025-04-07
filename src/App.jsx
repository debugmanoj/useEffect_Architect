import React from 'react'
import CustomHookCommonPattern from './Pages/CustomHookCommonPattern'
import ReactQueryForDataFetching from './Pages/ReactQueryForDataFetching'
import SyncExternalStore from './Pages/SyncExternalStore'
import UseCallBack_UseMemo from './Pages/UseCallBack_UseMemo'

const App = () => {

  return (
    <>
    <CustomHookCommonPattern/>
    <ReactQueryForDataFetching/>
    <SyncExternalStore/>
    <UseCallBack_UseMemo/>
    </>

  )
}

export default App