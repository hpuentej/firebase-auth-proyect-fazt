import React from 'react'

export const Error = ({error}) => {
  return (
    <div className='bg-red-500 text-3xl mb-4 rounded-md p-3'>{error}</div>
  )
}

