
import { Trash2 } from 'lucide-react'
import './App.css'
import ImageHeader from './components/imageHeader'

function App() {
  

  return (
 
     <div className='h-full flex flex-col items-center justify-center '>
      <ImageHeader />
      <div className='w-[250px] '>
        <form className='mb-20' >
          <input
          className='w-full p-2 rounded-sm mb-2 bg-gray-200 '
           type="text" name="" id="" />
          <button className='bg-gray-200 p-2 rounded-sm hover:bg-gray-400 cursor-pointer w-full ' type='submit'>Add</button>
        </form>
        <div className='h-52 overflow-y-auto'>
         <div className='flex justify-between items-center border border-slate-600 pl-2 mr-1 mb-2 py-2 ' >
          <p>Type Script </p>
          <Trash2 className='cursor-pointer' size={20} />
         </div>
        </div>

      </div>
     </div>
    
  )
}

export default App
