import React from 'react'

const Box = (props) => {
  return (
    <div className='p-5 flex justify-evenly font-inter border border-red-900 rounded-2xl'>
        <div className=' w-20 h-20 border rounded-2xl shadow-xl'>
            hello
        </div>
        <div className='flex flex-col ml-5'>
          <span className={`${props.color} font-bolder text-xl font-bold`}>{props.head}</span>
          <span>{props.body}<br /></span>
        </div>
    </div>
  )
}

export default Box