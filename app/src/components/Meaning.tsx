import { RootState } from '@reduxjs/toolkit/query'
import { useSelector } from 'react-redux'
import { AiOutlineSound } from "react-icons/ai";

type MyDefinitions = any;
type MyTagTypes = any;
type MyReducerPath = any;

const Meaning = () => {

  const { meaning  , phonetics} : any = useSelector((state : RootState<MyDefinitions, MyTagTypes, MyReducerPath>) => state.meaning)
  const audio = new Audio(phonetics);

  const playSound = () =>{
    console.log(" hello" , phonetics);
    if(phonetics){
      audio.play();
    }else{
      alert("No!Audio Avaialble")
    }
  }
  return (
    <>
      <div className='px-6 grid'>
          {
            meaning.map((item :any , index : number) => {
              return(
                <div key={index} className='grid place p-2 my-4 shadow-xl rounded-lg'>
                    <div className='flex justify-between items-center capitalize px-2'>
                      <h5 style={{textTransform : "capitalize"}}>{item.partOfSpeech}</h5>
                      <button onClick={playSound} className='bg-transparent border-0 '><AiOutlineSound /></button>
                    </div>
                    <p className='px-2'>{item.definitions[0].definition}</p>
                </div>
              )
            })
          }
      </div>
    </>
  )
}

export default Meaning
