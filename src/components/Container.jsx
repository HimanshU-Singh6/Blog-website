import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full h-full text-text-50 bg-background-900'>
    {children}
    </div>
  )
}

export default Container