import SearchBox from './SearchBox'
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import Meaning from './Meaning'

type MyDefinitions = any;
type MyTagTypes = any;
type MyReducerPath = any;

const Layout = () => {
  const { meaning } : any= useSelector((state : RootState<MyDefinitions, MyTagTypes, MyReducerPath>) => state.meaning)

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
