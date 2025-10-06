import React from 'react'

const Model = ({closeModal}) => {
  return (
    <div>
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)] backdrop-blur-2xl'>
            <div className='w-96 h-80 bg-white rounded shadow-lg p-4'>
                <h2 className='text-xl font-bold mb-4'>Modal Title</h2>
                <button onClick={closeModal} className='bg-blue-500 rounded h-9 w-40'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Model