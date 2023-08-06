import React, { useEffect } from 'react'
import Header from '../components/comps/header'
import Navbar from '../components/comps/navbar'
import RecFor from '../components/Playlists/recForPlaylist'
import BigNavbar from '../components/comps/bigNavbar'

const Liked = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-stone-950 text-zinc-300">
      <BigNavbar/>
      <div className='min-h-screen lg:ml-72 px-3 pb-24 flex flex-col gap-5'>
        <Header name="Liked Songs" />
        <div className="w-full m-auto lg:w-fit bg-stone-800 rounded-md p-5 flex flex-col gap-5 text-center items-center">
          <h1 className='font-bold text-2xl'>Find Yourself in Music</h1>
          <p>Browse our library to find your favourite types of music</p>
          <button className=' text-lg font-bold px-4 py-2 rounded-full bg-zinc-300 text-stone-950 w-fit'>
            Find Musics
          </button>
        </div>
        <RecFor name="Recommendation for you" limit='all' divider={6} min={125} />
        <Navbar />
      </div>
    </div>
  )
}

export default Liked