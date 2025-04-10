import React from 'react'

const Header = ({title}) => {
  return (
    <header className='bg-gray-800 bg-opacity-35 backdrop-blur-md shadow-lg border-b border-gray-700'>
      <div className="bg-gray-700  mx-auto py-4 px-4 sm:px-8 lg:px-8 ">
          <h1 className='text font-semibold text-gray-200'>{title}</h1>
      </div>
    </header>
  )
}

export default Header
