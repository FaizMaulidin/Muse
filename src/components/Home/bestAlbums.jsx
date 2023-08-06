import React, { useEffect, useState } from 'react'
import SectionTitle from '../comps/sectionTitle'
import AlbumList from './Lists/albumList'

const BestAlbums = () => {
    
    return (
        <div className="flex flex-col gap-2">
            <SectionTitle title="Best Albums"/>
            <div className='grid grid-cols-2 md:grid-cols-3 w-full gap-2'>
                <AlbumList />
            </div>
        </div>
    )
}

export default BestAlbums