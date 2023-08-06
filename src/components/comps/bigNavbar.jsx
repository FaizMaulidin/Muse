import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeart, faPlay, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const BigNavbar = () => {
   return (
      <div className='hidden lg:flex flex-col fixed gap-8 w-72 bg-stone-900 h-[98vh] rounded-r-xl top-[50%] px-5 py-8 -translate-y-[50%] font-bold'>
         <Link to="/" className="flex gap-2 text-xl items-center">
            <FontAwesomeIcon icon={faHome} />
            <h1>Home</h1>
         </Link>
         <div className="grid gap-2">
            <Link to="/liked" className="flex gap-2 text-xl items-center">
               <FontAwesomeIcon icon={faHeart} />
               <h1>Liked Songs</h1>
            </Link>
            <div className="w-full bg-stone-800 rounded-md px-5 pt-2 pb-4 flex flex-col gap-3 text-center items-center">
               <h1 className='font-bold text-xl'>Find Yourself in Music</h1>
               <p className='font-normal text-sm'>Browse our library to find your favourite types of music</p>
               <button className=' text-base font-bold px-4 py-1 rounded-full bg-zinc-300 text-stone-900 w-fit'>
                  Find Musics
               </button>
            </div>
         </div>
         <div className="grid gap-2">
            <Link to="/playlists" className="flex gap-2 text-xl items-center">
               <FontAwesomeIcon icon={faPlay} />
               <h1>Your Playlists</h1>
            </Link>
            <div className="w-full bg-stone-800 rounded-md px-5 pt-2 pb-4 flex flex-col gap-3 text-center items-center">
               <h1 className='font-bold text-xl'>Make your first playlist</h1>
               <p className=' font-normal text-sm'>We will help you find your favourite music and make a playlist for you</p>
               <button className=' text-base font-bold px-4 py-1 rounded-full bg-zinc-300 text-stone-900 w-fit'>
                  Make Playlist
               </button>
            </div>
         </div>
         <Link to="/premium" className='text-stone-900 bg-zinc-300 text-center px-8 text-lg py-2 rounded-full w-full'>Get Premium</Link>
      </div>
   )
}

export default BigNavbar