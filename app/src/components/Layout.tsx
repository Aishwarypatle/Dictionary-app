import React, { useEffect } from 'react'
import SearchBox from './SearchBox'
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import Meaning from './Meaning'
const Layout = () => {
  const { meaning } = useSelector((state : RootState) => state.meaning)

  return (
    <>
      <div className="layout">
        <div className='grid justify-center items-center'>
          <SearchBox />
        {
          meaning &&  
            <Meaning />
        }
        </div>
      </div>
    </>
  )
}

export default Layout
