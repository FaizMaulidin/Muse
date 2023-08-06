import React, { useEffect } from 'react'
import Navbar from '../components/comps/navbar'
import Header from '../components/comps/header'
import RecFor from '../components/Playlists/recForPlaylist'
import BigNavbar from '../components/comps/bigNavbar'

const Playlists = () => {

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className="bg-stone-950 text-zinc-300">
         <BigNavbar/>
         <div className='min-h-screen lg:ml-72 px-3 pb-24 flex flex-col gap-5'>
            <Header name="Playlists" />
            <div className="w-full m-auto lg:w-fit bg-stone-800 rounded-md p-5 flex flex-col gap-5 text-center items-center">
               <h1 className='font-bold text-2xl'>Make your first playlist</h1>
               <p>We will help you find your favourite music and make a playlist for you</p>
               <button className=' text-lg font-bold px-4 py-2 rounded-full bg-zinc-300 text-stone-950 w-fit'>
                  Find Musics
               </button>
            </div>
            <RecFor name="For your playlists" limit='all' divider={8} min={108} />
            <Navbar />
         </div>
      </div>
   )
}

export default Playlists