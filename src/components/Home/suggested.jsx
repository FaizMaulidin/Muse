import React from 'react'
import SectionTitle from '../comps/sectionTitle'
import ArtistList from './Lists/artistList'

const Suggested = () => {
  return (
    <div>
        <SectionTitle title='Suggested Artists'/>
        <div className="grid grid-flow-col overflow-scroll w-full lg:grid-cols-4 xl:grid-cols-6 lg:grid-flow-row lg:w-fit lg:overflow-hidden gap-5 py-5">
            <ArtistList />
        </div>
    </div>
  )
}

export default Suggested