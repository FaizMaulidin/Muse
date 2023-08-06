import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHome, faPlay, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul className='flex lg:hidden fixed w-full h-20 bg-gradient-to-t from-black via-black/50 via-70% from-10% left-0 bottom-0 justify-evenly items-end py-2'>
      <li className='w-3/12'><Link to='/' className='flex flex-col  items-center text-sm gap-1 tracking-wider' href="">
        <div className="text-2xl">
          <FontAwesomeIcon icon={faHome} />
        </div>
        Home
      </Link></li>
      <li className='w-3/12'><Link to='/liked' className='flex flex-col  items-center text-sm gap-1 tracking-wider' href="">
        <div className="text-2xl">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        Liked
      </Link></li>
      <li className='w-3/12'><Link to='/playlists' className='flex flex-col  items-center text-sm gap-1 tracking-wider' href="">
        <div className="text-2xl">
          <FontAwesomeIcon icon={faPlay} />
        </div>
        Playlist
      </Link></li>
      <li className='w-3/12'><Link to="/premium" className='flex flex-col  items-center text-sm gap-1 tracking-wider' href="">
        <div className="text-2xl">
          <FontAwesomeIcon icon={faStar} />
        </div>
        Premium
      </Link></li>
    </ul>
  )
}

export default Navbar