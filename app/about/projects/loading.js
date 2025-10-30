import React from 'react'

const Loading = () => {
  return (
    <div className='p-20 mb-2'>
        <h1 className='text-3xl font-bold underline'>Projects Page</h1>
        <ul >
            {(Array(3).fill(0).map((_, index) => (
                <div key={index}className='w-full h-24 animate-pulse bg-gray-200 mt-5 p-2 border-2'>
                <li className='text-2xl font-bold'key={index}>Loading...</li>
                
                </div>
            )))
            }
        </ul>
    </div>
  )
}

export default Loading