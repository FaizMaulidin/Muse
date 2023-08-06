import React from 'react'

const Header = (props) => {
  return (
    <div className=' py-5 border-b-2 border-zinc-800/50'>
        <h1 className='font-bold text-4xl'>{props.name}</h1>
    </div>
  )
}

export default Header