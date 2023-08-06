import React from 'react'
import SectionTitle from '../comps/sectionTitle'
import RecList from './Lists/recommendList'

const Recommended = (props) => {
  return (
    <div>
        <SectionTitle title={props.title}/>
        <div className="w-full grid grid-flow-col xl:grid-cols-6 lg:grid-cols-4 lg:grid-flow-row lg:w-fit lg:overflow-hidden gap-5 pt-3 pb-4 overflow-scroll">
          <RecList divider={props.divider} limit={props.limit} min={props.min} ids={props.ids}/>
        </div>
    </div>
  )
}

export default Recommended